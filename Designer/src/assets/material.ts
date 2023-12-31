import { IPublicTypeAssetsJson, IPublicTypePackage } from "@alilc/lowcode-types"

interface Meterial {
  packages: Array<IPublicTypePackage>
  components: IPublicTypeAssetsJson["components"]
}

/** 自定义组件 */
const CustomMeterial:Meterial = {
  "packages": [
    {
      "package": "@lammu/lowcode-component-use",
      "version": "0.1.6",
      "library": "LammuUseComponent",
      "urls": [
        "/@lammu/lowcode-component-use/build/lowcode/render/default/view.js",
        "/@lammu/lowcode-component-use/build/lowcode/render/default/view.css"
      ],
      "editUrls": [
        "/@lammu/lowcode-component-use/build/lowcode/view.js",
        "/@lammu/lowcode-component-use/build/lowcode/view.css"
      ],
      "advancedUrls": {
        "default": [
          "/@lammu/lowcode-component-use/build/lowcode/render/default/view.js",
          "/@lammu/lowcode-component-use/build/lowcode/render/default/view.css"
        ]
      },
      "advancedEditUrls": {}
    }
  ],
  "components": [
    {
      "exportName": "LammuLowcodeComponentUseMeta",
      "npm": {
        "package": "@lammu/lowcode-component-use",
        "version": "0.1.6"
      },
      "url": "/@lammu/lowcode-component-use/build/lowcode/meta.js",
      "urls": {
        "default": "/@lammu/lowcode-component-use/build/lowcode/meta.js"
      },
      "advancedUrls": {
        "default": [
          "/@lammu/lowcode-component-use/build/lowcode/meta.js"
        ]
      }
    }
  ],
}

/** 本地Antd */
const AntdMeterial:Meterial = {
  packages: [
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
      "package": "@lammu/lowcode-component-antd5",
      "version": "4.17.3",
      "library": "LammuAntd5",
      "urls": [
        "/@lammu/lowcode-component-antd5/build/lowcode/render/default/view.js",
        "/@lammu/lowcode-component-antd5/build/lowcode/render/default/view.css"
      ],
      "editUrls": [
        "/@lammu/lowcode-component-antd5/build/lowcode/view.js",
        "/@lammu/lowcode-component-antd5/build/lowcode/view.css"
      ]
    },
  ],
  components: [
    {
      "exportName": "LammuLowcodeComponentAntd5Meta",
      "npm": {
        "package": "@lammu/lowcode-component-antd5",
        "version": "4.17.3"
      },
      "url": "/@lammu/lowcode-component-antd5/build/lowcode/meta.js",
      "urls": {
        "default": "/@lammu/lowcode-component-antd5/build/lowcode/meta.js"
      }
    },
  ],
}

/** antd */
const _AntdMeterial:Meterial = {
  packages: [
    // {
    //   "package": "@ant-design/icons",
    //   "version": "4.7.0",
    //   "urls": ["https://g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js"],
    //   "library": "icons"
    // },
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