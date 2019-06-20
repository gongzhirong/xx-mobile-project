import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Tabs, WhiteSpace, List, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    currentTab: '1'
  }
  tabsChange(tab, index) {
    this.setState({
      currentTab: tab.sub
    })
  }
  render() {
    const tabs2 = [
      { title: '账号密码登录', sub: '1' },
      { title: '手机验证登录', sub: '2' }
    ]
    return (
      <div className="login-page">
        <Header title="登录" />
        <Tabs tabs={tabs2}
          initialPage={this.currentTab}
          onChange={this.tabsChange.bind(this)}
          renderTab={tab => <span>{tab.title}</span>}>
          <div className="tabsContent">
            <div className="tabsContent-desc mb10 mt10">
              <span>团体用户请根据短信提示直接登录 <span className="iconfont icon-info blueC"></span></span>   
            </div>
            <div className="tabsContent-input-wrap">
              <List>
                <InputItem
                  clear
                  placeholder="请输入证件号或员工号"
                >账号</InputItem>
                <InputItem
                  clear
                  placeholder="请输入密码"
                >密码</InputItem>
              </List>
            </div>
            <div className="tabsContent-bt-box">
              <Button type="primary" disabled>登录</Button><WhiteSpace />
            </div>
          </div>
          <div className="tabsContent">
            <div className="tabsContent-desc mb10 mt10">
              <span>团体用户需绑定手机号后才能使用 <span className="iconfont icon-info blueC"></span></span>   
            </div>
            <div className="tabsContent-input-wrap">
              <List>
                <InputItem
                  clear
                  className="inputItemLeft"
                  placeholder="请输入手机号码"
                >手机号码</InputItem>
                <div className="getCode">获取验证码</div>
                <InputItem
                  clear
                  placeholder="请输入验证码"
                >验证码</InputItem>
              </List>
            </div>
            <div className="tabsContent-bt-box">
              <Button type="primary" disabled>登录</Button><WhiteSpace />
            </div>
          </div>
        </Tabs>
        <div className="login-page-action ml15 mr15">
          <span><Link to="/register">新用户注册</Link></span>
          { 
            this.state.currentTab === '1' ?
            <span className="float-r"><Link to="/findpwd">忘记密码?</Link></span>
            : <span className="float-r">联系客服</span>
          }
        </div>
        <WhiteSpace />
        <Footer fixed/>
      </div>
    )
  }
}

export default Login