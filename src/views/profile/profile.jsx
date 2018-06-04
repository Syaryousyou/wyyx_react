import React from 'react'
import './profile.styl'
import proBg from './images/header/bg.png'
export default class Profile extends React.Component{
  render(){
    return(
      <div className="profileContainer">
        <header className="Header">
          <div className="HeaderLeft">
            <i className="home"></i>
          </div>
          <div className="HeaderTitle">
            <i className="logo"></i>
          </div>
          <div className="HeaderRight">
            <i className="search"></i>
            <i className="cart" ></i>
          </div>
        </header>
        <div className="Lprofile">
          <div className="loginContainer">
            <div className="plogo">
              <img src={proBg} alt="bg"/>
            </div>
            <div className="loginWay">
              <ul className="loginStyle">
                <li className="loginItem active">
                  <span>普通登录</span>
                  <i></i>
                </li>
                <li className="loginItem">
                  <span>手机动态密码登录</span>
                  <i></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="loginForm">
            <form>
              <div className="userLogin active">
                <div className="inpCon">
                  <input type="text" placeholder="手机号/邮箱/用户名"/>
                </div>
                <div className="inpCon">
                  <input type="password" placeholder="输入密码"/>
                </div>
              </div>
              <div className="poneLogin">
                <div className="inpCon">
                  <input type="text" placeholder="已注册的手机号" />
                </div>
                <div className="inpCon">
                  <input type="text" placeholder="请输入图片内容" />
                  <img className="get_verification" src="./images/captcha.svg" alt="captcha"/>
                </div>
                <div className="inpCon">
                  <input type="text" placeholder="动态密码" />
                  <button disabled="disabled" className="get_password" >获取动态密码</button>
                </div>
              </div>
            </form>
          </div>
          <div className="submit">
            <div className="loginBtn">登录</div>
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
        {/*<AlertTip/>*/}
      </div>
    )
  }
}