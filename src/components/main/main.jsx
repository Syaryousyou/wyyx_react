import React, {Component} from 'react'
import Msite from '../../views/msite/msite'
import {Switch, Route, Redirect} from 'react-router-dom'
import Goods from '../../views/goods/goods'
import Classify from '../../views/classify/classify'
import ShopCart from '../../views/shopCart/shopCart'
import Profile from '../../views/profile/profile'
import FooterGuide from '../footerGuide/footerGuide'

export default class Main extends Component {
  FooterGuideList = [
    {
      path: '/msite', // 路由路径
      component: Msite,
      title: '首页',
      icon: 'msite'
    },
    {
      path: '/goods', // 路由路径
      component: Goods,
      title: '识物',
      icon: 'goods'
    },
    {
      path: '/classify', // 路由路径
      component: Classify,
      title: '分类',
      icon: 'classify'
    },
    {
      path: '/shopCart', // 路由路径
      component: ShopCart,
      title: '购物车',
      icon: 'shopcart'
    },
    {
      path: '/profile', // 路由路径
      component: Profile,
      title: '个人',
      icon: 'profile'
    },
  ]
  render() {
    //const {FooterGuideList} = this
    //const path = this.props.location.pathname
    //console.log(path)
    //const currentNav = FooterGuideList.find(nav => nav.path === path)
    return (
      <div style={{height: '100%'}}>
        <Switch>
          <Route path='/msite' component={Msite}/>
          <Route path='/goods' component={Goods}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/shopCart' component={ShopCart}/>
          <Route path='/profile' component={Profile}/>
          <Redirect to='/msite'/>
        </Switch>
        <FooterGuide FooterGuideList={this.FooterGuideList}/>
      </div>

    )
  }
}