import React from 'react';
import { Icon } from 'antd-mobile'
class Ones extends React.Component {
  name = 'Header'
  render() {
    return (
      <div className='header'>
        <Icon className='header-left' type='left' color='#ccc'/>
        <div className='header-title'>立白中心</div>
        <div className="header-right">
          <p>登录</p>
        </div>
        <div className="header-ink-bar"></div>
      </div>
    )
  }
}

export default Ones