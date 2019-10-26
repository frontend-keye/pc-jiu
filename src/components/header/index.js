import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import classnames from 'classnames'
import routers from '../../router'
import './index.scss'
function Header ({location: {pathname}}) {
  const Links = routers.filter(t => t.order).sort((a, b) => a.sort - b.sort).map((t, i) => {
    if ('/index' === t.path) {
      return null
    }
    return <Link className={classnames({
      'acitve-nav': pathname.indexOf(t.path) !== -1,
      'nav-item': true
    })} key={i} to={t.path}>{t.title}</Link>
  })
  return <div className="header">
    <div className="header inner">
      <div className="top-header">
        <Link to='/home' className="home">home</Link>
        <a className="search" href="http://www.google.com" target="__blank">検 索</a>
      </div>
      <div className="nav">
        {Links}
      </div>
    </div>
  </div>
}
export default withRouter(Header)