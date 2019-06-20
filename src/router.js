import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
// 页面
import Home from './app/home';
import Login from './app/login';
import Register from './app/register'
import Findpwd from './app/findpwd'
import Usercenter from './app/usercenter'

function router() {
  return (
    <HashRouter>
      <main>
        <Switch>
          <Route exact path='/' component={Home} name="首页"/>
          <Route path='/login' component={Login} name="登录"/>
          <Route path='/register' component={Register} name="注册"/>
          <Route path='/findpwd' component={Findpwd} name="找回密码"/>
          <Route path='/usercenter' component={Usercenter} name="个人中心"/>
        </Switch>
      </main>
    </HashRouter>
  )
}

export default router