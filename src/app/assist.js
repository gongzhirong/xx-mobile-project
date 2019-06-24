import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { List } from 'antd-mobile'

const Item = List.Item

class Assist extends React.Component {
  render() {
    return (
      <div>
        <Header title="反馈帮助中心" />
        <div className="assist-content">
          <div className="mt20">
            <List className="my-list">
              <Item arrow="horizontal" onClick={() => { window.location.hash = "/feedback" }}>
                意见反馈
              </Item>
            </List>
          </div>

          <div className="mt20">
            <List className="my-list">
              <Item arrow="horizontal" onClick={() => { }}>
                用户服务协议
              </Item>
            </List>
          </div>
        
        </div>
        <Footer fixed/>
      </div>
    )
  }
}

export default Assist