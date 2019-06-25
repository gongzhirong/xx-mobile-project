import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
// 页面
import Home from './app/home';
import Login from './app/login';
import Register from './app/register'
import Findpwd from './app/findpwd'
import Usercenter from './app/usercenter'
import Updatepwd from './app/updatepwd'
import Assist from './app/assist'
import Feedback from './app/feedback'
import Guidance from './app/guidance'
import Bindphone from './app/bindphone'
import Service from './app/service'
import Orderlist from './app/orderlist'
import Usercentercard from './app/usercentercard'
import Usercentercupon from './app/usercentercupon'
import Withdraw from './app/withdraw'
import Healthermanage from './app/healthermanage'
import Addhealther from './app/addhealther'
import Intelligent from './app/intelligent'
import Intruduce from './app/intruduce'
import Information from './app/information'

function router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} name="首页"/>
        <Route path='/login' component={Login} name="登录"/>
        <Route path='/register' component={Register} name="注册"/>
        <Route path='/findpwd' component={Findpwd} name="找回密码"/>
        <Route path='/usercenter' component={Usercenter} name="个人中心"/>
        <Route path='/updatepwd' component={Updatepwd} name="修改密码" />
        <Route path='/assist' component={Assist} name="反馈帮助中心" />
        <Route path='/feedback' component={Feedback} name="意见反馈" />
        <Route path='/guidance' component={Guidance} name="了解更多" />
        <Route path='/bindphone' component={Bindphone} name="手机绑定" />
        <Route path='/service' component={Service} name="联系客服" />
        <Route path='/orderlist' component={Orderlist} name="我的订单" />
        <Route path='/usercentercard' component={Usercentercard} name="我的体检卡" />
        <Route path='/usercentercupon' component={Usercentercupon} name="我的优惠券" />
        <Route path='/withdraw' component={Withdraw} name="余额提现" />
        <Route path='/healthermanage' component={Healthermanage} name="体检人管理" />
        <Route path='/addhealther' component={Addhealther} name="添加体检人" />
        <Route path='/intelligent' component={Intelligent} name="检前评估" />
        <Route path='/intruduce' component={Intruduce} name="健康评估" />
        <Route path='/information' component={Information} name="基本信息" />
      </Switch>
    </HashRouter>
  )
}

export default router