import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './index.scss'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="product-page">
        <div className="banner-product">
          <img src={require('../../imgs/bg-product.jpg')} alt="" srcset=""/>
        </div>

        <div className="list-product">
          <Link className="item-product" to="productInfo/1">
            <img src={require('../../imgs/product-show.png')} alt=""/>
            <h6 className="title-product">球面轴承</h6>
          </Link>
          <Link className="item-product" to="productInfo/2">
            <img src={require('../../imgs/product-show.png')} alt=""/>
            <h6 className="title-product">带坐轴承</h6>
          </Link>
          <Link className="item-product" to="productInfo/3">
            <img src={require('../../imgs/product-show.png')} alt=""/>
            <h6 className="title-product">不锈钢轴承</h6>
          </Link>
        </div>
      </div>
    );
  }
}
 
export default Product;