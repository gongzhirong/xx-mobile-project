import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
// 页面
import Home from './app/home';
import Detail from './app/detail';

function router() {
  return (
    <HashRouter>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail' component={Detail}/>
        </Switch>
      </main>
    </HashRouter>
  )
}

export default router