import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Loading } from '@alifd/next';
import { buildComponents, assetBundle, AssetLevel, AssetLoader } from '@alilc/lowcode-utils';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { injectComponents } from '@alilc/lowcode-plugin-inject';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler'
import { getProjectSchemaFromLocalStorage, getPackagesFromLocalStorage } from './services/pageManage';
import { config } from '@alilc/lowcode-engine';
import { getPage } from './services/api';
import { generateDataSourceMap } from './utils/data-helper';

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

const SamplePreview = () => {
  const [data, setData] = useState({});

  async function init() {
    const nodeId = getNodeId();
    const res = await getPage({id: nodeId});
    const packages = res.data.packages;
    const projectSchema = res.data.project_schema;
    const scenarioName = getScenarioName();
    // const packages = await getPackagesFromLocalStorage(scenarioName);
    // const projectSchema = await getProjectSchemaFromLocalStorage(scenarioName);
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

  const { schema, components } = data;

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
        appHelper={{
          requestHandlersMap: {
            fetch: createFetchHandler()
          },
          utils: {
            generateRemoteHandleMap: function () {
              console.log('初始化', this, schema);
              this.utils.remoteHandles = {
                ...generateDataSourceMap(schema?.remoteHandle?.list||[])
              }
              console.log('初始化后', this)
              // this.utils.remoteHandles['abs'] = {
              //   load: function () {
              //     console.log('加载请求');
              //   },
              //   reload: function () {
              //     console.log('重新加载请求');
              //   }
              // }
            },
            remoteHandles: {
              // () => {
                /** 使用 */
                // this.utils.remoteHandles['getA'].load();
              // }
            }
          }
        }}
      />
    </div>
  );
};

ReactDOM.render(<SamplePreview />, document.getElementById('ice-container'));
