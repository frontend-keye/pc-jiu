import React from 'react'
import imgt11 from './t11.gif'
import imgt11_2 from './t11.2.png';
import './index.scss';


export default class T extends React.Component {

  t11 = (
    <>
      <div className="flex t11 showInfo-pd">
        <ul>
          <li>
            <p>長寿命</p>
            <p>当社独自のシール構造を採用し、異物の侵入とグリースもれを防止耐高温・長寿命グリースを封入して使用温度範囲を拡大。軸受の耐久性を向上</p>
          </li>
          <li>
            <p>静かな回転音</p>
            <p>部品精度をさらに高め、音品質をアップ</p>
          </li>
          <li>
            <p>低トルク</p>
            <p>シールリップを改良し、回転トルクを低減</p>
          </li>
        </ul>
        <div><img src={imgt11} alt=""/></div>
      </div>
      <div>
        <p className="title">構造</p>
        <img className="img" src={imgt11_2} />
      </div>
    </>
  )
  u11 = (
    <ul className="showInfo-pd">
      <li>
        <p>汎用モータ</p>
        <p>軸受のすきま、はめあい、潤滑条件を最適にし、音響耐久性を実現</p>
        <p>静粛さを要する電動機、各種回転機械の軸受に最適</p>
        
      </li>
      <li>
        <p>オルタネータ</p>
        <p>自動車用交流発電機のロータに使用</p>
        <p>振動、高温　環境下において長寿命を実現</p>
      </li>
      <li>
        <p>スタータ</p>
        <p>エンジンを始動させるスタータ モータのロータに使用</p>
        <p>振動、高温　環境下において長寿命を実現</p>
      </li>
      <li>
        <p>コンプレッサ</p>
        <p>気体の冷媒を圧縮し凝縮機に送るポンプで、密閉容器内に納められているモータのロータに使用</p>
        <p>冷媒中や低粘度の劣潤滑下において、長寿命を実現</p>
      </li>
      <li>
        <p>送風機</p>
        <p>各種ファンのロータに使用</p>
        <p>高速、高温の条件下においても低騒音、低振動で安定した運転を実現</p>
      </li>
      <li>
        <p>減速機</p>
        <p>各種の減速機に使用</p>
        <p>軽量、コンパクト化、高効率化に寄与</p>
      </li>
    </ul>
  )
  t12 = (
    <>
      <ul className="showInfo-pd">
        <li><p>接触角ごとに３種類の型式を用意</p></li>
        <li><p>一般的に、接触角記号AとBの保持器について、P5以上で銅合金または合成樹脂もみ抜き保持器を用いる</p></li>
        <li>
          <p>接触角記号Cは、おもにP5以上の高精度軸受</p>
          <p>合成樹脂もみ抜きまたはポリアミド保持器を用いる</p>
        </li>
      </ul>
      <div>
        <p className="title">接触角とその特性比較</p>
        <img className="img" src={require('./t121.png')} alt=""/>
      </div>
      <div>
        <p className="title">保持器（0.6級</p>
        <img  className="img" clas src={require('./t122.png')} alt=""/>
      </div>
    </>
  )
  u12 = (
    <>
      <div className="flex">
        <div>
          <img className="mr20" src={require('./u12.jpg')} alt=""/>
          <p>NACHI　高速インラインセンタ</p>
        </div>
        <ul className="showInfo-pd">
          <li>
            <p>高速精密加工用工作機</p>
            <p>（高速インラインセンタ）</p>
          </li>
          <li>
            <p>精密回転軸の支持向けなど</p>
          </li>
        </ul>
      </div>
    </>
  )
  t13 = <img className="img" src={require('./t13.png')} alt=""/>
  
  u13 = (
    <>
      <ul className="showInfo-pd">
        <li>ボールネジのサポート用軸受</li>
        <li>工作機械の主軸を支える軸受</li>
        <li>深溝玉軸受との組合せでポンプなどの回転軸</li>
        <li>ピニオン減速機などのスラスト受け用</li>
      </ul>
      <div><img className="img" src={require('./u13.png')} alt=""/></div>
    </>
  )

  t14 = (
    <>
      <ul>
        <li>アキシアル荷重やモーメント荷重の大小により、2種類の接触角を選択可能</li>
        <li>打抜き保持器を使用</li>
        <li>単列深溝玉軸受と同様に、シール（2NS）、シールド（ZZ）を取り付けたものも用意</li>
      </ul>
      <div>
        <img className="img" src={require('./t14.png')} alt=""/>
      </div>
    </>
  )

