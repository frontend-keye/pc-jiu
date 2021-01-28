import React from 'react'
import classnames from 'classnames'
import './index.scss'

export default class LeftBar extends React.Component {

  render() {
    const {listData = [], index = 0, onChange = () => {}, title} = this.props
    return <div className="leftBarComponent">
      <p className="title-bar">{title}</p>
      {
        listData.map((t, i) => {
        return <p onClick={() => {onChange(i)}} key={i} className={classnames("item-leftBar", {"active": i === index})}>{t.title}</p>
        })
      }
    </div>
  }
}