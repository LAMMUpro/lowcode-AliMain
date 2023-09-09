import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import page404 from './pages/404';
import home from './pages/home';
import Header from './layouts/Header';
import Aside from './layouts/Aside';
import Footer from './layouts/Footer';
import lowcode from './pages/lowcode';
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
import '@/style/index.scss'
import '@/style/fix-antd.scss'
import { NotificationOutlined } from '@ant-design/icons';

function App() {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', height: '100vh'}}>
        <Aside></Aside>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column', minWidth: 'calc(100% - 200px)'}}>
          <Header></Header>
          <section
            style={{
              flex: '1',
              padding: '0 10px 8px',
              overflow: 'scroll',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Breadcrumb style={{flexShrink: 0}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">客户</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">客户列表</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>客户详情</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{color: 'rgba(0, 0, 0, 0.55)', paddingLeft: '20px', cursor: 'pointer', flexWrap: 'nowrap', overflow: 'hidden'}}>
                <NotificationOutlined />
                <span style={{textWrap: 'nowrap'}}>: 你有一条待处理订单</span>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: 'white',
              }}
            >
              <Switch>
                <Route path='/lowcode' component={lowcode}></Route>
                <Route path='/404' component={page404}></Route>
                <Route path='/' component={home}></Route>
                <Redirect from="/index" to="/"/>
                <Route component={ page404 } />
              </Switch>
              {/* <Footer></Footer> */}
            </div>
          </section>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
