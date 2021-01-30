import React from 'react'
import Data from '../../data/data';
import btnImg from './btn_detail.gif'
import {Link} from 'react-router-dom'
import './index.scss'

export default class List extends React.Component {

  render() {
    const {type} = this.props
    const {class: productClass, list} = Data[type]
    return <div className="list-product-n">
      <p className="name-productInfo">{productClass}</p>
      {
        list.map((t, i) => {
          const {title, id, img, info = []} = t
          return <div className="item" key={i}>
            <div className="flex1">
              <p className="title">{title}</p>
              {
                info.map((tt, ii) => {
                  return <p className="li" key = {i + '-' + ii}>{tt}</p>
                })
              }
              <Link className="btn-detail" to={`/productDetail/${id}`}><img src={btnImg} /></Link>
              
            </div>
            <div>
              <img className="avatar" src={img} alt=""/>
            </div>
          </div>
        })
      }
    </div>
  }
}