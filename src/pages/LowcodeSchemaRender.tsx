import React, { useEffect, useState } from 'react';
import { buildComponents, assetBundle, AssetLevel, AssetLoader } from '@alilc/lowcode-utils';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { injectComponents } from '@alilc/lowcode-plugin-inject';
import { findPageSchemaByNodeId } from '@/api/PageSchema';
import { useLocation } from 'react-router-dom';
import { Spin } from 'antd';
import { appHelper } from '@/utils/__initRenderParams';
// import { generateRemoteHandleMap } from '@/utils/data-helper';
import { generateRemoteHandleMap } from '@lammu/lowcode-plugin-remote-handle';

const getNodeId = function () {
  if (location.search) {
    return +(new URLSearchParams(location.search.slice(1)).get('nodeId') || 0);
  }
  return 0;
}

/** 只赋值一次上下文! */
let isSeted = false;

const SamplePreview = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  let nodeId = getNodeId();

  useEffect(()=>{
    nodeId = getNodeId();
    init();
  }, [location.search]);
  
  async function init() {
    setLoading(true);
    const res = await findPageSchemaByNodeId({nodeId});
    const packages = res.data.package;
    const projectSchema = res.data.schema;
    const { componentsMap: componentsMapArray, componentsTree } = projectSchema;
    const componentsMap: any = {};
    componentsMapArray.forEach((component: any) => {
      componentsMap[component.componentName] = component;
    });
    const schema = componentsTree[0];

    const libraryMap = {};
    const libraryAsset: Array<any> = [];
    packages.forEach(({ package: _package, library, urls, renderUrls }: any) => {
      (libraryMap as any)[_package] = library;
      if (renderUrls) {
        libraryAsset.push(renderUrls);
      } else if (urls) {
        libraryAsset.push(urls);
      }
    });

    const vendors = [assetBundle(libraryAsset, AssetLevel.Library)];

    const assetLoader = new AssetLoader();
    await assetLoader.load(libraryAsset);
    //@ts-ignore
    const components = await injectComponents(buildComponents(libraryMap, componentsMap));
    setData({
      schema,
      components,
    });
    setLoading(false);
  }

  function onCompGetCtx(schema:any, ctx:any) {
    if (!isSeted && schema.componentName == 'Page') {
      // console.log('>>>上下文', ctx);
      ctx.remoteHandleMap = generateRemoteHandleMap.call(ctx, schema?.remoteHandle?.list||[]);
      isSeted = true;
    }
  }

  //@ts-ignore
  const { schema, components } = data;

  return (
    <Spin 
      wrapperClassName='lowcode-renderer-outter-div' 
      tip="加载中..." 
      size="large" 
      spinning={loading}
    >
      <ReactRenderer
        schema={schema}
        components={components}
        onCompGetCtx={onCompGetCtx}
        appHelper={appHelper}
      />
    </Spin>
  );
};

export default SamplePreview;