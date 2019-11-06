import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
export default function ProductList () {
  return <div className="list-product-new">
          <Link className="item-product" to="productInfo/1">
            <img src={require('./daizuo.jpg')} alt=""/>
            <div className="title-product">
              <h6>ベアリングユニット</h6>
              <p>鋳鉄製ベアリングユニットです。</p>
            </div>
          </Link>
          <Link className="item-product" to="productInfo/3" style={{"marginRight": 0}}>
            <img src={require('./bxiugang.jpg')} alt=""/>
            <div className="title-product">
              <h6>ステンレスベアリング　</h6>
              <p>深溝玉軸受（両シールド）タイプ</p>
            </div>
          </Link>          
          <Link className="item-product" to="productInfo/2">
            <img src={require('./qiumian.jpg')} alt=""/>
            
            <div className="title-product">
              <h6>アンギュラ玉軸受の組合せ加工</h6>
              <p></p>
            </div>
          </Link>
        </div>
}