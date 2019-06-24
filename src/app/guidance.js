import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Button } from 'antd-mobile';

class Guidance extends React.Component {
  render() {
    return (
      <div>
        <Header title="欢迎您" />
        <div className="guidance-content">
          <div className="guidance-content-list">
            <img src={require('../images/yindao1.jpg')} alt="" className="guidance-content-img" />
            <a href="#/" className="guidance-content-list-button">立即预约</a>
          </div>
        </div>
        <div className="usercenter-go-home-button">
          <Button type="primary" onClick={() => { window.location.hash = '/' }}>进入主页</Button>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Guidance