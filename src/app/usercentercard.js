import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Button } from 'antd-mobile';

class Usercentercard extends React.Component {
  render() {
    return (
      <div>
        <Header title="我的体检卡" />
        <div className="usercentercard-content">
          <div className="noorder">
            <img className="noorder-img" src={require('../images/nocard.png')} alt=""/>
            <p className="noorder-text">
            暂无体检卡
            </p>
          </div>
        </div>
        <div className="usercenter-go-home-button">
          <Button type="primary">添加体检卡</Button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Usercentercard