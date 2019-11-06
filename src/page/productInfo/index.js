import React, {Fragment} from 'react'
import './index.scss'

function ProductInfo (props) {
  const type = props.match.params.type
  return (
      <div className="ProductInfo">
        <div className="banner-product">
          <img src={require('../../imgs/bg-product.jpg')} alt="" srcset=""/>
        </div>
        <div className="section">
          {
            type === '1' && 
            <Fragment>
              <p className="name-productInfo">ベアリングユニット</p>

            </Fragment>
          }
        </div>
      </div>
    )
}

export default ProductInfo