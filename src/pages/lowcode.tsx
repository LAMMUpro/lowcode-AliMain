import { useState } from 'react';
import { buildComponents, assetBundle, AssetLevel, AssetLoader } from '@alilc/lowcode-utils';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { injectComponents } from '@alilc/lowcode-plugin-inject';

import { getProjectSchemaFromLocalStorage, getPackagesFromLocalStorage } from './api/pageManage';
import { getPage } from './api/api';

const getNodeId = function () {
  if (location.search) {
    return +(new URLSearchParams(location.search.slice(1)).get('nodeId') || 0);
  }
  return 0;
}

const SamplePreview = () => {
  const [data, setData] = useState({});
  const nodeId = getNodeId();
  console.log(nodeId);
  // debugger
  async function init() {
    const res = await getPage({id: nodeId});
    const packages = res.data.packages;
    const projectSchema = res.data.project_schema;
    // const scenarioName = '/index';
    // const packages = await getPackagesFromLocalStorage(scenarioName);
    // const projectSchema = await getProjectSchemaFromLocalStorage(scenarioName);
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

    // TODO asset may cause pollution
    const assetLoader = new AssetLoader();
    await assetLoader.load(libraryAsset);
    //@ts-ignore
    const components = await injectComponents(buildComponents(libraryMap, componentsMap));
    setData({
      schema,
      components,
    });
  }
  //@ts-ignore
  const { schema, components } = data;

  if (!schema || !components) {
    init();
    return <div>正在加载</div>;
  }

  return (
    <div>
      <ReactRenderer
        schema={schema}
        components={components}
      />
    </div>
  );
};

export default SamplePreview;