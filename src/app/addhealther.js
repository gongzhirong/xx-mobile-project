import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { Button, List, InputItem, Picker } from 'antd-mobile';

// 编辑和添加体检人都在此页面完成

class Addhealther extends React.Component {
  state = {
    sex: [{ value: 1, label: '男' }, { value: 2, label: '女' }],
    marriage: [{ value: 1, label: '已婚' }, { value: 2, label: '未婚' }]
  }
  render() {
    return (
      <div>
        <Header title="编辑体检人" />
        <div className="addhealther-content">
          <div className="mt20">
            <List className="my-list">
              <InputItem clear placeholder="(必填)请输入姓名">姓名</InputItem>
              <InputItem clear placeholder="请输入身份证">身份证</InputItem>
              <Picker data={this.state.sex} cols={1}>
                <List.Item arrow="horizontal">性别</List.Item>
              </Picker>
              <InputItem clear placeholder="请输入年龄">年龄</InputItem>
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
        </div>
        <div className="register-tabsContent-bt-box usercenter-go-home-button">
          <Button type="primary">保存</Button>
        </div>
        <Footer fixed/>
      </div>
    )
  }
}

export default Addhealther