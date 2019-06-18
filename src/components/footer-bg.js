import React from 'react';
class Ones extends React.Component {
  name = 'Header'
  render() {
    return (
      <div className={this.props.fixed ? 'footer-bg footer-fixed' : 'footer-bg'}>
        <span>平台支持</span>
        <span>每天健康</span>
      </div>
    )
  }
}

export default Ones