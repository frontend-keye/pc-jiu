import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

import './index.scss'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      unit: 'mm'
    }
  }
  radioChange = (e) => {
    this.setState({unit: e.target.value || 'inch' })
  }
  render() { 
    const {unit} = this.state
    return ( 
      <div className="product-search-page">
        <div className="banner-product">
          <img src={require('../../imgs/bg-product.jpg')} alt="" srcset=""/>
        </div>
        <section>
          <div className="h3-product-search">呼び番号・仕様で探す</div>
          <p className="sub-title-proSer">呼び番号・寸法等の仕様によるベアリング各製品の検索が可能です（半角英数字で入力してください）。</p>

          <div className="form-product-search">
            <div className="header-product-search">
              <span>1. 呼び番号</span>
              <span><input type="text"/> <span>を含む</span></span>
            </div>

            <div className="content-form-productSearch">
              <p className="tip-title">2. 仕様</p>

              <p className="item-form-product margin-bottom-5">
                <span>表示単位</span>
                <span>
                  <label ><input
                    onChange={this.radioChange} type="radio" value="mm" checked={unit == 'mm'} /> mm</label>
                  <label>
                    <input onChange={this.radioChange} type="radio" value="inch"  checked={unit == 'inch'}/> inch</label>
                </span>
              </p>
              <p className="item-form-product border-none-bottom">
                <span>内径</span>
                <span>
                  最小<input type="number"/> ~ 
                  最大<input type="number"/> {unit}
                </span>
              </p>
              <p className="item-form-product border-none-bottom">
                <span>外径</span>
                <span>
                  最小<input type="number"/> ~ 
                  最大<input type="number"/> {unit}
                </span>
              </p>
              <p className="item-form-product">
                <span>幅</span>
                <span>
                  最小<input type="number"/> ~ 
                  最大<input type="number"/> {unit}
                </span>
              </p>

              <p className="errTip">※幅は外輪幅で検索されます。</p>
              <p className="item-form-product  border-none-bottom">
                <span>材質</span>
                <span>
                  <input type="checkbox"/> SUJ2
                  <input type="checkbox"/> ステンレス
                </span>
              </p>
              <p className="item-form-product  border-none-bottom">
                <span>材質</span>
                <span>
                  <input type="checkbox"/> ZZ, ZZS
                  <input type="checkbox"/> 2RS
                  <input type="checkbox"/> 2RU
                  <input type="checkbox"/> TTS
                  <input type="checkbox"/> 開放形
                </span>
              </p>
              <p className="item-form-product">
                <span>材質</span>
                <span>
                  <input type="checkbox"/> なし
                  <input type="checkbox"/> あり
                </span>
              </p>              

              <p className="errTip">※【材質】【密封形式】【フランジ】は必ず1つ以上選択してください。</p>
            </div>

          </div>
        
          <p className="errTip">※1、2の条件を同時に指定した場合はAND検索となります。</p>

          <p className="tip-ps">セラミック玉タイプなどの特殊製品をお探しの方はこちらをご覧の上、お手数ですが別途お問い合わせください。スラストベアリングの製品リストはこちらをご覧ください。</p>

          <p className="center-errTip">【材質】【密封形式】【フランジ】は必ず1つ以上選択してください。</p>

          <button className="search-btn">検索</button>
        </section>
        </div>
    );
  }
}
 
export default Product;