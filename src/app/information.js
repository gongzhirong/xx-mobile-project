import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Button, List, InputItem, Picker } from 'antd-mobile';

class Information extends React.Component {
  state = {
    marriage: [{ value: 1, label: '已婚' }, { value: 2, label: '未婚' }],
    relationship: [
      { value: 1, label: '其它' },
      { value: 2, label: '配偶' },
      { value: 3, label: '子女' },
      { value: 4, label: '母亲' },
      { value: 5, label: '父亲' },
      { value: 6, label: '兄弟姐妹' },
      { value: 7, label: '亲戚朋友' }
    ]
  }
  render() {
    return (
      <div>
        <Header title="基本信息" />
        <div className="information-content">
          <div className="mt20">
            <p className="information-content-select-doctor">选择问诊人</p>
          </div>
          <div className="mt20">
            <List className="my-list">
              <InputItem clear placeholder="(必填)请输入姓名">姓名</InputItem>
              <InputItem clear placeholder="请输入身份证">身份证</InputItem>
              <Picker data={this.state.marriage} cols={1}>
                <List.Item arrow="horizontal">婚姻状况</List.Item>
              </Picker>
              <InputItem clear placeholder="请填写民族">民族</InputItem>
            </List>
          </div>
          <div className="mt20">
            <List className="my-list">
              <InputItem clear placeholder="请输入手机号">手机号码</InputItem>
            </List>
          </div>
          
          <div className="mt20">
            <List className="my-list">
              <Picker data={this.state.relationship} cols={1}>
                <List.Item arrow="horizontal">TA是您的</List.Item>
              </Picker>
              <InputItem clear placeholder="请输入手机号">身高</InputItem>
              <InputItem clear placeholder="请输入手机号">体重</InputItem>
            </List>
          </div>
        </div>
        <div className="register-tabsContent-bt-box usercenter-go-home-button">
          <Button type="primary">下一步</Button>
        </div>
        <Footer fixed/>
      </div>
    )
  }
}

export default Information