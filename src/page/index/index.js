import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import OldQu from '../quality/old/index'

import ProductList from '../../components/productList'
import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount () {
  }
  render() { 
    return ( 
      <div className="index">
        <div className="banner">
          <img src={require('../../imgs/banner.jpg')} alt="" srcset=""/>
        </div>

        <div className="product">
          <h5 className="title-home">製品情報</h5>
          <div className="product-nav">
            <Link className="left" to="/product">
              <img src={require('../../imgs/product1.jpg')} alt=""/>
            </Link>
            {/* search */}
            <Link className="right" to="/product">
              <img src={require('../../imgs/product2.jpg')} alt=""/>
            </Link>
          </div>
        {/* <ProductList /> */}
        </div>

        <div className="rs">
          <h5 className="title-home">採用情報</h5>
          <div className="rs-nav">
            <Link to="/recuitment">
              <img src={require('../../imgs/pick2.jpg')} alt=""/>
            </Link>
            <Link to= "/recuitment">
              <img src={require('../../imgs/pick1.jpg')} alt=""/>
            </Link>
        </div>
        {/* <ProductList /> */}
        </div>        

        <div className="pick">
          {/* <h5 className="title-home">Pick Up</h5> */}
          {/* <p className="sub-titel-home">ピックアップ</p> */}
          <OldQu></OldQu>
        </div>

      </div>
    );
  }
}
 
export default Index;