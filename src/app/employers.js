import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'

class Employers extends React.Component {
  render() {
    return (
      <div>
        <Header title="团检申请" />
        <div className="employers-content">
          <div className="employers-content-header-wrap">
            <p className="tc employers-content-header-text">
              <span className="iconfont icon-start"></span>
              <span className="mlr8">轻松做团检</span>
              <span className="mlr8">一站全搞定</span>
              <span className="iconfont icon-start"></span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Employers