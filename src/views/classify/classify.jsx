import React from 'react'
import BScroll from 'better-scroll'
import './classify.styl'
import Item from './images/content/01.png'
import {reqClassifyList} from '../../api/index'
export default class Classify extends React.Component{
  state = {
    classifyList: [], // 分类页信息
    index: ''
  }
  updateIndex = (event) => {
    console.log(event)
    // this.setState({
    //   index: index
    // })
  }
  getClassifyList = () => {
    const result = reqClassifyList()
    result.then(response =>{
      const classifyList = response.data
      this.setState({
        classifyList
      })
    })
  }
  componentDidMount () {
    this.getClassifyList()
    new BScroll('.menuWrapper', {
      scrollX: true,
      click: true
    })
  }
  render(){
    const {classifyList} = this.state
    return(
      <div className="ClassifyCon">
        <header className="cHeader">
          <div className="cHeaderInner">
            <i className="search"/>
            <span className="placeholder">搜索商品, 共9723款好物</span>
          </div>
        </header>
        <div className="cContent">
          <div className="menuWrapper">
            <div className="menuInner">
              <ul className="menus">
                {
                  classifyList.map((grid, i) => (
                    <li className="menu" key={i} onClick={this.updateIndex}>
                      {grid.name}
                    </li>
                  ))
                }
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
