import { IPublicTypeAssetsJson, IPublicTypePackage } from "@alilc/lowcode-types";
import { CustomMeterial, Meterial, AntdMeterial } from "./material";

/** 公共物料 */
const CommonMaterial: Meterial = {
  /** 公共package */
  packages: [
    {
      "package": "moment",
      "version": "2.24.0",
      "urls": ["https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"],
      "library": "moment"
    },
    {
      "package": "lodash",
      "version": "4.6.1",
      "library": "_",
      "urls": ["https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"]
    },
    /** 字体图标 */
    // {
    //   "package": "iconfont-icons",
    //   "urls": "//at.alicdn.com/t/font_2369445_ukrtsovd92r.js"
    // },
    {
      "package": "@ant-design/icons",
      "version": "4.7.0",
      "urls": ["https://g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js"],
      "library": "icons"
    },
    {
      // "title": "fusion组件库",
      "package": "@alifd/next",
      "version": "1.26.4",
      "urls": [
        "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next.min.css",
        "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next-with-locales.min.js"
      ],
      "library": "Next"
    },

  ],
  /** 公共component */
  components: [],
}

const assets:IPublicTypeAssetsJson = {
  version: "1.0.0",
  packages: [
    ...CommonMaterial.packages,
    ...CustomMeterial.packages,
    ...AntdMeterial.packages,
  ],
  components: [
    ...CommonMaterial.components,
    ...CustomMeterial.components,
    ...AntdMeterial.components,
  ],
  sort: {
    groupList: ["自定义组件", "默认分组"],
    categoryList: ["布局", "通用", "表单", "反馈", "导航", "信息输入", "信息展示"]
  },
};
export default assets;