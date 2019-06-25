import React from 'react'
import Header from '../components/header'
import { Button } from 'antd-mobile';

class Healthermanage extends React.Component {
  render() {
    return (
      <div>
        <Header title="体检人管理" />
        <div className="healthermanage-content">
          <div className="healthermanage-content-list">
            <div className="healthermanage-content-list-cell">
              <img className="healthermanage-content-list-cell-img" src={require('../images/no-gender.png')} alt="" width="30" />
              <span>kkk*无*岁</span>
              <span>本人</span>
            </div>
            <div className="healthermanage-content-list-info">
              <div className="healthermanage-content-list-info-item">婚姻状况：</div>
              <div className="healthermanage-content-list-info-item">手机号码：159****8286</div>
              <div className="healthermanage-content-list-info-item">证件号：</div>
            </div>
            <div className="healthermanage-content-list-edit">
              <a className="healthermanage-content-list-edit-a" href="#/addhealther"><span className="iconfont mr6 icon-icon6"></span>编辑</a>
            </div>
          </div>
        </div>
        <div className="bottom-fixed-bottom">
          <Button type="primary" onClick={() => { window.location.hash = "/addhealther" }}>添加家属体检人</Button>
        </div>
      </div>
    )
  }
}

export default Healthermanage