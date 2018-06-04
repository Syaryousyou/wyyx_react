import Mock from 'mockjs'
import MfocusList from './Msite/MfocusList'
import policyDescList from './Msite/policyDescList'
import brandSupply from './Msite/brandSupply'
import newItemList from './Msite/newItemList'
import popularItemList from './Msite/popularItemList'
import flashSale from './Msite/flashSale'
import topicList from './Msite/topicList'
import cataList from './Msite/cataList'
import headerBottom from './Msite/headerBottom'

import banner from './Goods/banner'
import column from './Goods/column'
import recommend from './Goods/recommend'
import tenfifteen from './Goods/tenfifteen'
import zhen from './Goods/zhen'
import yxlook from './Goods/yxlook'
import findMore from './Goods/findMore'

import categoryList from './Classify/categoryList'
// 指定监听的url和对应的json数据模板
Mock.mock('/banner', {
  code: 0,
  data: MfocusList
})
Mock.mock('/mservice', {
  code: 0,
  data: policyDescList
})
Mock.mock('/mbrands', {
  code: 0,
  data: brandSupply
})
Mock.mock('/newgoods', {
  code: 0,
  data: newItemList
})
Mock.mock('/hotgoods', {
  code: 0,
  data: popularItemList
})
Mock.mock('/flash', {
  code: 0,
  data: flashSale
})
Mock.mock('/topic', {
  code: 0,
  data: topicList
})
Mock.mock('/catelist', {
  code: 0,
  data: cataList
})
Mock.mock('/mclassify', {
  code: 0,
  data: headerBottom
})
// 识物也相关
Mock.mock('/gbanner', {
  code: 0,
  data: banner
})
Mock.mock('/garticle', {
  code: 0,
  data: column
})
Mock.mock('/grecommend', {
  code: 0,
  data: recommend
})
Mock.mock('/gtenfifteen', {
  code: 0,
  data: tenfifteen
})
Mock.mock('/gzhen', {
  code: 0,
  data: zhen
})
Mock.mock('/glook', {
  code: 0,
  data: yxlook
})
Mock.mock('/gfind', {
  code: 0,
  data: findMore
})
Mock.mock('/classifylist', {
  code: 0,
  data: categoryList
})
