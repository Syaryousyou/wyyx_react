import React from 'react'
import BScroll from 'better-scroll'
import {Route, Switch, Redirect} from 'react-router-dom'
import './classify.styl'
import MemuDetail from '../menuDetail/menuDetail'
import {reqClassifyList} from '../../api/index'
export default class Classify extends React.Component{
  state = {
    classifyList: [], // 分类页信息
    index: 1005000
  }
  updateIndex = (index) => {
    this.setState({
      index: index
    })
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
    const {classifyList, index} = this.state
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
                    <li className={index === grid.id ? "menu active" : "menu"} key={i} onClick={() =>this.props.history.push(`/classify/${grid.id}`)}>
                      <span onClick={(i) => this.setState({index: grid.id})}>{grid.name}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <Switch>
            <Route path={'/classify/:id'} component={MemuDetail}/>
            <Redirect to={'/classify/1005000'}/>
          </Switch>
        </div>
      </div>
    )
  }
}
