/** 组件英文名 */
export const componentName = "Switch";
/** 组件中文名 */
export const componentNameCh = "开关";
/** 组件schema片段 */
export default [
  {
    title: componentNameCh,
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/switch-1.png',
    schema: {
      componentName,
      props: {
        componentName,
        defaultChecked: true,
      },
    },
  },
];
