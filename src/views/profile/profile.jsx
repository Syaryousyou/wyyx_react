import React from 'react'
import './profile.styl'
import proBg from './images/header/bg.png'
import AlertTip from '../../components/alertTip/alertTip'
export default class Profile extends React.Component{
  state = {
    loginWay: true, // true为普通登录， false为手机登录
    userName: '', // 普通登录用户名
    password: '', // 普通登录密码
    phone: '', // 手机登录用手机号
    captcha: '', // 手机登录用图片验证码
    message: '', // 手机登录用动态密码
    alertText: '', // 提示文本
    alertShow: false // 是否显示警示框，默认不显示
  }
  changeLoginWay = () => {
    const loginWay = !this.state.loginWay
    this.setState({
      loginWay
    })
  }
  changeLoginInfo = (type, e) => {
    const val = e.target.value
    this.setState({
      [type]: val
    })
  }
  login = () => {
    const {loginWay} = this.state
    if (loginWay) {
      const {userName, password} = this.state
      if (!userName) {
        this.showAlert('请输入用户名')
        return
      } else if (!password) {
        this.showAlert('请输入密码')
        return
      }
    }else {
      const {phone, captcha, message} = this.state
      if (!phone) {
        this.showAlert('请输入手机号')
        return
      } else if (!captcha) {
        this.showAlert('请输入图片验证码')
        return
      } else if (!message) {
        this.showAlert('请输入动态密码')
        return
      }
    }
    this.props.history.replace('/msite')
  }
  showAlert = (alertText) => {
    this.setState({
      alertShow: true,
      alertText: alertText
    })
  }
  closeTip = () => {
    this.setState({
      alertShow: false,
      alertText: ''
    })
  }
  render(){
    const {loginWay, alertShow, alertText} = this.state
    return(
      <div className="profileContainer">
        <header className="Header">
          <div className="HeaderLeft" onClick={()=>this.props.history.replace('/msite')}>
            <i className="home"></i>
          </div>
          <div className="HeaderTitle">
            <i className="logo"></i>
          </div>
          <div className="HeaderRight">
            <i className="search"></i>
            <i className="Pcart" onClick={()=>this.props.history.replace('/shopcart')}></i>
          </div>
        </header>
        <div className="Lprofile">
          <div className="loginContainer">
            <div className="plogo">
              <img src={proBg} alt="bg"/>
            </div>
            <div className="loginWay">
              <ul className="loginStyle">
                <li className={loginWay ? "loginItem active" : "loginItem"} onClick={this.changeLoginWay}>
                  <span>普通登录</span>
                  <i></i>
                </li>
                <li className={loginWay ? "loginItem" : "loginItem active"} onClick={this.changeLoginWay}>
                  <span>手机动态密码登录</span>
                  <i></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="loginForm">
            <form>
              <div className= {loginWay ? "userLogin active" : "userLogin"}>
                <div className="inpCon">
                  <input type="text" placeholder="手机号/邮箱/用户名" onChange={(e)=>this.changeLoginInfo('userName', e)}/>
                </div>
                <div className="inpCon">
                  <input type="password" placeholder="输入密码" onChange={(e)=>this.changeLoginInfo('password', e)}/>
                </div>
              </div>
              <div className= {loginWay ? "poneLogin" : "poneLogin active"}>
                <div className="inpCon">
                  <input type="text" placeholder="已注册的手机号" onChange={(e)=>this.changeLoginInfo('phone', e)}/>
                </div>
                <div className="inpCon">
                  <input type="text" placeholder="请输入图片内容" onChange={(e)=>this.changeLoginInfo('captcha', e)}/>
                  <img className="get_verification" src={require('./images/captcha.svg')} alt="captcha"/>
                </div>
                <div className="inpCon">
                  <input type="text" placeholder="动态密码" onChange={(e)=>this.changeLoginInfo('message', e)}/>
                  <button disabled="disabled" className="get_password" >获取动态密码</button>
                </div>
              </div>
            </form>
          </div>
          <div className="submit">
            <div className="loginBtn" onClick={this.login}>登录</div>
          </div>
          <div className="newUser">
            <div className="newUserLeft">新用户注册</div>
            <div className="newUserRight">忘记密码？</div>
          </div>
        </div>
        <footer className="others">
          <div className="oth">
            <i></i>
            <span>微信</span>
          </div>
          <div className="oth">
            <i className="QQ"></i>
            <span>QQ</span>
          </div>
          <div className="oth">
            <i className="weibo"></i>
            <span>微博</span>
          </div>
        </footer>
        {
          alertShow ?  <AlertTip closeTip={this.closeTip} alertText={alertText}/> : ''
        }
      </div>
    )
  }
}