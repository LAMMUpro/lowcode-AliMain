import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Loading } from '@alifd/next';
import { buildComponents, assetBundle, AssetLevel, AssetLoader } from '@alilc/lowcode-utils';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { injectComponents } from '@alilc/lowcode-plugin-inject';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler'
import { config } from '@alilc/lowcode-engine';
import { generateRemoteHandleMap } from './utils/data-helper';
import { findPageSchemaByNodeId } from './api/PageSchema';
import { message } from 'antd';
import { host } from './utils';

const getScenarioName = function () {
  if (location.search) {
    return new URLSearchParams(location.search.slice(1)).get('scenarioName') || 'index';
  }
  return 'index';
}

const getNodeId = function () {
  if (location.search) {
    return +(new URLSearchParams(location.search.slice(1)).get('nodeId') || 1);
  }
  return 1;
}

/** 只赋值一次上下文! */
let isSeted = false;

const SamplePreview: React.FC = () => {
  const [data, setData] = useState({});

  async function init() {
    const nodeId = getNodeId();
    const res = await findPageSchemaByNodeId({nodeId});
    const packages = res.data.package;
    const projectSchema = res.data.schema;
    const scenarioName = getScenarioName();
    const { componentsMap: componentsMapArray, componentsTree } = projectSchema;
    const componentsMap: any = {};
    componentsMapArray.forEach((component: any) => {
      componentsMap[component.componentName] = component;
    });
    const schema = componentsTree[0];

    const libraryMap = {};
    const libraryAsset = [];
    packages.forEach(({ package: _package, library, urls, renderUrls }) => {
      libraryMap[_package] = library;
      if (renderUrls) {
        libraryAsset.push(renderUrls);
      } else if (urls) {
        libraryAsset.push(urls);
      }
    });

    const vendors = [assetBundle(libraryAsset, AssetLevel.Library)];

    // TODO asset may cause pollution
    const assetLoader = new AssetLoader();
    await assetLoader.load(libraryAsset);
    const components = await injectComponents(buildComponents(libraryMap, componentsMap));

    setData({
      schema,
      components,
    });
  }

  function onCompGetCtx(schema:any, ctx:any) {
    if (!isSeted && schema.componentName == 'Page') {
      // console.log('>>>上下文', ctx);
      ctx.remoteHandleMap = generateRemoteHandleMap(schema?.remoteHandle?.list||[], ctx);
      isSeted = true;
    }
  }

  const { schema, components, ctx } = data;

  if (!schema || !components) {
    init();
    return <Loading fullScreen />;
  }

  return (
    <div className="lowcode-plugin-sample-preview">
      <ReactRenderer
        className="lowcode-plugin-sample-preview-content"
        schema={schema}
        components={components}
        // onCompGetRef={onCompGetRef}
        onCompGetCtx={onCompGetCtx}
        appHelper={{
          requestHandlersMap: {
            fetch: createFetchHandler()
          },
          utils: {
            /** 在onCompGetCtx获取ctx上下文直接进行初始化! */
            // generateRemoteHandleMap: function () {
            //   /** 初始化this.utils.remoteHandles */
            //   this.remoteHandles = {
            //     ...generateRemoteHandleMap(schema?.remoteHandle?.list||[], ctx)
            //   }
            // },
            /** api方法 */
            remoteHandles: {},
            message: function (msg: string) {
              message.info(msg);
            }
          },
          constants: {
            host
          }
        }}
      />
    </div>
  );
};

ReactDOM.render(<SamplePreview />, document.getElementById('ice-container'));
