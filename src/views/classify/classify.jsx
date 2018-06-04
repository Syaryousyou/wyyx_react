import React from 'react'
import './classify.styl'
import Item from './images/content/01.png'
export default class Classify extends React.Component{
  render(){
    return(
      <div className="ClassifyCon">
        <header className="cHeader">
          <div className="cHeaderInner">
            <i className="search"></i>
            <span className="placeholder">搜索商品, 共9723款好物</span>
          </div>
        </header>
        <div className="cContent">
          <div className="menuWrapper">
            <div className="menuInner">
              <ul className="menus">
                <li className="menu">
                  推荐专区
                </li>
                <li className="menu">
                  推荐专区
                </li>
                <li className="menu">
                  推荐专区
                </li>
                <li className="menu">
                  推荐专区
                </li>
              </ul>
            </div>
          </div>
          <div className="menuItem">
            <div className="hdImg"/>
            <div className="itemContent">
              <div className="itemChd">
                <span className="text">分类</span>
              </div>
              <ul className="itemList">
                <li className="itemListItem">
                  <div className="itemImg">
                    <img src={Item} alt='01'/>
                  </div>
                  <div className="itemTitle">
                    床品件套
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
