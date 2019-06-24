import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { List, InputItem, TextareaItem, Button } from 'antd-mobile'

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <Header title="意见反馈"/>
        <div className="feedback-content">
          <div className="mt20">
            <List>
              <InputItem
                clear
                placeholder="请填写手机号码"
              >手机号码</InputItem>
            </List>
          </div>
          <div className="mt20">
            <List>
              <TextareaItem rows={4} placeholder="请输入您宝贵的建议或意见" />
            </List>
          </div>
        </div>
        <div className="register-tabsContent-bt-box usercenter-go-home-button">
          <Button type="primary">提交</Button>
        </div>
        <Footer fixed/>
      </div>
    )
  }
}

export default Feedback