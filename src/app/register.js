import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { WhiteSpace, List, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    currentTab: '1'
  }
  tabsChange(tab, index) {
    this.setState({
      currentTab: tab.sub
    })
  }
  render() {
    return (
      <div className="login-page register">
        <Header title="注册" />
        <div className="tabsContent">
          <div className="tabsContent-input-wrap mt20">
            <List>
              <InputItem
                clear
                className="inputItemLeft"
                placeholder="请输入手机号码"
              >手机号码</InputItem>
              <div className="getCode">获取验证码</div>
              <InputItem
                clear
                placeholder="请输入验证码"
              >验证码</InputItem>
            </List>
          </div>
          <p className="register-agreement">
            <input type="checkbox" id="agree" className="register-agreement-checkbox"/>
            <label htmlFor="agree">
              <span className="register-agreement-desc"> 已阅读并同意</span>
            </label>
            <a href="#/" className="register-agreement-a">《用户服务协议》</a>
          </p>
          <div className="register-tabsContent-bt-box">
            <Button type="primary" disabled>完成注册</Button><WhiteSpace />
          </div>
        </div>
        <WhiteSpace />
        <p className="register-to-login">
          <Link to="/login">已有账号，直接登录</Link>
        </p>
        <Footer fixed/>
      </div>
    )
  }
}

export default Login