import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import page404 from './pages/404';
import home from './pages/home';
import Header from './layouts/Header';
import Aside from './layouts/Aside';
import Footer from './layouts/Footer';
import lowcode from './pages/lowcode';

function App() {
  return (
    <div>
      <Header></Header>
      <Aside></Aside>
      <section>
        <BrowserRouter>
          <Switch>
            <Route path='/lowcode' component={lowcode}></Route>
            <Route path='/404' component={page404}></Route>
            <Route path='/' component={home}></Route>
            <Redirect from="/index" to="/"/>
            <Route component={ page404 } />
          </Switch>
        </BrowserRouter>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
