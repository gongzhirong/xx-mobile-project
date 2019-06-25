import React from 'react'
import Header from '../components/header'
import { Button } from 'antd-mobile';

class Intruduce extends React.Component {
	render() {
		return (
			<div className="intruduce-page">
				<Header title="健康评估" />
        <div className="intruduce-content">
          <img width="100%" src={require('../images/WechatIMG1.png')} alt=""/>
          <div className="intruduce-content-ul">
            <div className="intruduce-content-ul-title">
              <p className="intruduce-content-ul-title-p">健康自诊评估</p>
              <p className="intruduce-content-ul-title-desc">来源中华医学会</p>
            </div>
            <div className="intruduce-content-introtext">
              <p>问卷涉及到您的家庭病史、个人病史、当前身体状态、生活方式、饮食习惯等信息，综合计算出您的潜在健康风险，并为您定制体检方案（自动推荐功能正在开发中，敬请期待），避免过度检查或遗漏</p>
            </div>
          </div>
        </div>
        <div className="bottom-fixed-bottom blueBg">
          <Button type="primary" onClick={() => { window.location.hash = "/information" }}>进入评估</Button>
        </div>
			</div>
		)
	}
}

export default Intruduce