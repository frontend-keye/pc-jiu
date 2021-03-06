import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import ProductList from '../../components/productList';
import LeftBar from '../../components/leftBar';
import img1 from './prod1.gif';
import img2 from './prod2.gif';
import img3 from './prod3.gif';
import img11 from './prod1-1.gif';
import img22 from './prod2-2.gif';
import Table from './table';

import List from './components/List';

import './product-2021.scss'

class NewProduct extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      index: 0,
      listData: [{
        title: 'ベアリングの種類'
      }, {
        title: 'ラジアル玉軸受'
      }, {
        title: 'スラスト玉軸受'
      }, {
        title: 'スラストころ軸受'
      }, {
        title: '軸受ユニット'
      }]
    }
  }
  onChange = (index) => {
    this.props.history.replace(`/product/${index}`)
  }

  render () {
    const {listData } = this.state
    let type = parseInt(this.props.match.params.type)
    const index = isNaN(type) ? 0 : type
    // isNaN()? 0: this.props.type
    
    return(
      <div className="product2021">
        <div className="left-bar">
            <LeftBar title="製品情報"
              listData={listData} 
              index={index} 
              onChange={this.onChange}></LeftBar>
          </div>
        {
          index == 0 && <div className={`scroll product2021-index${index}`}>
            <p className="bolder title">・ベアリングの種類</p>
            <p className="bolder">ベアリング（bearing)の“ベア(bear)”とは英語で“支える”という意味があります。まさに回転する軸を支えているのです。</p>
            <p>ベアリングは大きく分けて「転がり軸受」と「滑り<span  className="">軸受」があります。</span></p>
            <div className="imginfo">
              <div className="imgContainer">
                <div className="img">
                  <img src={img1} alt=""/>
                  <img src={img11} alt=""/>
                </div>
                <div className="img">
                  <img src={img2} alt=""/>
                  <img src={img22} alt=""/>
                </div>
              </div>
              <div className="left-info">
                <p className="margin">ここでは、転がり軸受について説明をします。状、円すい状、たる状などがあります。</p>
                <p>転がり軸受の基本構造は、“外輪”と“内輪”、その間にある“転動体”とその転動体を分離保持する“保持器”からなります。転動体には、玉ところがあります。さらに、ころには、その形状が円筒</p>
              </div>
            </div>
            <p></p>

            <div className="imginfo2">
              <img src={img3} alt=""/>
              <span className="bottom-name">転がり軸受の構造</span>
            </div>
            <p className="tableName">軸受の分類表</p>
            <Table></Table>
            <p></p>
            <p></p>
          </div>
        }
        {
          index ==1 && <div className={`scroll product2021-index${index}`} style={{flex: 1}}>
            <List type={index}></List>
          </div>
        }
        {
          index ==2 && <div className={`scroll product2021-index${index}`} style={{flex: 1}}>
            <List type={index}></List>
          </div>
        }
        {
          index ==3 && <div className={`scroll product2021-index${index}`} style={{flex: 1}}>
            <List type={index}></List>
          </div>
        }
        {
          index ==4 && <div className={`scroll product2021-index${index}`} style={{flex: 1}}>
            <List type={index}></List>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(NewProduct)