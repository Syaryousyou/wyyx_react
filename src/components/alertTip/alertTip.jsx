import React from 'react'
import './alertTip.styl'
import Proptypes from 'prop-types'
export default class AlertTip extends React.Component{
  static proptypes = {
    closeTip:Proptypes.func.isRequired,
    alertText: Proptypes.string.isRequired
  }
  render(){
    const {alertText} = this.props
    return(
      <div className="alert_container">
        <section className="tip_text_container">
          <div className="tip_icon">
            <span/>
            <span/>
          </div>
          <p className="tip_text">{alertText}</p>
          <div className="confrim" onClick={this.props.closeTip}>确认</div>
        </section>
      </div>
    )
  }
}