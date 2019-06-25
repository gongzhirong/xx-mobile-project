import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'
import { List } from 'antd-mobile'

const Item = List.Item

class Intelligent extends React.Component {
	render() {
		return (
			<div>
				<Header title="检前评估" />
				<div className="intelligent-content">
					<div className="intelligent-content-banner">
						<div>
							<img className="intelligent-content-banner-img" src={require('../images/no-gender.png')} alt=""/>
							<span>kkk</span>
							<p className="intelligent-content-banner-history">
								<span className="iconfont icon-icon6 mr3"></span>
								评估记录
							</p>
						</div>
          </div>
          <div className="intelligent-content-ul">
            <div className="intelligent-content-ul-title">
              <p className="intelligent-content-ul-title-p">健康评估量表</p>
            </div>
            <List className="my-list">
              <Item arrow="horizontal" onClick={() => { window.location.hash = "/intruduce" }}>
              健康自诊评估
              </Item>
            </List>
          </div>
				</div>
				<Footer fixed/>
			</div>
		)
	}
}

export default Intelligent