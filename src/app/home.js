import React from 'react';
import Header from '../components/header'
import { Carousel, WingBlank } from 'antd-mobile';

class Ones extends React.Component {
  state = {
    data: ['1', '2', '3'] // 轮播图图片
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/hospital/145/mobile_main_banner/深圳龙岗中心BANNER.gif', 'https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/hospital/145/mobile_main_banner/05_banner.jpg', 'https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/hospital/145/mobile_main_banner/通用.jpg', 'https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/hospital/145/mobile_main_banner/02_banner.png', 'https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/hospital/145/mobile_main_banner/01_banner.png'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        {/* 头部 */}
        <Header />
        {/* 顶部轮播图 */}
        <div className="header-carousel-box">
          <WingBlank>
            <Carousel autoplay={false} infinite>
              {this.state.data.map(val => (
                <a key={val} href="http://www.alipay.com" className="carousel-a">
                  <img alt="" src={val} style={{ width: '100%', verticalAlign: 'top' }} />
                </a>
              ))}
            </Carousel>
          </WingBlank>
          {/* 主要模块入口 */}
          <div className="mainEntry">
            <a href="/">
              <img alt="" src="https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/template/c_tijianyuyue.png"/>
            </a>
            <a href="/">
              <img alt="" src="https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/template/c_tijianbaogao.png"/>
            </a>
            <a href="/">
              <img alt="" src="https://mytijian-img.oss-cn-hangzhou.aliyuncs.com/template/c_gerebzhongxin2.png"/>
            </a>
          </div>
          {/* 便捷入口 */}
          <div className="convenient-entry">
            <h3 className="convenient-entry-header">
              <div className="convenient-entry-head-border"></div>
              <span className="convenient-entry-header-title">便捷入口</span>
            </h3>
            <a href="/" className="border-b border-r border-t">
              <span className="convenient-entry-Linefeed">
                <span>检前评估</span>
                <p className="convenient-entry-Linefeed-twoline">免费风险筛查</p>
              </span>
              <img alt="" className="convenient-entry-img" src="https://www.mytijian.com/mobile/images/zhineng.png"/>
            </a>
            <a href="/" className="border-b border-t">
              <p>我的订单</p>
              <img alt="" className="convenient-entry-img" src="https://www.mytijian.com/mobile/images/dingdan.png"/>
            </a>
            <a href="/" className="border-r">
              <p>我的体检卡</p>
              <img alt="" className="convenient-entry-img" src="https://www.mytijian.com/mobile/images/tijianka.png"/>
            </a>
            <a href="/">
              <span className="convenient-entry-Linefeed">
                <span>团检申请</span>
                <p className="convenient-entry-Linefeed-twoline">一站式团检服务</p>
              </span>
              <img alt="" className="convenient-entry-img" src="https://www.mytijian.com/mobile/images/tongdao.png"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Ones