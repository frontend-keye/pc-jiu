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
      'acitve-nav': t.path === pathname,
      'nav-item': true
    })} key={i} to={t.path}>{t.title}</Link>
  })
  return <div className="header">
    <Link to='/home'>home</Link>
    <div className="nav">
      {Links}
    </div>
  </div>
}
export default withRouter(Header)