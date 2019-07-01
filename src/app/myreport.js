import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Button } from 'antd-mobile';

class Myreport extends React.Component {
  render() {
    return (
      <div>
        <Header title="体检报告" />
        <div className="myreport-content">
          {/* <div className="myreport-content-banner">
            <p className="myreport-content-banner-p">
              您可以使用以下信息登录查看:
            </p>
            <p className="myreport-content-banner-p2">
              1.下单人或预约人的账号（手机号账号）
            </p>
            <p className="myreport-content-banner-p3">
              2.体检人在体检时使用的证件号码（默认密码6个1）
            </p>
          </div> */}
          <div className="myreport-content-noreport">
            <img src={require('../images/report-printer.png')} />
            <p className="myreport-content-noreport-reportTit">您没有可查看的体检报告</p>
            <p>如果您已经体检完毕，请在体检结束1~2周左右，或收到体检中心通知后再来查看哦!</p>
          </div>
          <div className="myreport-content-button-box">
            {/* <div className="register-tabsContent-bt-box usercenter-go-home-button">
              <Button type="primary" onClick={() => { window.location.hash = "/information" }}>登录查看报告</Button>
            </div> */}
            <div className="register-tabsContent-bt-box">
              <Button type="primary" onClick={() => { window.location.hash = "/information" }}>立即预约体检</Button>
            </div>
            <div className="register-tabsContent-bt-box mt15">
              <Button onClick={() => { window.location.hash = "#/" }}>返回首页</Button>
            </div>
          </div>

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

export default Myreport