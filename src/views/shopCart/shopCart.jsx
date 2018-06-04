import React from 'react'
import './shopCart.styl'
export default class ShopCart extends React.Component{
  render(){
    return(
      <div>
        <header className="cartHd">
          购物车
        </header>
        <div className="cart">
          <div className="cartSupply">
            <ul className="supplyList">
              <li className="supplyItem">
                <i className="supplySpot"></i>
                <span className="text">30天无忧退货</span>
              </li>
              <li className="supplyItem">
                <i className="supplySpot"></i>
                <span className="text">48小时快速退款</span>
              </li>
              <li className="supplyItem">
                <i className="supplySpot"></i>
                <span className="text">满88元免邮费</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="cartContent">
          <div className="main">
            <div className="cartImage"></div>
            <div className="cartText">
              <div className="login">
                <div className="title">
                  去添加点什么吧
                </div>
                <div className="btn">
                  登录
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
