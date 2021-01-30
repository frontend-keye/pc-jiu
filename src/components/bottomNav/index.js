import React from 'react'
import routerConf from '../../router'
import {Link} from 'react-router-dom'
import './index.scss'

function NavBottom () {
  const linksData = routerConf.filter(t => t.isBottom).sort((a, b) => a.order - b.order)
  const links = linksData.map((t, i) => {
    return <Link className="item-navBottom" to={t.path} key={i}>{t.title}</Link>
  })

  return <p className="navBottom-container">{links}</p>
}

export default NavBottom