  u14 = (
    <>
      <ul className="showInfo-pd">
        <li>ブロワー</li>
        <li>高速真空ポンプ受</li>
        <li>スーパチャージャ</li>
        <li>2輪車トランスミッション</li>
      </ul>
    </>
  )

  t15 = <img className="img" src={require('./t15.png')} alt=""/>

  u15=(
    <>
      <div className="flex">
        <div className="mr20">
          <img src={require('./u15.jpg')} alt=""/>
          <p>プランマブロック</p>
        </div>
        <ul className="showInfo-pd">
          <li>
            <p>空調設備、コンベヤーなど、プランマブロック（汎用の軸受装置）と組合わせることで軸受装置を容易につくることができる</p>
          </li>
          <li>
            <p>おもに大型の軸受として</p>
          </li>
        </ul>
      </div>
    </>
  )

  t21 = (
    <>
      <div className="mb20">ラジアル負荷能力が大きく、高速回転に適する。内外輪ともに、"しめしろ"が必要な場合に有効</div>
      <div className="flex mb20">
        <div><img className="mr30" src={require('./t211.jpg')} alt=""/></div>
        <ul className="showInfo-pd">
          <li>単式スラスト玉軸受軸軌道盤とハウジング軌道盤に、玉が転がる円弧状の軌道溝を設け、1方向のアキシアル荷重を受ける</li>
          <li>ポリアミド保持器を採用し、静粛性が向上</li>
        </ul>
      </div>
      <div className="flex">
        <div><img className="mr30" src={require('./t212.jpg')} alt=""/></div>
        <ol style={{listStyleType: '1'}} className="showInfo-pd">
          <li>ラジアル荷重を受ける構造になっていない</li>
          <li>潤滑剤が飛び出すほどの高速回転に適さない</li>
          <li>
            <p>水平軸に使用する場合、軸軌道盤とハウジング軌道盤のすき間によって、玉付き保持器が軌道溝から外れないようにする</p>
            <p>保持器は軌道盤と分離するので、変形させないよう注意する</p>
          </li>
        </ol>
      </div>
    </>
  )

  u21 = (
    <>
      <div className="flex">
        <div><img width="200px" src={require('./u21.png')} alt="" className="mr30"/></div>
        <div>
          <li>クレーンのフック部、一般機械</li>
          <p className="subTitle">上手な使い方</p>
          <ol style={{listStyleType: '1'}} className="showInfo-pd">
            <li>ラジアル軸受にできるだけ近づけて使用し、軸のたわみなどの影響を避ける</li>
            <li>大きいスラスト玉軸受を横軸に使用する場合、軌道盤と転動体の間に内部すき間が生じないよう、予圧をかける</li>
            <li>軸のたわみや取り付け誤差などを避けられない場合、調心座形または調心座金付きを使用する</li>
          </ol>
        </div>
      </div>
    </>
  )

  t22 = (
    <div className="flex">
      <div className="mr30"><img src={require('./t22.gif')} alt=""/></div>
      <div>
        <ul className="showInfo-pd">
          <li>
            <p>大きいアキシアル負荷能力</p>
            <p>軸軌道盤とハウジング軌道盤に、玉が転がる円弧状の軌道溝を設けた構造</p>
          </li>
          <li>構成は、円柱状の平板に軌道溝を設けた軌道盤3組、ボール、保持器2組</li>
          <li>調心座付きは、取り付け誤差を補正可能</li>
        </ul>
        <p className="subTitle">取り扱い上の注意</p>
        <ol style={{listStyleType: '1'}} className="showInfo-pd">
          <li>スラスト玉軸受は、ラジアル荷重を受ける構造になっていない。潤滑剤が飛び出すほどの高速回転に適さない</li>
          <li>水平軸に使用する場合、軸軌道盤とハウジング軌道盤のすき間によって、玉付き保持器が軌道溝から外れないようにする</li>
          <li>保持器は、鋼板の打ち抜き形、ポリアミド・高力黄銅・軟鋼のもみ抜き形。軌道盤と分離するので、変形させないよう注意する</li>
        </ol>
      </div>
    </div>
  )
  u22 = (
    <>
      <div className="flex">
        <div className="mr30"><img src={require('./u22.gif')} alt=""/></div>
        <div>
          <li>一般機械</li>
          <p className="subTitle">上手な使い方</p>
          <ol style={{listStyleType: '1'}} className="showInfo-pd">
            <li>ラジアル軸受にできるだけ近づけて使用し、軸のたわみなどの影響を避ける</li>
            <li>大きいスラスト玉軸受を横軸に使用する場合、軌道盤と転動体の間に内部すき間が生じないよう、予圧をかける</li>
            <li>軸のたわみや取り付け誤差などを避けられない場合、調心座形または調心座金付きを使用する</li>
          </ol>
        </div>
      </div>
    </>
  )

