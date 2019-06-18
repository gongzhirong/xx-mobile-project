import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
// 页面
import Home from './app/home';
import Login from './app/login';
import Register from './app/register'

function router() {
  return (
    <HashRouter>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
        </Switch>
      </main>
    </HashRouter>
  )
}

export default router