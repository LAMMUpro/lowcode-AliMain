/** 组件英文名 */
export const componentName = "Select";
/** 组件中文名 */
export const componentNameCh = "选择器";
/** 组件schema片段 */
export default [
  {
    title: componentNameCh,
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
    schema: {
      componentName,
      props: {
        componentName,
        style: {
          width: 200,
        },
        options: [
          {
            label: 'A',
            value: 'A',
          },
          {
            label: 'B',
            value: 'B',
          },
          {
            label: 'C',
            value: 'C',
          },
        ],
      },
    },
  },
];
