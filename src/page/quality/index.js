import React from 'react';
import LeftBar from '../../components/leftBar';
import classnames from 'classnames'
import './index.scss';

import banner0 from './img/banner0.png';
import banner1 from './img/banner1.png';
import banner2 from './img/banner2.png';

import title1 from './img/title1.png';
import title2 from './img/title2.png';
import title3 from './img/title3.png';

import i1_1 from './img/1_1.jpg'
import i1_21 from './img/1_21.jpg'
import i1_22 from './img/1_22.jpg'
import i2_1 from './img/2_1.jpg'
import i2_2 from './img/2_2.jpg'
import i3_1 from './img/3_1.jpg'
import i3_2 from './img/3_2.jpg'

import t1 from './img/t1.png'
import t2 from './img/t2.png'

import q0 from './img/q0.jpg'
import q1 from './img/q1.jpg'
import q2 from './img/q2.jpg'
import q31 from './img/q31.jpg'
import q32 from './img/q32.jpg'
import q33 from './img/q33.jpg'
import q34 from './img/q34.jpg'
import q4 from './img/q4.jpg'

export default class Quality extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      index: 0,
      listData: [{
        title: 'ベアリング'
      }, {
        title: '技術'
      }, {
        title: '品質'
      }]
    }
  } 
  onChange = (index) => {
    this.setState({index})
  }
  render () {
    const {listData, index = 0} = this.state
    return <div class="qualitynew">
      <div>
        <LeftBar title="品質管理"
          listData={listData} 
          index={index}
          onChange={this.onChange}></LeftBar>
      </div>
      <div>
        {index == 0 && <div className={`index index${index}`}>
          <img width="800" src={banner0} />
          <div className="mb40">
            <img className="mb30"  src={title1} />

            <div className="flex mb20">
              <p>ピラミッドの建設のために、石を運ぶ姿を描いた古代エジプトの絵画には、石の下にころを置き、引いて運んでいるものがあります。これこそが、ベアリングの原点です。今から何千年も前の古代に、重いものを軽く運ぶための知恵として、すでに実用化されていたのです。</p>
              <img src={i1_1} alt=""/>
            </div>
            <div  className="flex">
              <img src={i1_21} alt=""/>
              <img src={i1_22} alt=""/>
              <p>現代のベアリングの基本的な原理・構造は、中世産業革命の時代に形作られました。考案したのは、ルネッサンス期の芸術家・レオナルド・ダ・ヴィンチ。彼は、今あるものとほぼ同じ構造と言えるベアリングのデッサン図を描き残しています。</p>
            </div>
          </div>
          <div>
            <img className="mb30" src={title2} />
            <div className="flex">
              <div>
                <p>ベアリング（bearing)の「ベア(bear)」とは英語で「支える」という意味があります。その言葉通り、回転する軸を支える役割を果たすのがベアリングなのです。大きく分けて、「転がり軸受」と「滑り軸受」がありますが、「転がり軸受」の方が一般的と言えます。</p>
                <p>転がり軸受の基本構造は、「外輪」と「内輪」、その間にある「転動体」、さらにその転動体を分離する「保持器」からなります。転動体には、玉ところがあります。さらにころには、その形状が円筒状のころ、円錐状のころ、球面状のころなどがあります。</p>
                <p>軸の回転に合わせて転動体も回転することで、摩擦抵抗を極めて小さく抑えることができるため、多くの機械に見られる回転軸の支持部分には、ベアリングが用いられているのです。</p>
              </div>
              <div>
                <img src={i2_1} alt=""/>
                <img src={i2_2} alt=""/>
              </div>
            </div>
          </div>
          <div className="mb30">
            <img className="mb30"  src={title3} />
            <div className="flex">
              <img className="mr10" src={i2_1} alt=""/>
              <img className="mr10" src={i2_2} alt=""/>
              <div>
                <p>「産業の米」と呼ばれるベアリング。回転する軸を持つ機械には、ほぼ必ずベアリングが用いられていると言っても過言ではありません。今や自動車をはじめ、産業機械、家電製品、情報機器、ロボットに至るまで、社会を支えるさまざまな機械において、欠かせないキーパーツとして活躍しています。あなたが気づかない身近なところで、実はしっかり社会をまわしている、それがベアリングなのです。</p>
              </div>
            </div>
          </div>


        </div>}

        {index == 1 && <div className={`index index${index}`}>
          <img width="800" src={banner1} />
          <div className="flex box">
            <div>
              <p className="title">優れた研磨加工技術</p>
              <p>ダイベアは、ベアリング製作の肝と言える研磨加工技術において、各製品で求められるミクロン単位の精度を実現する、国内トップレベルの技術を誇ります。あらゆるモノの小型・軽量化が進むにつれ、ますます上がっていく要求品質に対し、長年培われた確かな技術力で応えています。</p>
            </div>
            <img src={t1} alt=""/>
          </div>

          <div  className="flex box">
            <img src={t2} alt=""/>
            <div>
              <p className="title">優れた研磨加工技術</p>
              <p>ダイベアは、ベアリング製作の肝と言える研磨加工技術において、各製品で求められるミクロン単位の精度を実現する、国内トップレベルの技術を誇ります。あらゆるモノの小型・軽量化が進むにつれ、ますます上がっていく要求品質に対し、長年培われた確かな技術力で応えています。</p>
            </div>
          </div>

          <div  className="flex box">
            <div>
              <p className="title">超薄肉ベアリング加工技術</p>
              <p>ダイベアの技術力の高さを証明する製品が、超薄肉ベアリングです。これは、熱処理時の歪低減、研削加工時の真円度向上等にクラフトマンの技を注ぎ、最先端の生産技術力を投入して、従来の薄肉ベアリングに比べ厚みを約半分の3mmにした製品。主にオフィス向け複写機の定着ローラなどに使用され、機械の小型・軽量化が進む中、需要がますます増えることが予想されます。また昨今、自動車用においても省エネの観点から小型・軽量化が重視される中、需要の拡大が期待されるダイベアの主力製品の一つです。</p>
            </div>
            <img src={t1} alt=""/>
          </div>

          <div  className="flex box">
            <img src={t2} alt=""/>
            <div>
              <p className="title">国際競争に勝つための研究開発</p>
              <p>ベアリング業界においても、国際競争が激化しています。国内生産にこだわるダイベアにとっては、「品質・性能」と「低コスト」を高いレベルで両立させることが、研究開発の重要なテーマになっています。こうした課題を解決するために、設計・試作・評価体制の充実を図り、将来思考の製品・生産技術開発の実現を目指しています。</p>
            </div>
          </div>
        </div>}
        
        {index == 2 && <div className={`index index${index}`}>
          <img width="800" src={banner2} />

          <div className="position-relative top" >
            <div className="img position-absolute" >
              <img src={q0} alt=""/>
            </div>
            <div className="bord10 position-absolute">
              <p className="title">品質マネジメントシステム</p>
              <p>ダイベアのベアリングは、耐久性、高性能性、長寿命性といった多様化、高度化するユーザーニーズに対応できる品質を保証しています。それを実現するのが徹底した品質マネジメントシステムです。全プロセスにおいて実施しているクオリティゲート、量産における工程管理、生産ラインに検査機器を投入した検査工程、自発的に行うQCサークルなどを通した品質マネジメントシステムによって、常にお客さまに満足していただける製品を生み出しています。</p>
            </div>
          </div>

          <div className="bord10 flex">
            <div>
              <p className="title">01 クオリティゲート</p>
              <p>徹底した品質管理を実現するため、「DQ（DAIBEA QUALITY） GATE20」を導入しています。DQ　GATE20では、新製品の初期検討段階から設計、量産に至る全プロセスにおいて、全部で20に及ぶ関所（クオリティゲート）を設置。各段階での品質を厳しく審査しています。</p>
            </div>
            <img src={q1} alt=""/>
          </div>

          <div className="bord10 flex">
            <div>
              <p className="title">02 工程管理</p>
              <p>DQ　GATE20の中でも、量産においては特に厳しい「工程管理」を実施しています。各工程の出口にあたるところに関所を設け、製品の精度測定や製造機械の条件管理などを行うことで、求める品質をクリアしたものしか後工程に流すことができない仕組みになっています。</p>
            </div>
            <img src={q2} alt=""/>
          </div>

          <div className="bord10">
            <div className="mb20">
              <p className="title">03 検査工程</p>
              <p>多機能検査機や表面形状測定機、真円度形状測定機、三次元座標測定機など、製品を調査・解析するための高精度の精密測定機を備え、日夜さらなる品質向上に努めています。</p>
            </div>
            <div className="flex">
              <div>
                <img src={q31} alt=""/>
                <p>多機能検査機</p>
              </div>
              <div>
                <img src={q32} alt=""/>
                <p>表面形状測定機</p>
              </div>
              <div>
                <img src={q33} alt=""/>
                <p>真円度形状測定機</p>
              </div>
              <div>
                <img src={q34} alt=""/>
                <p>三次元座標測定機</p>
              </div>
            </div>
            
          </div>

          <div className="bord10 flex">
            <div>
              <p className="title">04 QCサークル</p>
              <p>職場の担当グループ単位で、QCサークルによる品質管理・向上活動に取り組んでいます。役職や年齢に関係なく、改善の意欲をもって積極的に意見を交わすことにより、さらに高いレベルでの品質の作り込みを目指しています。</p>
            </div>
            <img src={q4} alt=""/>
          </div>
          
        </div>}
      </div>
    </div>
  }
}