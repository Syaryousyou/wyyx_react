import React from 'react'
import './goods.styl'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import yxlook from './images/look/01.jpg'
import yxAva from './images/look/avatar.jpg'
import MsiteGoToTop from '../../components/msiteGoToTop/msiteGoToTop'
import Ava from './images/recommend/avatar.png'
import minAva from './images/tenFifteen/01.png'
import {reqGbanner,
  reqGarticle,
  reqRecommend,
  reqTenfifteen,
  reqZhen,
  reqYxLook,
  reqFindMore} from '../../api/index'
export default class Goods extends React.Component{
  state = {
    gbannerInfo: [], // 识物轮播图信息
    articleInfo: [], // 识物文章信息
    recommendOne: {}, // 识物推荐信息
    recommendArray: [], // 识物推荐信息
    tenfifteenInfo: [], // 识物十点一刻信息
    zhenInfo: {}, // 识物甄选信息
    lookInfo: {}, // 识物严选Look信息
    findMoreInfo: [], // 识物LookMore信息
  }
  getGbannerInfo = () => {
    const result = reqGbanner()
    result.then(response =>{
      const gbannerInfo = response.data
      this.setState({
        gbannerInfo
      })
    })
  }
  getArticleInfo = () => {
    const result = reqGarticle()
    result.then(response =>{
      const articleInfo = response.data
      this.setState({
        articleInfo
      })
    })
  }
  getRecommendInfo = () => {
    const result = reqRecommend()
    result.then(response =>{
      const recommendInfo = response.data
      const recommendOne= recommendInfo.recommendOne
      const recommendArray = recommendInfo.recommendArray
      this.setState({
        recommendOne,
        recommendArray
      })
    })
  }
  getTenfifteenInfo = () => {
    const result = reqTenfifteen()
    result.then(response =>{
      const tenfifteenInfo = response.data
      this.setState({
        tenfifteenInfo
      })
    })
  }
  getZhenInfo = () => {
    const result = reqZhen()
    result.then(response =>{
      const zhenInfo = response.data
      this.setState({
        zhenInfo
      })
    })
  }
  getLookInfo = () => {
    const result = reqYxLook()
    result.then(response =>{
      const lookInfo = response.data
      this.setState({
        lookInfo
      })
    })
  }
  getfindMoreInfo = () => {
    const result = reqFindMore()
    result.then(response =>{
      const findMoreInfo = response.data
      this.setState({
        findMoreInfo
      })
    })
  }
  componentDidMount () {
    this.getGbannerInfo()
    this.getArticleInfo()
    this.getRecommendInfo()
    this.getTenfifteenInfo()
    this.getZhenInfo()
    this.getLookInfo()
    this.getfindMoreInfo()
  }
  componentDidUpdate () {
    if (this.gBanSp) {
      this.gBanSp.destroy()
    }
    this.gBanSp = new Swiper ('.gCBannerContainer', {
      initialSlide: 0,
      slidesPerView: 1.15, // 设置slider容器能够同时显示的slides数量
      centeredSlides: true,
      spaceBetween: 30, // 在slide之间设置距离单位为px
      loop: true
    })
    if (this.gArtSp) {
      this.gArtSp.destroy()
    }
    this.gArtSp = new Swiper ('.gCArticleContainer', {
      initialSlide: 0,
      slidesPerView: 'auto'
    })
    if (this.gFifteen) {
      this.gFifteen.destroy()
    }
    this.gFifteen = new Swiper ('.gTenFifteenContainer', {
      initialSlide: 0,
      slidesPerView: 'auto'
    })
  }
  render(){
    const {gbannerInfo,
      articleInfo,
      recommendOne,
      recommendArray,
      tenfifteenInfo,
      zhenInfo,
      lookInfo,
      findMoreInfo} = this.state
    return(
      <div>
        <header className="gHeader">
          <div className="gHeaderLeft" onClick={()=>this.props.history.replace('/msite')}>
            <i className="home"/>
          </div>
          <div className="gHeaderTitle">
            <i className="logo"/>
          </div>
          <div className="gHeaderRight">
            <i className="search"/>
            <i className="gcart" onClick={()=>this.props.history.replace('/shopcart')}/>
          </div>
        </header>
        <div className="gContent">
          <div className="gContentBanner">
            <div className="gCBannerWrap">
              <div className="gCBannerContainer swiper-container">
                <ul className="gCBannerWrapper swiper-wrapper">
                  {
                    gbannerInfo.map((item, index)=>(
                      <li className="gCBannerSlide swiper-slide" key={index}>
                        <div className="gCBannerContent">
                          <img className="gCBanImg" src={item.picUrl} alt="01"/>
                          <div className="gCBanMask">
                            <div className="gCBanMaskTitle">- {item.subTitle} -</div>
                            <div className="gCBanMaskDes">{item.title}</div>
                            <div className="gCBanMaskSale">{item.desc}</div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="gCArticle">
            <div className="gCArticleContainer swiper-container">
              <ul className="gCArticleWrapper swiper-wrapper">
                {
                  articleInfo.map((item, index)=>(
                    <li className="gCArticlerSlide swiper-slide" key={index}>
                      <div className="gCArticlerSlideTop" style={{backgroundImage:`url(${item.picUrl})`}}/>
                      <div className="gCArticlerSlideCount"><span>{item.articleCount}</span></div>
                      <div className="gCArticlerSlideTitle">{item.title}</div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="gCRecommend">
            <div className="gCRContent">
              <div className="gCRCHeader">为你推荐</div>
              <div className="gCRCContent">
                <div className="gCRCContentLeft" style={{backgroundImage: `url(${recommendOne.picUrl})`}}>
                  <div className="gCRCContentLeftTitle">
                    <div className="gCRCContentLeftText">
                      {recommendOne.nickname}
                    </div>
                  </div>
                </div>
                <div className="gCRCContentRight">
                  <div className="gCRCContentRightTop">
                    <div className="gCRCCRTTitle">
                      {recommendOne.title}
                    </div>
                    <div className="gCRCCRTPrice">
                      <span>{recommendOne.priceInfo}元起</span>
                    </div>
                  </div>
                  <div className="gCRCContentRightBottom">
                    <div className="gCRCCRBTitle ellipsis">
                      {recommendOne.subTitle}
                    </div>
                  </div>
                </div>
              </div>
              {
                recommendArray.map((rec, index)=>(
                  <div className="gCRCList1" key={index}>
                    <div className="gCRCList1Left">
                      <div className="gCRCList1Left1">
                        <img className="gCRCLAvatar" src={rec.avatar} alt="avatar"/>
                        <div className="nickName">{rec.nickname}</div>
                      </div>
                      <div className="gCRCList1Left2">
                        <div className="gCRCList1LeftTitle ellipsis">{rec.title}</div>
                      </div>
                      <div className="gCRCList1Left3">
                        <div className="Left3Con ellipsis">
                          {rec.subTitle}
                        </div>
                      </div>
                    </div>
                    <div className="gCRCList1Right">
                      <div className="gCRCList1RightImgCon" style={{backgroundImage: `url(${rec.picUrl})`}}>
                        <div className="gCRCList1RightTitle">
                          {rec.typeName}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="gTenFifteen">
            <div className="gTenFifteenInner">
              <div className="gTenFifteenHD">
                十点一刻
              </div>
              <div className="gTenFifteenContainer swiper-container">
                <ul className="gTenFifteenWrapper swiper-wrapper">
                  {
                    tenfifteenInfo.map((item, index)=>(
                      <li className="gTenFifteenSlide swiper-slide" key={index}>
                        <div className="gTenFifteenItem">
                          <div className="gTenFifteenItemLine1">- 今日话题 -</div>
                          <div className="gTenFifteenItemTitle">{item.title}</div>
                          <div className="gTenFifteenItemDes">{item.desc}</div>
                          <div className="gTenFifteenItemJoin">
                            <div className="joinInner">
                              <div className="joinInnerLeft">
                                {
                                  item.participantAvatar.map((p, index) => (
                                    <div key={index} className="LAvatar" style={{backgroundImage: 'url('+(p?p:minAva)+')'}}/>
                                  ))
                                }
                                <div className="AEl">
                                  <div className="spot"/>
                                  <div className="spot"/>
                                  <div className="spot"/>
                                </div>
                              </div>
                              <div className="joinInnerRight">
                                <span>{item.participantNum}人参与话题</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                  {/*<li className="gTenFifteenSlide swiper-slide">*/}
                  {/*<div className="gTenFifteenItemMore gTenFifteenItem">*/}
                  {/*<div className="MoreText">*/}
                  {/*查看全部话题*/}
                  {/*</div>*/}
                  {/*<i className="Moreicon"/>*/}
                  {/*</div>*/}
                  {/*</li>*/}
                </ul>
              </div>
            </div>
          </div>
          <div className="gCRecommend">
            <div className="gCRContent">
              <div className="gCRCHeader">严选甄品</div>
              <div className="gCRCContent">
                {
                  zhenInfo.zhenOne ?
                    <div className="gCRCContentLeft" style={{backgroundImage: `url(${zhenInfo.zhenOne.picUrl})`}}>
                    <div className="gCRCContentLeftTitle">
                       <div className="gCRCContentLeftText">
                          {zhenInfo.zhenOne.nickname}
                        </div>
                      {/*<div className="gCRCContentLeftText">*/}
                      {/*{zhenInfo.zhenOne.nickname}*/}
                      {/*</div>*/}
                    </div>
                  </div> : null
                }
                <div className="gCRCContentRight">
                  <div className="gCRCContentRightTop">
                    {
                      zhenInfo.zhenOne ? <div className="gCRCCRTTitle">
                        {zhenInfo.zhenOne.title}
                      </div> : null
                    }
                    <div className="gCRCCRTPrice">
                      <span></span>
                    </div>
                  </div>
                  <div className="gCRCContentRightBottom">
                    <div className="gCRCCRBTitle ellipsis">
                    </div>
                  </div>
                </div>
              </div>
               {
                 zhenInfo.zhenArray ? zhenInfo.zhenArray.map((zh, index) => (
                  <div className="gCRCList1" key={index}>
                    <div className="gCRCList1Left">
                      <div className="gCRCList1Left1">
                        <div className="nickName"></div>
                      </div>
                      <div className="gCRCList1Left2">
                        <div className="gCRCList1LeftTitle ellipsis">{zh.title}</div>
                      </div>
                      <div className="gCRCList1Left3">
                        <div className="Left3Con"></div>
                      </div>
                    </div>
                    <div className="gCRCList1Right">
                      <div className="gCRCList1RightImgCon" style={{backgroundImage: `url(${zh.picUrl})`}}>
                        <div className="gCRCList1RightTitle">
                          {zh.typeName}
                        </div>
                      </div>
                    </div>
                  </div>
                )) : null
              }
            </div>
          </div>
          <div className="gCLook">
            <div className="gCLTitle">严选Look</div>
            <div className="gCLcontent">
              <img className="gCLcontentImage" src={lookInfo.picUrl} alt="01"/>
              <div className="gCLcontentInfo">
                <div className="gCLcontentInfoTop">
                  <div className="TopAvatar">
                    <img src={lookInfo.avatar} alt="01"/>
                  </div>
                  <div className="gCnickName ellipsis">{lookInfo.nickname}</div>
                </div>
                <div className="gCLcontentInfoBottom">
                  {lookInfo.content}
                </div>
              </div>
              <div className="gCLspot">
                <div className="gCLspotCenter"/>
              </div>
            </div>
          </div>
          <div className="gCLookMore">
            <div className="gCLookMoreHd">
              <div className="gCLookMoreHdTitle">更多精彩</div>
            </div>
            {
              findMoreInfo.map((item, index) => (
                <div className="gCLookMoreContent" key={index}>
                  <div className="gCLookMoreContentWrap">
                    <div className="gCLookMoreContentItem">
                      {
                        !item.picList.length ?
                          <div className="LookMoreImg" style={{backgroundImage: `url(${item.itemPicUrl})`}}/> :
                          <div className="LookMoreImgThree" >
                            <div className="LookLeft" style={{backgroundImage: `url(${item.picList[0]})`}}/>
                            <div className="LookRight">
                              <div className="LookTop" style={{backgroundImage: `url(${item.picList[1]})`}}/>
                              <div className="LookBottom" style={{backgroundImage: `url(${item.picList[2]})`}}/>
                            </div>
                          </div>
                      }
                      <div className="LookMoreDes ellipsis">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <MsiteGoToTop/>
      </div>
    )
  }
}
