import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
          <h5 className="title-home">制品信息</h5>
          <div className="product-nav">
            <Link className="left" to="/product">
              <img src={require('../../imgs/product1.jpg')} alt=""/>
            </Link>
            <Link className="right">
              <img src={require('../../imgs/product2.jpg')} alt=""/>
            </Link>
          </div>
        </div>

        <div className="pick">
          <h5 className="title-home">Pick Up</h5>
          <p className="sub-titel-home">ピックアップ</p>
          <div className="pick-img">
            <div className="">
              <img src={require('../../imgs/pick1.jpg')} alt=""/>
            </div>

            <div className="">
              <img src={require('../../imgs/pick1.jpg')} alt=""/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
 
export default Index;