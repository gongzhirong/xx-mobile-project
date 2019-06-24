import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { List, InputItem, Button } from 'antd-mobile';

class Updatepwd extends React.Component {
  render() {
    return (
      <div className="updatepwd">
        <Header title="修改密码" />
        <div className="updatepwd-content">
          <div className="mt20">
            <List>
              <InputItem clear placeholder="请输入当前密码">当前密码</InputItem>
            </List>
          </div>
          <div className="mt20">
            <List>
              <InputItem clear placeholder="请输入新密码（8-20位数字和字母）">新密码</InputItem>
              <InputItem clear placeholder="请确认新密码">确认密码</InputItem>
            </List>
          </div>
        </div>

        <div className="register-tabsContent-bt-box usercenter-go-home-button">
          <Button type="primary" disabled>确定</Button>
        </div>
        <Footer fixed/>
      </div>
    )
  }
}

export default Updatepwd