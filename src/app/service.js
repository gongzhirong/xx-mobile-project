import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'

class Service extends React.Component {
  render() {
    return (
      <div>
        <Header title="联系客服" />
        <div className="service-content">
          <div className="service-content-list">
            <div className="service-content-list-left">
              <p className="service-content-list-left-title">体检咨询</p>
              <p className="service-content-list-left-desc">了解套餐、该日期、该项目</p>
            </div>
            <div className="service-content-list-right">
              <a className="service-content-list-right-a" href="tel:0755-28360144">0755-28360144</a>
            </div>
          </div>

          <div className="service-content-list">
            <div className="service-content-list-left">
              <p className="service-content-list-left-title">团检服务</p>
              <p className="service-content-list-left-desc">团检预约咨询、团检接待</p>
            </div>
            <div className="service-content-list-right">
              <a className="service-content-list-right-a" href="tel:0755-28360144">0755-28360144</a>
            </div>
          </div>

          <div className="service-content-list">
            <div className="service-content-list-left">
              <p className="service-content-list-left-title">技术支持</p>
              <p className="service-content-list-left-desc">退款、重置密码、查询报告</p>
            </div>
            <div className="service-content-list-right">
              <a className="service-content-list-right-a" href="tel:0755-28360144">0755-28360144</a>
            </div>
          </div>
        </div>
        <Footer fixed />
      </div>
    )
  }
}

export default Service