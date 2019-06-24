import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { List, InputItem, Button } from 'antd-mobile';

class Withdraw extends React.Component {
  render() {
    return (
      <div>
        <Header title="余额提现" />
        <div className="withdraw-content">
          <div className="withdraw-content-warning">
            <p><span className="iconfont mr6 icon-info warning-color"></span>3-5个工作日内提现到支付账户</p>
          </div>
          <div className="withdraw-content-withdraw mt15">
            <div className="withdraw-content-withdraw-title">
              <span>提现余额</span>
            </div>
            <div className="withdraw-content-withdraw-inputBox mt30">
              <List>
                <InputItem clear placeholder="输入提现金额">￥</InputItem>
              </List>
            </div>
            <div className="withdraw-content-withdraw-info">
              <span className="withdraw-content-withdraw-info-left">可提现余额0.00</span>
              <p className="withdraw-content-withdraw-info-right">全部提现</p>
            </div>
          </div>
        </div>
        <div className="register-tabsContent-bt-box usercenter-go-home-button">
          <Button type="primary" disabled>提现</Button>
        </div>
        <Footer fixed/>
      </div>
    )
  }
}

export default Withdraw