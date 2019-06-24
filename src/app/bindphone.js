import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Button } from 'antd-mobile'

class Bindphone extends React.Component {
  render() {
    return (
      <div>
        <Header title="绑定手机号" />
        <div className="bindphone-content">
          <div className="tc pt50">
            <img width="64" src={require('../images/phone.png')} alt="" />
          </div>
          <p className="tc mt30 mb30 f-size-16">
            您绑定的手机号为159****8286
          </p>
        </div>
        <div className="register-tabsContent-bt-box usercenter-go-home-button">
          <Button type="primary">更换绑定号码</Button>
        </div>
        <div className="mt30 tc bindphone-lianxi">
          <span>遇到问题？请联系客服：</span>
          <a href="tel:4000185800" className="bindphone-lianxi-a">400-0185-800</a>
        </div>
        <Footer fixed />
      </div>
    )
  }
}

export default Bindphone