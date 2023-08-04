import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Tag } from '@alifd/next';
import './index.scss';
export interface IProps {
  logo?: string;
  href?: string;
  scenarioInfo?: any;
  scenarioDisplayName?: string;
}

const Logo: React.FC<IProps> = (props): React.ReactElement => {
  const { scenarioDisplayName, scenarioInfo } = props;
  const urls = scenarioInfo?.urls || [];
  return (
    <div className="lowcode-plugin-logo">
      <a className="logo" target="blank" href={props.href || 'https://lowcode-engine.cn'} style={{ backgroundImage: `url(${props.logo})` }} />
      {/* <div className="scenario-name">当前路径:{scenarioDisplayName}</div> */}
      <Tag color="#2db7f5">{scenarioDisplayName}</Tag>
      {/* {
        urls && (
          <Dropdown
            className="info-dropdown"
            trigger={(
              <img
                style={{
                  height: '18px',
                  position: 'relative',
                  top: '-2px',
                }}
                src="https://img.alicdn.com/imgextra/i4/O1CN013upU1R1yl5wVezP8k_!!6000000006618-2-tps-512-512.png"
              />
            )}
            triggerType="click"
          >
            <Menu onItemClick={(key, item) => window.open(key, '_blank')}>
              {
                urls.map((url: any) => <Menu.Item key={url.value}>{url.key}</Menu.Item>)
              }
            </Menu>
          </Dropdown>
        )
      } */}
    </div>
  );
};
// 示例 Logo widget
const LogoSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const scenarioDisplayName = config.get('scenarioDisplayName');
      const scenarioInfo = config.get('scenarioInfo');
      // 注册 logo widget
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <Logo scenarioDisplayName={scenarioDisplayName} scenarioInfo={scenarioInfo}  />,
        contentProps: {
          logo: '/logo.png',
          href: '/',
        },
        props: {
          align: 'left',
        },
      });
    },
  };
}
LogoSamplePlugin.pluginName = 'LogoSamplePlugin';
LogoSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default LogoSamplePlugin;