import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Carousel, WingBlank } from 'antd-mobile';

class Ones extends React.Component {
  state = {
    carouselPartOne: ['1', '2', '3'], // 轮播图图片
    carouselPartTwo: ['1', '2', '3'] // 轮播图图片
  }
  componentDidMount() {
    this.setState({
      carouselPartOne: [require('../images/深圳龙岗中心BANNER.gif'), require('../images/05_banner.jpg'), require('../images/通用.jpg'), require('../images/02_banner.png'), require('../images/01_banner.png')],
      carouselPartTwo: [require('../images/82.jpg'), require('../images/shiming.jpg'), ]
    });
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
              {this.state.carouselPartOne.map(val => (
                <a key={val} href="/" className="carousel-a">
                  <img alt="" src={val} style={{ width: '100%', verticalAlign: 'top' }} />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
        {/* 主要模块入口 */}
        <div className="mainEntry">
          <a href="/">
            <img alt="" src={require('../images/c_tijianyuyue.png')}/>
          </a>
          <a href="/">
            <img alt="" src={require('../images/c_tijianbaogao.png')}/>
          </a>
          <a href="/">
            <img alt="" src={require('../images/c_gerebzhongxin2.png')}/>
          </a>
        </div>
        <div className="clearBoth"></div>
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
            <img alt="" className="convenient-entry-img" src={require('../images/zhineng.png')}/>
          </a>
          <a href="/" className="border-b border-t">
            <p>我的订单</p>
            <img alt="" className="convenient-entry-img" src={require('../images/dingdan.png')}/>
          </a>
          <a href="/" className="border-r">
            <p>我的体检卡</p>
            <img alt="" className="convenient-entry-img" src={require('../images/tijianka.png')}/>
          </a>
          <a href="/">
            <span className="convenient-entry-Linefeed">
              <span>团检申请</span>
              <p className="convenient-entry-Linefeed-twoline">一站式团检服务</p>
            </span>
            <img alt="" className="convenient-entry-img" src={require('../images/tongdao.png')}/>
          </a>
        </div>
        {/* 轮播图2 */}
        <div className="header-carousel-box-two">
          <WingBlank>
            <Carousel autoplay={false} infinite>
              {this.state.carouselPartTwo.map(val => (
                <a key={val} href="/" className="carousel-a">
                  <img alt="" src={val} style={{ width: '100%', verticalAlign: 'top' }} />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
        {/* 机构介绍 */}
        <div className="introduceHeaderBg">
          <p>
          深圳市龙岗中心医院创立于1952年，是龙岗区的急救、医疗、教学、科研、康复和保健中心，是目前深圳市东部最大的一所综合性医院，1998年被广东省卫生厅批准设置为三级医院，2005年被市政府命名为“深圳市第九人民医院”。2011年，顺利通过广东省卫生厅评审，成功创建成为深圳市东部、龙岗区首家“三级甲等综合医院”。
医院使命：呵护生命促进健康
医院核心价值观：以人为本 顾客至上 团结创新 力求卓越
医院愿景：构建深圳东部国际化区域医疗中心

医院地址:深圳市龙岗区龙岗大道（龙岗段）6082号
邮政编码：518116
          </p>
        </div>
        {/* footer尾部 */}
        <footer>
          <img alt="" src={require('../images/healthlogo.png')}/>
          <p className="footer-part-1">立白中心</p>
          <p className="footer-part-2">陆居路2号</p>
          <p className="footer-part-3">
            <span>广东省深圳市龙岗区龙岗大道6082号</span>
          </p>
          <a href="/" className="footer-part-4">
            0755-28360144
          </a>
        </footer>
        <Footer />
      </div>
    )
  }
}

export default Ones