import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import page404 from './pages/404';
import home from './pages/home';
import Header from './layouts/Header';
import Aside from './layouts/Aside';
import Footer from './layouts/Footer';
import lowcode from './pages/lowcode';
import 'antd/dist/antd.css'

function App() {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <Aside></Aside>
      <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
        <Header></Header>
        <section
          style={{
            flex: '1',
            padding: '8px 10px',
            backgroundColor: '#e2e2e2',
            overflow: 'scroll',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              // height: '100%',
              flex: 1,
              backgroundColor: 'white',
              // overflow: 'scroll'
            }}
          >
            <BrowserRouter>
              <Switch>
                <Route path='/lowcode' component={lowcode}></Route>
                <Route path='/404' component={page404}></Route>
                <Route path='/' component={home}></Route>
                <Redirect from="/index" to="/"/>
                <Route component={ page404 } />
              </Switch>
            </BrowserRouter>
            {/* <Footer></Footer> */}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