  t23 = (
    <>
      <div className="flex">
        <div className="mr30"><img src={require('./t23.gif')} alt=""/></div>
        <div>
          <li>スラストアンギュラ玉軸受を背面組合せにし、外輪を一体にした形で、接触角を大きくした構造のスラスト玉軸受</li>
        </div>
      </div>
    </>
  )
  u23 = (
    <>
      <div className="flex">
        <div className="mr30"><img src={require('./u23.gif')} alt=""/></div>
        <div>
          <li>主として、複列円筒ころ軸受のスラスト受けとして使用する。</li>
        </div>
      </div>
    </>
  )

  t31=(
    <>
      <div className="flex">
        <div className="mr30">
          <div className="mb30">
            <img src={require('./t311.gif')} alt=""/>
          </div>
          <div>
            <img src={require('./t312.gif')} alt=""/>
          </div>
        </div>
        <div>
          <ul className="showInfo-pd">
            <li>大きな負荷容量</li>
            <li>高速回転においても低昇温</li>
            <li>低騒音</li>
            <li>高耐熱性(200℃まで)</li>
          </ul>
          <p className="subTitle">取り扱い上の注意</p>
          <ol style={{listStyleType: '1'}} className="showInfo-pd">
            <li>他の形式の軸受に比べ、"ころ"と"つば"、あるいは保持器と保持器支え金とのすべり面に潤滑剤が渡りにくいので、油潤滑で使用する</li>
          </ol>
        </div>
      </div>
    </>
  )

  u31=(
    <>
      <div className="flex">
        <div className="mr30">
            <div className="mb30">
              <img src={require('./u311.gif')} alt=""/>
              <p>射出成形機</p>
            </div>
            <div>
              <img src={require('./u312.gif')} alt=""/>
              <p>横軸タービン</p>
            </div>
          </div>
          <li>一般に射出成形機、クレーンのフックなど大型の機械に使用</li>
      </div>
    </>
  )
  
  t41 = (
    <>
      <div className="flex">
        <div className="mr30">
          <div  className="mb30">
            <img src={require('./t411.jpg')} alt=""/>
            <p>各種ベアリングユニット</p>
          </div>
          <div>
            <img src={require('./t412.jpg')} alt=""/>
            <p>シルバーシリーズ</p>
          </div>
        </div>

        <div>
          <p className="secTitle">自動調心性</p>
          <ul className="showInfo-pd">
            <li>軸受の外周面と軸受箱の内周面が球面で調心性があり、機械の軸心ずれや軸のたわみを補正</li>
          </ul>
          <p className="secTitle">完全密封型</p>
          <ul className="showInfo-pd">
            <li>鋼板製のスリンガと耐熱耐油性合成ゴムシールを組み合わせた二重シールで、ごみ、湿気などの浸入を防止</li>
          </ul>
          <p className="secTitle">取り扱いが容易</p>
          <ul className="showInfo-pd">
            <li>止めねじ、アダプタなどでユニットの軸へ簡単に取り付け。潤滑グリースを封入済みで、取り付け後、すぐに運転可能</li>
          </ul>
          <p className="secTitle">軸受と軸受箱の互換性</p>
          <ul className="showInfo-pd">
            <li>一般の軸受と同様に、必要に応じて軸受のみ交換可能</li>
          </ul>
          <p className="secTitle">豊富なシリーズ</p>
          <ul className="showInfo-pd">
            <li>鋳鉄製シリーズ</li>
            <li>プラスチックシリーズ</li>
            <li>アルミシリーズ</li>
            <li>ステンレスシリーズ</li>
            <li>シルバーシリーズ</li>
            <li>鋼板製シリーズ</li>
          </ul>
        </div>
      </div>
    </>
  )
  u41 = (
    <>
      <p className="title__">1. ユニット呼び番号の配列</p>
      <div  className="mb30"><img className="img" src={require('./u411.gif')} alt=""/></div>
      <p className="title__">2. 玉軸受の呼び番号</p>
      <div><img className="img" src={require('./u412.gif')} alt=""/></div>
      <p>(備考)　形式記号がBの玉軸受は、寸法記号を内径番号の末尾一桁のみを使用する。</p>
    </>
  )
  render () {
    const {id, type} = this.props
    return <div className="t__">
      {this[`${type}${id}`]}
    </div>
  }
}