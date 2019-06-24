import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-bg'

class Orderlist extends React.Component {
  render() {
    return (
      <div>
        <Header title="我的订单" />
        <div className="orderlist-content">
          <div className="noorder">
            <img className="noorder-img" src={require('../images/noorder.png')} alt=""/>
            <p className="noorder-text">
            暂无订单
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Orderlist