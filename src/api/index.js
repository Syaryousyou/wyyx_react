/*
与后台交互模块
 */
import ajax from './ajax'
/*
 * 获取轮播图信息
 */
export const reqMbanner = () => ajax('/banner')
// 获取轮播图下侧的服务保障信息
export const reqMServiceInfo = () => ajax('/mservice')
// 获取头部分类横向导航
export const reqMSclassify = () => ajax('/mclassify')
// 获取品牌直供列表
export const reqMBrandSupplyInfo = () => ajax('/mbrands')
// 获取新品首发列表
export const reqNewItems = () => ajax('/newgoods')
// 获取人气商品列表
export const reqHotItems = () => ajax('/hotgoods')
// 获取限时购信息
export const reqFlashSale = () => ajax('/flash')
// 获取专题精选信息
export const reqTopicList = () => ajax('/topic')
// 获取好物信息
export const reqCateList = () => ajax('/catelist')
/*
获取识物页相关数据
*/
// 获取识物轮播
export const reqGbanner = () => ajax('/gbanner')
// 获取识物页文章信息
export const reqGarticle = () => ajax('/garticle')
// 获取推荐信息
export const reqRecommend = () => ajax('/grecommend')
// 获取十点一刻信息
export const reqTenfifteen = () => ajax('/gtenfifteen')
// 获取甄选信息
export const reqZhen = () => ajax('/gzhen')
// 获取yxLook信息
export const reqYxLook = () => ajax('/glook')
// 获取yxLook信息
export const reqFindMore = () => ajax('/gfind')
/*
获取分类页信息
*/
// 获取左侧分类列表信息
export const reqClassifyList = () => ajax('/classifylist')
