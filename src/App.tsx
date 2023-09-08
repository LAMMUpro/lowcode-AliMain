import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import page404 from './pages/404';
import home from './pages/home';
import Header from './layouts/Header';
import Aside from './layouts/Aside';
import Footer from './layouts/Footer';
import lowcode from './pages/lowcode';
import 'antd/dist/antd.css'
import '@/style/index.scss'
import { Breadcrumb } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', height: '100vh'}}>
        <Aside></Aside>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
          <Header></Header>
          <section
            style={{
              flex: '1',
              padding: '0 10px 8px',
              backgroundColor: '#e2e2e2',
              overflow: 'scroll',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
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
