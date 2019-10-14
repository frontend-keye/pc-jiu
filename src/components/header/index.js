import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import classnames from 'classnames'
import routers from '../../router'
import './index.scss'
function Header ({location: {pathname}}) {
  const Links = routers.sort((a, b) => a.sort - b.sort).map((t, i) => {
    return <Link className={classnames({
      'acitve-nav': t.path === pathname
    })} key={i} to={t.path}>{t.title}</Link>
  })
  return <div className="header">
    <div className="nav">
      {Links}
    </div>
  </div>
}
export default withRouter(Header)