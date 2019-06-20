import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer-bg'

class Usercenter extends React.Component {
  render() {
    return (
      <div className="usercenter">
        <Header title="个人中心" />
        <div className="usercenter-part1">
          <div className="usercenter-part1-banner">
            <div className="usercenter-part1-banner-infoBox">
              <div className="float-l">
                <img src={require("../images/no-gender.png")} alt="" className="usercenter-infoBox-userImg" />
              </div>
              <div className="usercenter-infoBox">
                <p className="usercenter-infoBox-name">kkk</p>
                <p><span className="iconfont icon-icon6 mr3"></span>编辑个人信息</p>
              </div>
            </div>
            <div className="usercenter-go-home">
              <p>回到首页</p>
            </div>
          </div>
          <div className="usercenter-haeder-menu">
            <div className="usercenter-haeder-menu-li">
              <a href="#/">
                <p><span className="iconfont icon-cardb"></span></p>
                <p>体验卡券</p>
              </a>
            </div>
            <div className="usercenter-haeder-menu-li">
              <a href="#/">
                <p><span className="iconfont icon-coupon"></span></p>
                <p>优惠券</p>
              </a>
            </div>
            <div className="usercenter-haeder-menu-li">
              <a href="#/">
                <p><span className="iconfont icon-order_icon"></span></p>
                <p>体检订单</p>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Usercenter