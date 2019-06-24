import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'

class Usercentercupon extends React.Component {
  render() {
    return (
      <div>
        <Header title="我的优惠券" />
        <div className="usercentercupon-content">
          <div className="noorder">
            <img className="noorder-img" src={require('../images/nocard.png')} alt=""/>
            <p className="noorder-text">
            暂无优惠券
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Usercentercupon