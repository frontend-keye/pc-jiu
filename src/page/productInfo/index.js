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

          {
            type === '3' && 
            <Fragment>
              <div className="type3-container">
                <p className="title-type3">アンギュラ玉軸受の組合せ加工</p>
                <img src={require('./31.png')} />
                <p className="info-type3">各軸受の差幅を研磨で調整して、所定の予圧すきま、または規定のアキシアルすきまに調整します。</p>
                <p className="info-type3">組合せ： DB、DF、DTがあります(2列の場合）</p>
                <p className="info-type3">軸受：標準シリーズ79 、70 、7 2 、73形 工機シリーズBNC 、TAC、BAなど各種</p>
                <p className="info-type3">加工範囲：内径10mmから外径600mmまで</p>
                <p className="info-type3">精度：PO、P6、P5、P4、P2の各種</p>
                <p className="info-type3">すきま：普通·C3、C4およびCADなど</p>
                <p className="info-type3">予圧：L、M、H、C10およびCPDなど</p>



                <p className="title-type3">油みぞ、油穴加工</p>
                <img src={require('./32.png')} />
                <p className="info-type3">穴のあいていない軸受に特殊な工具で、油穴を加工できます。</p>
                <p className="info-type3">軸受形式：円筒ころ軸受・自動調心</p>
                <p className="info-type3">ころ軸受加工内容：油みぞ・油穴付E4 、E 5 、E 7 、W33　ノック穴付E2などNSKの基準と穴径・穴数·みぞ幅がことなる場合はその値をご指示下さい。</p>




                <p className="title-type3">特殊形状間座</p>
                <img src={require('./33.png')} />
                <p className="info-type3">間座付き組合せ加工に使用する間座には、内、外輪間座とも円筒状の標準間座の他に次のように特殊のものがあります。</p>
                <p className="info-type3 list-info-type3">グリース落下防止用(A)</p>
                <p className="info-type3 list-info-type3">オイルミスト用(B)</p>
                <p className="info-type3 list-info-type3">オイルエア用(C)</p>
                <p className="info-type3 list-info-type3">段付高速用(D)</p>
                <p className="info-type3 list-info-type3">駒付内輪間座(E)</p>
                <p className="info-type3 list-info-type3">異種番号との組合せ用(F)</p>
                <p className="info-type3">間座内径及び外径も必要により研削加工を行います。</p>


                <p className="title-type3">つば輪の製作</p>
                <img src={require('./34.png')} />
                <p className="info-type3">円筒ころ軸受のNJ形にHJのつば輪を製作して組合せ、NH形にすることができます。</p>
                <p className="info-type3">加工範囲：内径20mmから500mmまでのH J 2XX、22XX形、HJ 3XX、23XX形、HJ 4XX形および特殊寸法つば輪</p>



                <p className="title-type3">間座付組合せ加工</p>
                <img src={require('./35.png')} />
                <p className="info-type3">2個の軸受の間に間座を入れてすきまや予圧を調整する。</p>
                <p className="info-type3">軸受形式：アンギュラ玉軸受単列深溝玉軸受、円すいころ軸受、円筒自動調心ころ軸受</p>
                <p className="info-type3">加工範囲：内径10mmから外径600mm程度まで</p>
                <p className="info-type3">精度：0級、P6級、P5級、P4級およびP2級</p>
                <p className="info-type3">すきま、予圧：各種すきまから各種の予圧まで</p>


                <p className="title-type3">スラスト円筒ころ軸受・スラストワッシャーの製作</p>
                <img src={require('./36.png')} />
                <p className="info-type3">加工範囲：内径40mmから外径1200mmまで</p>
                <p className="info-type3">構造：保持器は銅合金もみ抜き</p>
                <p className="info-type3">ころ端面はR(外側)形状で高速性良</p>
                <p className="info-type3">スラストワッシャー：各種寸法のスラストワッシャーも製作します。</p>



                <p className="title-type3">NUP形への改造</p>
                <img src={require('./37.png')} />
                <p className="info-type3">標準のNJ形円筒ころ軸受の内輪を切断し、側輪を新作してNUP形に改造することが出来ます。</p>
                <p className="info-type3">加工前： N J 2XX、NJ 2 2 X X、N J 3XX、NJ 2 3 X X</p>
                <p className="info-type3">加工後： N U P 2XX、NUP 2 2 X X、N U P 3XX、NUP 2 3 X X</p>
                <p className="info-type3">加工範囲：内径20mmから500mmまで</p>
                <p className="info-type3">つば付内輪の新作もできます。</p>

              </div>
            </Fragment>
          }
        </div>
      </div>
    )
}

export default ProductInfo