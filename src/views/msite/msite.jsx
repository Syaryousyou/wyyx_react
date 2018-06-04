import React from 'react'
import Swiper from 'swiper'
import './images/logo.png'
import './images/search.png'
import './images/sale/01.jpg'
import './images/service/service.png'
import './images/newUser/newUser.png'
import './images/supply/supplyMore.png'
import './images/newItems/bg.png'
import './images/hotItems/bg.png'
import Bg from './images/brand/01.png'
import itemImg from './images/newItems/01.png'
import hitemImg from './images/hotItems/01.png'
import flashImg from './images/flash/01.png'
import topicImg from './images/topic/01.jpg'
import gitemImg from './images/grid/01.png'
import './msite.styl'
import MsiteGoToTop from '../../components/msiteGoToTop/msiteGoToTop'
import {reqMbanner} from '../../api/index'
export default class Msite extends React.Component{
  state = {
    bannerInfo: [], // 首页轮播图信息
  }
  // async componentWillMount () {
  //   // 首页轮播图信息
  //   const result = await reqMbanner()
  //   if (result.code===0) {
  //     const bannerInfo = result.data
  //     this.setState({
  //       bannerInfo
  //     })
  //
  //   }
  //   console.log('---1')
  // }
  componentWillMount () {
    // 首页轮播图信息
    const result = reqMbanner()
    result.then(response =>{
       const bannerInfo = response.data
      this.setState({
        bannerInfo
      })
    })
    console.log('---1')
  }
  componentDidUpdate() {
    console.log('---')
    new Swiper('.slideService-container', {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
  render(){
    const {bannerInfo} = this.state
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
              <div className="slideService-container swiper-container">
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
                <li className="item">
                  <a>
                    <i className="servicePolicy"/>
                    <span className="serviceName">网易自营品牌</span>
                  </a>
                </li>
                <li className="item">
                  <a>
                    <i className="servicePolicy"/>
                    <span className="serviceName">网易自营品牌</span>
                  </a>
                </li>
                <li className="item">
                  <a>
                    <i className="servicePolicy"/>
                    <span className="serviceName">网易自营品牌</span>
                  </a>
                </li>
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
                <li className="contentItem">
                  <a>
                    <div className="brand">
                      <h4  className="title ellipsis">CK制造商</h4>
                      <div className="price">
                        <span>99元起</span>
                      </div>
                    </div>
                    <img className="brandImg" src={Bg} alt="02"/>
                  </a>
                </li>
                <li className="contentItem">
                  <a>
                    <div className="brand">
                      <h4  className="title ellipsis">CK制造商</h4>
                      <div className="price">
                        <span>99元起</span>
                      </div>
                    </div>
                    <img className="brandImg" src={Bg} alt="02"/>
                  </a>
                </li>
                <li className="contentItem">
                  <a>
                    <div className="brand">
                      <h4  className="title ellipsis">CK制造商</h4>
                      <div className="price">
                        <span>99元起</span>
                      </div>
                    </div>
                    <img className="brandImg" src={Bg} alt="02"/>
                  </a>
                </li>
                <li className="contentItem">
                  <a >
                    <div className="brand">
                      <h4  className="title ellipsis">CK制造商</h4>
                      <div className="price">
                        <span>99元起</span>
                      </div>
                    </div>
                    <img className="brandImg" src={Bg} alt="02"/>
                  </a>
                </li>
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
              <div className="inner swiper-container">
                <ul className="list swiper-wrapper">
                  <li className="item swiper-slide">
                    <a className="good">
                      <div className="good_header">
                        <div className="wrap">
                          <img src={itemImg} alt="01"/>
                        </div>
                      </div>
                      <span></span>
                      <div className="goodName">
                        <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                      </div>
                      <div className="gooeDesc ellipsis">
                        夏季爆品，媲美现煮
                      </div>
                      <div className="goodPrice">
                        <span>￥98</span>
                      </div>
                      <span></span>
                    </a>
                  </li>
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
                  <li className="item swiper-slide">
                    <a className="good">
                      <div className="good_header">
                        <div className="wrap">
                          <img src={hitemImg} alt="01"/>
                        </div>
                      </div>
                      <span></span>
                      <div className="goodName">
                        <span>绿豆糕</span>
                      </div>
                      <div className="gooeDesc ellipsis">
                        细腻松软，入口绵柔
                      </div>
                      <div className="goodPrice">
                        <span>￥12.9</span>
                      </div>
                      <span></span>
                    </a>
                  </li>
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
                    <img src={flashImg} alt="flash"/>
                  </div>
                  <div className="flashPrice">
                    <div className="nowPrice">
                      <span className="rmb">￥</span>
                      <span>200</span>
                    </div>
                    <div className="originPrice">
                      <span className="rmb">￥</span>
                      <span>280</span>
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
                  <li className="topicItem swiper-slide">
                    <a className="topicA">
                      <img src={topicImg} alt="01"/>
                    </a>
                    <div className="topicDes">
                      <h4 className="topicDesTitle ellipsis">给毛孔来一次深度清洁</h4>
                      <span className="topicPrice">
                    <span>107.1元起</span>
                  </span>
                    </div>
                    <div className="topicDesPlus ellipsis">
                      硅胶洁面仪，洗出会发光的素颜肌
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="goodGrid">
            <div className="goodGrid-wrap">
              <h3 className="goodGrid-title">居家好物</h3>
              <div className="goodGridContent">
                <ul className="goodGridList">
                  <li className="goodGridItem">
                    <a className="goodGridItemA">
                      <div className="goodGridItemA-hd">
                        <div className="goodGridImg">
                          <img src={gitemImg} alt="01" />
                        </div>
                        <div className="goodGridDes ellipsis">
                          宽细夹排，升级爽滑凉感
                        </div>
                      </div>
                      <div className="goodGridItemA-name ellipsis">
                        <span>天然宽篾头层青碳化竹凉席</span>
                      </div>
                      <div className="goodGridItemA-price">
                        <span>￥209.25</span>
                      </div>
                    </a>
                  </li>
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
