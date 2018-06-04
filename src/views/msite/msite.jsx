import React from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './images/logo.png'
import './images/search.png'
import './images/sale/01.jpg'
import './images/service/service.png'
import './images/newUser/newUser.png'
import './images/supply/supplyMore.png'
import './images/newItems/bg.png'
import './images/hotItems/bg.png'
import './msite.styl'
import MsiteGoToTop from '../../components/msiteGoToTop/msiteGoToTop'
import {reqMbanner,
  reqMServiceInfo,
  reqMBrandSupplyInfo,
  reqNewItems,
  reqHotItems,
  reqFlashSale,
  reqTopicList,
  reqCateList} from '../../api/index'
export default class Msite extends React.Component{
  state = {
    bannerInfo: [], // 首页轮播图信息
    serviceInfo: [], // 首页轮播图下方服务保障信息
    brandsupplyinfo: [], // 品牌直供信息
    newItems: [], // 新品首发列表
    hotItems: [], // 人气商品列表
    flashInfo: {}, // 人气限时购信息
    topicList: [], // 专题精选列表
    cateList: [], // 好物列表
  }
  getBannerInfo = () => {
    const result = reqMbanner()
    result.then(response =>{
      const bannerInfo = response.data
      this.setState({
        bannerInfo
      })
    })
  }
  getReqMServiceInfo = () => {
    const result = reqMServiceInfo()
    result.then(response =>{
      const serviceInfo = response.data
      this.setState({
        serviceInfo
      })
    })
  }
  getBrandsupplyinfo = () => {
    const result = reqMBrandSupplyInfo()
    result.then(response =>{
      const maxArr = response.data
      const brandsupplyinfo = []
      for (let i = 0; i < 4; i++) {
        brandsupplyinfo.push(maxArr[i])
      }
      this.setState({
        brandsupplyinfo
      })
    })
  }
  getNewItems = () => {
    const result = reqNewItems()
    result.then(response =>{
      const newItems = response.data
      this.setState({
        newItems
      })
    })
  }
  getHotItems = () => {
    const result = reqHotItems()
    result.then(response =>{
      const hotItems = response.data
      this.setState({
        hotItems
      })
    })
  }
  getFlashInfo = () => {
    const result = reqFlashSale()
    result.then(response =>{
      const flashInfo = response.data
      this.setState({
        flashInfo
      })
    })
  }
  getTopicList = () => {
    const result = reqTopicList()
    result.then(response =>{
      const topicList = response.data
      this.setState({
        topicList
      })
    })
  }
  getCateList = () => {
    const result = reqCateList()
    result.then(response =>{
      const cateList = response.data
      this.setState({
        cateList
      })
    })
  }
  componentDidMount () {
    // 首页轮播图信息
    this.getBannerInfo()
    this.getReqMServiceInfo()
    this.getBrandsupplyinfo()
    this.getNewItems()
    this.getHotItems()
    this.getFlashInfo()
    this.getTopicList()
    this.getCateList()
  }
  componentDidUpdate() {
    if (!this.mBanner) {
      this.mBanner = new Swiper('.slideService-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
    if (!this.mNewItems) {
      this.mNewItems = new Swiper(this.refs.newItems, {
        initialSlide: 0,
        slidesPerView: 'auto',
        autoHeight: true
      })
    }
    if (!this.mHotItemsnew) {
      this.mHotItemsnew = new Swiper('.hotInner', {
        initialSlide: 0,
        slidesPerView: 'auto',
        autoHeight: true
      })
    }
    if (!this.mTopic) {
      this.mTopic = new Swiper('.topicSlide-container', {
        initialSlide: 0,
        slidesPerView: 'auto',
        autoHeight: true
      })
    }
  }
  render(){
    const {bannerInfo,
      serviceInfo,
      newItems,
      hotItems,
      brandsupplyinfo,
      flashInfo,
      topicList,
      cateList} = this.state
    return(
      <div>
        <header className="msiteHeader">
          <div className="headerTop">
            <span className="logo"/>
            <div className="search">
              <i className="icon"/>
              <span className="placeholder">搜索商品, 共9765款好物</span>
            </div>
          </div>
          <div className="hesderBottom">
            <div className="list">
              <div className="item">
                <span className="text active">推荐</span>
              </div>
              <div className="item">
                <span className="text">推荐</span>
              </div>
              <div className="item">
                <span className="text">推荐</span>
              </div>
              <div className="item">
                <span className="text">推荐</span>
              </div>
              <div className="item">
                <span className="text">推荐</span>
              </div>
              <div className="item">
                <span className="text">推荐</span>
              </div>
              <div className="item">
                <span className="text">推荐</span>
              </div>
              <div className="item">
                <span className="text">推荐</span>
              </div>
            </div>
          </div>
        </header>
        <div className="msiteContent">
          <div className="slide_service">
            <div className="slide">
              <div className="slideService-container swiper-container" ref="banner">
                <div className="swiper-wrapper">
                  {
                    bannerInfo.map((ban, index) => (
                      <div className="swiper-slide" key={index}>
                        <img className="bannerImg" src={ban.picUrl} alt="01"/>
                      </div>
                    ))
                  }
                </div>
                <div className="swiper-pagination mySwiperPagination"/>
              </div>
            </div>
            <div className="service">
              <ul className="list">
                {
                  serviceInfo.map((service, index) => (
                    <li className="item" key={index}>
                      <a>
                        <i className="servicePolicy" style={{backgroundImage: service.icon}}/>
                        <span className="serviceName">{service.desc}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="brandSupply">
            <div className="header">
              <a>
                <span>品牌制造商直供</span>
                <i></i>
              </a>
            </div>
            <div className="content">
              <ul className="contentList">
                {
                  brandsupplyinfo.map((brand, index) => (
                    <li className="contentItem" key={index}>
                      <a>
                        <div className="brand">
                          <h4  className="title ellipsis">{brand.name}</h4>
                          <div className="price">
                            <span>{brand.floorPrice}元起</span>
                          </div>
                        </div>
                        <img className="brandImg" src={brand.picUrl} alt="02"/>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="newItems">
            <header className="hd">
              <a className="more" >
                <span>新品首发</span>
                <div>
                  <div className="all">
              <span className="wrap">
                <span>查看全部</span>
                <i></i>
              </span>
                  </div>
                </div>
              </a>
            </header>
            <div className="goods">
              <div className="inner swiper-container" ref="newItems">
                <ul className="list swiper-wrapper">
                  {
                    newItems.map((nitem, index) => (
                      <li className="item swiper-slide" key={index}>
                        <a className="good">
                          <div className="good_header">
                            <div className="wrap">
                              <img src={nitem.listPicUrl} alt="01"/>
                            </div>
                          </div>
                          <span></span>
                          <div className="goodName">
                            <span>{nitem.name}</span>
                          </div>
                          <div className="gooeDesc ellipsis">
                            {nitem.simpleDesc}
                          </div>
                          <div className="goodPrice">
                            <span>￥{nitem.retailPrice}</span>
                          </div>
                          <span></span>
                        </a>
                      </li>
                    ))
                  }
                  <li className="item swiper-slide lookMore">
                    <a className="click">
                      <span className="moreText">查看全部</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hotItems">
            <header className="hd">
              <a className="more">
                <span>人气推荐 · 好物精选</span>
                <div>
                  <div className="all">
                <span className="wrap">
                  <span>查看全部</span>
                  <i></i>
                </span>
                  </div>
                </div>
              </a>
            </header>
            <div className="goods">
              <div className="hotInner swiper-container">
                <ul className="list swiper-wrapper">
                  {
                    hotItems.map((hitem, index) => (
                      <li className="item swiper-slide" key={index}>
                        <a className="good">
                          <div className="good_header">
                            <div className="wrap">
                              <img src={hitem.listPicUrl} alt="01"/>
                            </div>
                          </div>
                          <span></span>
                          <div className="goodName">
                            <span>{hitem.name}</span>
                          </div>
                          <div className="gooeDesc ellipsis">
                            {hitem.simpleDesc}
                          </div>
                          <div className="goodPrice">
                            <span>￥{hitem.retailPrice}</span>
                          </div>
                          <span></span>
                        </a>
                      </li>
                    ))
                  }
                  <li className="item swiper-slide lookMore">
                    <a className="click">
                      <span className="moreText">查看全部</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flashSale">
            <a className="flashA">
              <div className="flashContent">
                <div className="leftItem">
                  <div className="title">严选限时购</div>
                  <div className="countdown">
                    <span className="hours">10</span>
                    <span className="colon">:</span>
                    <span className="mins">00</span>
                    <span className="colon">:</span>
                    <span className="secs">00</span>
                  </div>
                  <div className="next">
              <span>
                <span>下一场 </span>
                <span>17:00</span>
                <span>开始</span>
              </span>
                  </div>
                </div>
                <div className="rightItem">
                  <div className="flashGood">
                    <img src={flashInfo.primaryPicUrl} alt="flash"/>
                  </div>
                  <div className="flashPrice">
                    <div className="nowPrice">
                      <span className="rmb">￥</span>
                      <span>{flashInfo.activityPrice}</span>
                    </div>
                    <div className="originPrice">
                      <span className="rmb">￥</span>
                      <span>{flashInfo.originPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="sale">
            <div className="saleClick"></div>
          </div>
          <div className="topics">
            <header className="topicHeader">
              <a className="topicClick">
                <span>专题精选</span>
                <i></i>
              </a>
            </header>
            <div className="topicSlide">
              <div className="topicSlide-container swiper-container">
                <ul className="topicList swiper-wrapper">
                  {
                    topicList.map((t, index)=>(
                      <li className="topicItem swiper-slide" key={index}>
                        <a className="topicA">
                          <img src={t.itemPicUrl} alt="01"/>
                        </a>
                        <div className="topicDes">
                          <h4 className="topicDesTitle ellipsis">{t.title}</h4>
                          <span className="topicPrice">
                            <span>{t.priceInfo}元起</span>
                          </span>
                        </div>
                        <div className="topicDesPlus ellipsis">
                          {t.subtitle}
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          {
            cateList.map((grid, index)=>(
              <div className="goodGrid" key={index}>
                <div className="goodGrid-wrap">
                  <h3 className="goodGrid-title">{grid.name}好物</h3>
                  <div className="goodGridContent">
                    <ul className="goodGridList">
                      {
                        grid.itemList.map((item, index)=>(
                          <li className="goodGridItem" key={index}>
                            <a className="goodGridItemA">
                              <div className="goodGridItemA-hd">
                                <div className="goodGridImg">
                                  <img src={item.listPicUrl} alt="01" />
                                </div>
                                <div className="goodGridDes ellipsis">
                                  {item.simpleDesc}
                                </div>
                              </div>
                              <div className="goodGridItemA-name ellipsis">
                                <span>{item.name}</span>
                              </div>
                              <div className="goodGridItemA-price">
                                <span>￥{item.retailPrice}</span>
                              </div>
                            </a>
                          </li>
                        ))
                      }
                      <li className="goodGridItem goodGridItem-more">
                        <a className="goodGridItemA">
                          <div className="goodGridItemA-hd">
                            <div className="moreContent">
                              <div className="moreContentA">
                                <p>更多居家好物</p>
                                <i/>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))

          }
          <div className="msiteFooter">
            <div className="footerContent">
              <div className="button">
                <a className="goToBtns downloadBtn">
                  下载app
                </a>
                <a className="goToBtns toPcBtn">
                  电脑版
                </a>
              </div>
              <p className="copyright">
                <span>网易公司版权所有 © 1997-2018</span><br/>
                <span>食品经营许可证：JY13301080111719</span>
              </p>
            </div>
          </div>
        </div>
        <a className="newUserEntrance">
          <i></i>
        </a>
        <MsiteGoToTop/>
      </div>
    )
  }
}
// export default connect(
//   state=>({newItems:state.newItems}),
//   {getNewItems}
// )(Msite)