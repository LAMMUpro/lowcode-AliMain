import { IPublicTypeAssetsJson, IPublicTypePackage } from "@alilc/lowcode-types"

interface Meterial {
  packages: Array<IPublicTypePackage>
  components: IPublicTypeAssetsJson["components"]
}

/** 自定义组件 */
const CustomMeterial:Meterial = {
  "packages": [
    {
      "package": "@lammu/lowcode-component",
      "version": "0.1.6",
      "library": "BizComps",
      "urls": [
        "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/render/default/view.js",
        "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/render/default/view.css"
      ],
      "editUrls": [
        "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/view.js",
        "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/view.css"
      ],
      "advancedUrls": {
        "default": [
          "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/render/default/view.js",
          "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/render/default/view.css"
        ]
      },
      "advancedEditUrls": {}
    }
  ],
  "components": [
    {
      "exportName": "LammuLowcodeComponentMeta",
      "npm": {
        "package": "@lammu/lowcode-component",
        "version": "0.1.6"
      },
      "url": "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/meta.js",
      "urls": {
        "default": "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/meta.js"
      },
      "advancedUrls": {
        "default": [
          "https://unpkg.com/@lammu/lowcode-component@0.1.6/build/lowcode/meta.js"
        ]
      }
    }
  ],
}

/** antd */
const AntdMeterial:Meterial = {
  packages: [
    {
      "package": "@ant-design/icons",
      "version": "4.7.0",
      "urls": ["https://g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js"],
      "library": "icons"
    },
    {
      "package": "antd",
      "version": "4.19.5",
      "urls": [
        "https://g.alicdn.com/code/lib/antd/4.23.0/antd.min.js",
        "https://g.alicdn.com/code/lib/antd/4.23.0/antd.min.css"
      ],
      "library": "antd"
    },
    {
      "package": "@alilc/antd-lowcode-materials",
      "version": "1.2.1",
      "library": "AntdLowcode",
      "urls": [
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.css"
      ]
    },
  ],
  components: [
    {
      "exportName": "AlilcAntdLowcodeMaterialsMeta",
      "npm": {
        "package": "@alilc/antd-lowcode-materials",
        "version": "1.2.1"
      },
      "url": "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/meta.js"
      }
    },
  ],
}
export {
  Meterial,
  CustomMeterial,
  AntdMeterial
}