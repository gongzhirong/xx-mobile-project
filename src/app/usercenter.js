import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { List, Button } from 'antd-mobile'

const Item = List.Item

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
            <div className="usercenter-go-home" onClick={() => { window.location.hash = '/' }}>
              <p>回到首页</p>
            </div>
          </div>
          <div className="usercenter-haeder-menu">
            <div className="usercenter-haeder-menu-li">
              <a href="#/usercentercard">
                <p><span className="iconfont f-size-24 icon-cardb"></span></p>
                <p>体验卡券</p>
              </a>
            </div>
            <div className="usercenter-haeder-menu-li">
              <a href="#/usercentercupon">
                <p><span className="iconfont f-size-24 icon-coupon"></span></p>
                <p>优惠券</p>
              </a>
            </div>
            <div className="usercenter-haeder-menu-li">
              <a href="#/orderlist">
                <p><span className="iconfont f-size-24 icon-order_icon"></span></p>
                <p>体检订单</p>
              </a>
            </div>
          </div>
        </div>
        <div className="usercenter-part2">
          <List className="my-list">
            <Item extra="已绑定159****8286" arrow="horizontal" onClick={() => { window.location.hash = "/bindphone" }}>
              <span className="iconfont mr-20 icon-unie64e"></span>绑定手机号
            </Item>
            <Item extra="添加家属体检人" arrow="horizontal" onClick={() => { window.location.hash = "/healthermanage" }}>
              <span className="iconfont mr-20 icon-wode"></span>体检人管理
            </Item>
            <Item extra="￥0.00" arrow="horizontal" onClick={() => { window.location.hash = "/withdraw" }}>
              <span className="iconfont mr-20 icon-yue"></span>余额提现
            </Item>
            <Item arrow="horizontal" onClick={() => { window.location.hash = '/updatepwd' }}>
              <span className="iconfont mr-20 icon-mima"></span>修改密码
            </Item>
          </List>
        </div>

        <div className="usercenter-part2">
          <List className="my-list">
            <Item arrow="horizontal" onClick={() => { window.location.hash = '/guidance' }}>
              <span className="iconfont mr-20 icon-duihua"></span>了解更多
            </Item>
            <Item arrow="horizontal" onClick={() => { window.location.hash = '/assist' }}>
              <span className="iconfont mr-20 icon-fankuiyijian"></span>反馈帮助中心
            </Item>
          </List>
        </div>

        <div className="usercenter-part2">
          <List className="my-list">
            <Item arrow="horizontal" onClick={() => { window.location.hash = '/service' }}>
              <span className="iconfont mr-20 icon-lianxi"></span>联系客服
            </Item>
          </List>
        </div>

        <div className="register-tabsContent-bt-box usercenter-go-home-button">
          <Button type="primary" onClick={() => { window.location.hash = '/' }}>回到首页</Button>
        </div>

        <div className="register-tabsContent-bt-box mt15">
          <Button>退出登录</Button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Usercenter