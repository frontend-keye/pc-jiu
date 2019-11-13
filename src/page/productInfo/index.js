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
              <div className="imgInfo">
                <img src={require('./youzuo1.jpg')} />
                <div className="imgInfoRight">
                  <p>鋳鉄製ベアリングユニットです。</p>
                  <div className="table-product">
                    <div className="left-table-product">ラインアップ</div>
                    <ul className="right-table-product">
                      <li>ピロー型ユニット　UCP203～UCP210</li>
                      <li>ピロー型ユニット　UCPA203～UCPA210</li>
                      <li>ひしフランジユニット　UCFL204～UCFL210</li>
                      <li>角フランジユニット　UCF204～UCF210</li>
                      <li>インサート軸受　UC203～UC210</li>
                    </ul>
                  </div>
                </div>
              </div>
            
              <div className="twoInfo-product">
                <p className="title-twoInfo">標準仕様</p>
                <div className="twoInfoTable-product">
                  <div className="left">標準仕様</div>
                  <div className="center">
                    <span>軸受材質</span>
                    <span>ハウジング</span>
                    <span>潤滑</span>
                  </div>
                  <div className="right">
                    <span>SUJ2相当</span>
                    <span>FC200相当</span>
                    <span>リチウム系グリース</span>
                  </div>
                </div>
              </div>
            </Fragment>
          }
          {
            type === '2' && 
            <Fragment>
              <p className="name-productInfo">ステンレスベアリング　深溝玉軸受（両シールド）タイプ</p>
              <div className="imgInfo">
                <img src={require('./buxiugang.jpg')} />
                <div className="imgInfoRight">
                  <p>全てがステンレス製の深溝玉軸受です。
                    <br />両シールドタイプ・ゴムシールタイプを標準在庫しております。
                    <br />錆・腐食に強く、食品機械・洗浄装置・化学装置・その他高温多湿環境
                    <br />で使用される装置にお勧めします。
                  </p>
                  <div className="table-product">
                    <div className="left-table-product">ラインアップ</div>
                    <ul className="right-table-product">
                      <li>SS604ZZ～</li>
                      <li>SS6800ZZ～SS6805ZZ</li>
                      <li>SS6900ZZ～SS6905ZZ</li>
                      <li>SS6000ZZ～SS6005ZZ</li>
                      <li>SS6200ZZ～SS6205ZZ</li>
                      <li>SS6300ZZ～SS6305ZZ</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="twoInfo-product">
                <p className="title-twoInfo">標準仕様</p>
                <div className="twoInfoTable-product reset-bottom-batle">
                  <div className="center">
                    <span>精度等級</span>
                    <span>すきま</span>
                  </div>
                  <div className="right">
                    <span>JIS 0級</span>
                    <span>普通すきま</span>
                  </div>
                </div>
                <div className="twoInfoTable-product reset-top-batle">
                  <div className="left">
                  標準仕様
                  </div>
                  <div className="center">
                    <span>内外輪</span>
                    <span>ボール</span>
                    <span>保持器</span>
                    <span>シールド / シール</span>
                    <span>潤滑</span>
                  </div>
                  <div className="right">
                    <span>SUS440C相当</span>
                    <span>SUS440C相当</span>
                    <span>SUS304相当</span>
                    <span>シールド　SUS304相当</span>
                    <span>リチウム系グリース</span>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        </div>
      </div>
    )
}

export default ProductInfo