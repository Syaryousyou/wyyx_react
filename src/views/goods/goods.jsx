import React from 'react'
import './goods.styl'
import BanImg from './images/banner/01.jpg'
import yxlook from './images/look/01.jpg'
import yxAva from './images/look/avatar.jpg'
import MsiteGoToTop from '../../components/msiteGoToTop/msiteGoToTop'
import Ava from './images/recommend/avatar.png'
export default class Goods extends React.Component{
  render(){
    return(
      <div>
        <header className="gHeader">
          <div className="gHeaderLeft">
            <i className="home"/>
          </div>
          <div className="gHeaderTitle">
            <i className="logo"/>
          </div>
          <div className="gHeaderRight">
            <i className="search"/>
            <i className="cart"/>
          </div>
        </header>
        <div className="gContent">
          <div className="gContentBanner">
            <div className="gCBannerWrap">
              <div className="gCBannerContainer swiper-container">
                <ul className="gCBannerWrapper swiper-wrapper">
                  <li className="gCBannerSlide swiper-slide">
                    <div className="gCBannerContent">
                      <img className="gCBanImg" src={BanImg} alt="01"/>
                      <div className="gCBanMask">
                        <div className="gCBanMaskTitle">- 严选推荐 -</div>
                        <div className="gCBanMaskDes">今天一起做“大儿童”</div>
                        <div className="gCBanMaskSale">页面内商品每满99立减10元</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gCArticle">
            <div className="gCArticleContainer swiper-container">
              <ul className="gCArticleWrapper swiper-wrapper">
                <li className="gCArticlerSlide swiper-slide">
                  <div className="gCArticlerSlideTop"/>
                  <div className="gCArticlerSlideCount"><span>316篇文章</span></div>
                  <div className="gCArticlerSlideTitle">严选推荐</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="gCRecommend">
            <div className="gCRContent">
              <div className="gCRCHeader">为你推荐</div>
              <div className="gCRCContent">
                <div className="gCRCContentLeft" >
                  <div className="gCRCContentLeftTitle">
                    <div className="gCRCContentLeftText">
                      严选推荐
                    </div>
                  </div>
                </div>
                <div className="gCRCContentRight">
                  <div className="gCRCContentRightTop">
                    <div className="gCRCCRTTitle">
                      如何做清新的白衣少年
                    </div>
                    <div className="gCRCCRTPrice">
                      <span>9.9元起</span>
                    </div>
                  </div>
                  <div className="gCRCContentRightBottom">
                    <div className="gCRCCRBTitle ellipsis">
                      少年感养成必备好物，每满149立减20元
                    </div>
                  </div>
                </div>
              </div>
              <div className="gCRCList1">
                <div className="gCRCList1Left">
                  <div className="gCRCList1Left1">
                    <img className="gCRCLAvatar" src={Ava} alt="avatar"/>
                    <div className="nickName">丁磊</div>
                  </div>
                  <div className="gCRCList1Left2">
                    <div className="gCRCList1LeftTitle ellipsis">今年世界杯喝什么？</div>
                  </div>
                  <div className="gCRCList1Left3">
                    <div className="Left3Con ellipsis">
                      拉格啤酒8.5折特价，买即赠小龙虾优惠券
                    </div>
                  </div>
                </div>
                <div className="gCRCList1Right">
                  <div className="gCRCList1RightImgCon">
                    <div className="gCRCList1RightTitle">
                      丁磊的好货推荐
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gTenFifteen">
            <div className="gTenFifteenInner">
              <div className="gTenFifteenHD">
                十点一刻
              </div>
              <div className="gTenFifteenContainer swiper-container">
                <ul className="gTenFifteenWrapper swiper-wrapper">
                  <li className="gTenFifteenSlide swiper-slide">
                    <div className="gTenFifteenItem">
                      <div className="gTenFifteenItemLine1">- 今日话题 -</div>
                      <div className="gTenFifteenItemTitle">如果生命只剩一天</div>
                      <div className="gTenFifteenItemDes">如果生命只剩一天</div>
                      <div className="gTenFifteenItemJoin">
                        <div className="joinInner">
                          <div className="joinInnerLeft">
                            <div className="LAvatar"/>
                            <div className="AEl">
                              <div className="spot"/>
                              <div className="spot"/>
                              <div className="spot"/>
                            </div>
                          </div>
                          <div className="joinInnerRight">
                            <span>5人参与话题</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
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
                <div className="gCRCContentLeft">
                  <div className="gCRCContentLeftTitle">
                    <div className="gCRCContentLeftText">
                      严选推荐
                    </div>
                  </div>
                </div>
                <div className="gCRCContentRight">
                  <div className="gCRCContentRightTop">
                    <div className="gCRCCRTTitle">
                      入夏床品必备新宠
                    </div>
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
              <div className="gCRCList1">
                <div className="gCRCList1Left">
                  <div className="gCRCList1Left1">
                    <div className="nickName"></div>
                  </div>
                  <div className="gCRCList1Left2">
                    <div className="gCRCList1LeftTitle ellipsis">上班族必囤速食清单</div>
                  </div>
                  <div className="gCRCList1Left3">
                    <div className="Left3Con"></div>
                  </div>
                </div>
                <div className="gCRCList1Right">
                  <div className="gCRCList1RightImgCon">
                    <div className="gCRCList1RightTitle">
                      严选推荐
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gCLook">
            <div className="gCLTitle">严选Look</div>
            <div className="gCLcontent">
              <img className="gCLcontentImage" src={yxlook} alt="01"/>
              <div className="gCLcontentInfo">
                <div className="gCLcontentInfoTop">
                  <div className="TopAvatar">
                    <img src={yxAva} alt="01"/>
                  </div>
                  <div className="gCnickName ellipsis">张****</div>
                </div>
                <div className="gCLcontentInfoBottom">
                  我爱你，如鲸向海，如鸟投林，打call！！！
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
            <div className="gCLookMoreContent">
              <div className="gCLookMoreContentWrap">
                <div className="gCLookMoreContentItem">
                  <div className="LookMoreImg"></div>
                  {/*<div className="LookMoreImgThree" >*/}
                  {/*<div className="LookLeft" ></div>*/}
                  {/*<div className="LookRight">*/}
                  {/*<div className="LookTop"></div>*/}
                  {/*<div className="LookBottom"></div>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                  <div className="LookMoreDes ellipsis">
                    一到假期出游，装箱就成了老大难。东西堆在一起，杂乱又不洁净，而分格收纳，又要算上...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MsiteGoToTop/>
      </div>
    )
  }
}
