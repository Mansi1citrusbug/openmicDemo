import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Store from './Services/Store';
import {useSelector,useDispatch} from "react-redux";
import {Provider} from "react-redux";



const Postmic = lazy(() => import('./Pages/Postmic'));
const Login = lazy(() => import('./Pages/Login'));
const Home = lazy(()=> import ('./Pages/Home'));

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback="">
            <Route exact path="/Postmic" component={Postmic} />
            <Route exact path="/Loginform" component={Login} />
            <Route exact path="/" component={Home} />
          </Suspense>

        </Switch>
      </Router>
    </div>
    // </Provider>
  );
}

export default App;
