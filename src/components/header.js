import React from 'react';
import { Icon } from 'antd-mobile'
import { Link } from 'react-router-dom'
class Ones extends React.Component {
  name = 'Header'
  render() {
    let headerRight
    if (this.props.home) {
      headerRight = <p><Link to="/login">登录</Link></p>
    } else {
      headerRight = <Link to="/"><span className="iconfont icon-home f-size-19"></span></Link>
    }
    return (
      <div className='header'>
        <Icon className='header-left' type='left' color='#ccc'/>
        <div className='header-title'>{this.props.title}</div>
        <div className="header-right">
          {headerRight}
        </div>
        <div className="header-ink-bar"></div>
      </div>
    )
  }
}

export default Ones