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
          <div className="size-product">
            <div className="size-img">
              <img src={require('../../imgs/product-info.jpg')} alt=""/>
            </div>
            <div className="size-word">
              <p className="title-size">フランジ付インチ系ベアリング</p>
              <p className="btn-size">寸法表</p>
            </div>
          </div>

          <p className="title-productInfo">特徴</p>
          <div className="feature-productInfo">
            <img src={require('../../imgs/product-tz.png')} alt="" srcset=""/>
            { type == 1 &&       
              <div className="feature-word">
                <p>インチ系深溝ボールベアリングの外輪に「フランジ」を持たせた形式で軸方向の位置決めを容易にし、ハウジングを座ぐり穴にする必要が無いので通し穴で加工が出来るため経済的です。</p>
                <p>小型化・軽量化・薄型化を図る装置で、高速回転、低摩擦トルク、低振動･低騒音が要求される箇所に適します。</p>
              </div>
            }
            { type == 2 &&       
              <div className="feature-word">
                <p>鋳鉄製ベアリングユニットです。</p>
                <p>ピロー型ユニット　UCP203～UCP210/ピロー型ユニット　UCPA203～UCPA210/ひしフランジユニット　UCFL204～UCFL210/角フランジユニット　UCF204～UCF210/インサート軸受　UC203～UC210</p>
              </div>
            }
            { type == 3 && 
              <div className="feature-word">
                <p>軸受鋼に比べ錆・腐食に強い深溝ボールベアリングﾞで、通常仕様では-30～120℃の範囲で使用できます。</p>
                <p>内外輪の材質はSUS440Cと同等の硬さ・耐食性を有し、SUS440Cより音響性能が優れているKS440を採用しています。</p>
              </div>
            }
          </div>
          <p className="title-productInfo">主な仕様</p>
          {
            type == 1 &&
            <div className="table-productInfo">
              <p className="title-form-productInfo">
                <span>部品</span>
                <span>高炭素クロム軸受鋼</span>
                <span>ステンレス鋼</span>
              </p>
              <p>
                <span>内外輪</span>
                <span>SUJ2</span>
                <span>KS440</span>
              </p>
              <p>
                <span>玉</span>
                <span>SUJ2</span>
                <span>SUS440C</span>
              </p>
              <p>
                <span>保持器</span>
                <span>SPCC</span>
                <span>SUS304</span>
              </p>
              <p>
                <span>シールド</span>
                <span>SECC-NC</span>
                <span>SUS304</span>
              </p>
              <p>
                <span>シール</span>
                <span>NBR+SPCC-NP</span>
                <span>NBR+SPCC-NP</span>
              </p>
              <p>
                <span>標準等級</span>
                <span>A1</span>
                <span>A1</span>
              </p>
            </div>
          }

          {
            type == 2 &&
            <div className="table-productInfo">
              <p className="title-form-productInfo">
                <span>部品</span>
                <span></span>
              </p>
              <p>
                <span>轴承材质</span>
                <span>相当于SUJ2</span>
              </p>
              <p>
                <span>房屋</span>
                <span>相当于FC200</span>
              </p>
              <p>
                <span>润滑方式</span>
                <span>锂基脂</span>
              </p>
            </div>
          }

          {
            type == 3 &&
            <div className="table-productInfo">
              <p className="title-form-productInfo">
                <span>部品</span>
                <span>ステンレス鋼</span>
              </p>
              <p>
                <span>内外輪</span>
                <span>KS440</span>
              </p>
              <p>
                <span>玉</span>
                <span>SUS440C</span>
              </p>
              <p>
                <span>保持器</span>
                <span>SUS304</span>
              </p>
              <p>
                <span>シールド</span>
                <span>SUS304</span>
              </p>
              <p>
                <span>シール</span>
                <span>NBR+SPCC-NP</span>
              </p>
              <p>
                <span>標準等級</span>
                <span>P0</span>
              </p>
            </div>
          }


        <p className="title-productInfo">主な利用用途</p>
          {
            type == 1 && 
            <div className="use-productInfo">
              <div className="img-use-productInfo">
                <img src={require('../../imgs/use11.jpg')} alt=""/>
                <img src={require('../../imgs/use12.jpg')} alt=""/>
                <img src={require('../../imgs/use13.jpg')} alt=""/>
              </div>
              <p>HDD、ステッピングモーター、ファンモーター、エンコーダー、DVDスピンドル、小型モーター、ピンチローラーなど</p>
            </div>
          }
          {
            type == 3 && 
            <div className="use-productInfo">
              <div className="img-use-productInfo">
                <img src={require('../../imgs/use31.jpg')} alt=""/>
                <img src={require('../../imgs/use32.jpg')} alt=""/>
                <img src={require('../../imgs/use33.jpg')} alt=""/>
                <img src={require('../../imgs/use34.jpg')} alt=""/>
              </div>
              <p>食品加工機械、医療機器、光学機器、印刷機器、繊維機械、ポンプ、モーターなど</p>
          </div>
          }

          {
            type == 3 &&
            <Fragment >
              <p className="title-productInfo">使用上の注意事項</p>
              <div className="tip-productInfo">
                <p>1. 内外輪、玉に使用しているKS440、SUS440Cのステンレス鋼には磁性があります。</p>
                <p>2. 使用条件・環境によって錆が発生する場合があります。</p>
              </div>
            </Fragment>
          }
        </div>
      </div>
    )
}

export default ProductInfo