import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import classnames from 'classnames'
import routers from '../../router'
import './index.scss'
function Header ({location: {pathname}}) {
  const headerData = routers.filter(t => t.order > 0).sort((a, b) => a.sort - b.sort)
  const Links = headerData.filter(t => t.order > 0).sort((a, b) => a.sort - b.sort).map((t, i) => {
    // if ('/index' === t.path) {
    //   return null
    // }
    return <Link className={classnames({
      'acitve-nav': pathname.indexOf(t.path) !== -1,
      'nav-item': true
    })} key={i} to={t.path}>{t.title}</Link>
  })
  return <div className="header">
    <div className="header inner">
      <div className="top-header">
        <div className="home">
          <Link  to='/home' className="header-logo-container">
            <img src={require('../../imgs/logo.png')} alt=""/>
            <p>ジェイオート精工株式会社</p>
          </Link>
        </div>
        <div className="right-header">
          <Link to="/contact" className="right-item">お問い合わせ</Link>
          <a className="search" href="http://www.google.com" target="__blank">検 索</a>
          <img width="32" style={{"margin": "0 10px"}} src={require('./icon_facebook.svg')} alt=""/>
          <img width="32" src={require('./icon_twitter.svg')} alt=""/>
        </div>
      </div>
      <div className="nav">
        <Link to="/home" className={classnames({
          "header-home-container": true,
          "acitve-nav": true, //pathname.indexOf ('/index') > -1
        })}>
          <div className="header-home"><img src={require('./home-g.png')} /></div>
        </Link>
        {Links}
      </div>
    </div>
  </div>
}
export default withRouter(Header)