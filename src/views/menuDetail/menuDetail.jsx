import React from 'react'
import Item from './images/content/01.png'
import {reqClassifyList} from '../../api/index'
export default class MemuDetail extends React.Component{
  state = {
    classifyList: [], // 分类页信息
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
  }
  render(){
    // 得到的id是string，*1将其转换为number
    const id = this.props.match.params.id*1
    const {classifyList} = this.state
    const detail = classifyList.find((c, index)=> id === c.id)
    if (detail) {
      return (
        <div className="menuItem">
          <div className="hdImg" style={{backgroundImage: `url(${detail.bannerUrl})`}}/>
          <div className="itemContent">
            <div className="itemChd">
              <span className="text">{detail.name}分类</span>
            </div>
            <ul className="itemList">
              {
                detail.subCateList.map((d, index) => (
                  <li className="itemListItem" key={index}>
                    <div className="itemImg">
                      <img src={d.wapBannerUrl} alt='01'/>
                    </div>
                    <div className="itemTitle">
                      {d.name}
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }
}