import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { WhiteSpace, List, InputItem, Button } from 'antd-mobile';

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
      <div className="login-page register findpwd">
        <Header title="找回密码" />
        <div className="tabsContent">
          <p className="findpwdDesc">请输入您的账号</p>
          <div className="tabsContent-input-wrap">
            <List>
              <InputItem
                clear
                placeholder="请输入证件号、手机号或员工号"
              >账号</InputItem>
            </List>
          </div>
          <div className="register-tabsContent-bt-box mt30">
            <Button type="primary" disabled>下一步</Button>
          </div>
          <p className="findpwdTelphone">
            <span>遇到问题？请联系客服：</span>
            <a herf="tel:4000185800">400-0185-800</a>
          </p>
        </div>
        <WhiteSpace />
        <Footer fixed/>
      </div>
    )
  }
}

export default Login