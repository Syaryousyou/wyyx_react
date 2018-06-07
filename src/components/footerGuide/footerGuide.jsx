import React from 'react'
import './footerGuide.styl'
import Proptypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'
class FooterGuide extends React.Component{
  static proptypes = {
    FooterGuideList:Proptypes.array.isRequired,
  }
  render(){
    let path = this.props.location.pathname
    const reg = /^\/classify/
    if (reg.test(path)) {
      path = '/classify'
    }
    let {FooterGuideList} = this.props
    if (path === '/profile') {
      return null
    } else {
      return(
        <footer className="footer_guide">
          {
            FooterGuideList.map((FooterGuide, index) => (
              <Link to={FooterGuide.path} className="item" key={index}>
                <i className={'icon ' + FooterGuide.icon + (path===FooterGuide.path?' active':'')}/>
                <span className={'text' + (path===FooterGuide.path?' active':'')}>{FooterGuide.title}</span>
              </Link>
            ))
          }
        </footer>
      )
    }
  }
}
export default withRouter(FooterGuide)