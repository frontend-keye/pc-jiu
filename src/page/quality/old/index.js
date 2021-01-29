import React from 'react'

import './index.scss'

const QualityPage = () => {
  return <div className="quality">
    <p className="title-quality">品質に対する取り組み</p>

    <div className="top-quality">
      <p>高品質を支える体制</p>
      <p href="#1">
        <img src={require('./quality1.jpg')} />
      </p>
      <p href="#2">
        <img src={require('./quality2.jpg')} />
      </p>
      <p href="#3">
        <img src={require('./quality3.jpg')} />
      </p>
    </div>

    <a name="1" className="title1-quality">品質に対する想い</a>
    <p className="info-quality">お客様に安心頂ける製品とサービスを提供するためにゼロディフェクトを目指します。</p>
    <p className="title2-quality">品質方針</p>
    <p className="title3-quality">1.品質基本方針</p>
    <p className="info-quality">当社は、お客様の要求・要望を十分に理解し、継続的な技術革新及び品質改善に努め、高信頼性・高品質・低コストの商品と、お客様の望むサービスをタイムリーに提供することにより、顧客満足度の向上に努めます。</p>
    <p className="title3-quality">2.行動指針</p>
    <p className="info-quality">1) お客様の要求事項を十分に理解しお客様の要望に応えるべく、迅速かつ柔軟に行動すること。</p>
    <p className="info-quality">2) 全ての従業員は品質マネジメントシステムを十分に理解し、確実に実施すること。</p>
    <p className="info-quality">3) 継続的に品質マネジメントシステムの見直しを行い、改善に努めること。</p>
    <p className="info-quality">4) 継続的な人材教育により、全従業員の知識及び能力の向上に努めること。</p>
    <p className="info-quality">5) 環境及び安全を考慮した商品開発・設計・製造・販売に努めること。</p>
    <p className="info-quality">6) 関連部署によるデザインレビューを行い設計完成度を高め、潜在不良を撲滅すること。</p>


    {/* <a name="2" className="title2-quality">高度な分析・評価技術</a>
    <p className="info-quality">最先端の設備が整う環境下にて高度な分析による難課題の解決や、複合試験による実使用上の過酷な条件に対する信頼性を保証することで品質の更なる向上に努めています。 </p>



    <div className="img1">
      <img src={require('./q11.jpg')} />
      <img src={require('./q12.jpg')} />
    </div>

    <div className="img2">
      <div className="left">
        <img src={require('./q21.jpg')} />
        <span>X線CTシステム</span>
      </div>

      <div className="right">
        <img src={require('./q22.jpg')} />
        <span>走査型電子顕微鏡</span>
      </div>
    </div>

    <div className="img3">
      <div className="left">
        <img src={require('./q31.jpeg')} />
        <span>恒温槽付振動試験システム</span>
      </div>
      <div className="right">
        <img src={require('./q32.jpeg')} />
        <span>測定顕微鏡</span>
      </div>
    </div>

    <a name="3" className="title2-quality">グローバル品質マネジメントシステム</a>
    <p className="info-quality">車載機器における国際標準規格であるIATF16949を取得、ISO9001/14001と合わせた品質マネジメントシステムを構築し、世界中の要求に応える品質を実現しています。</p>
    <img className="img4" src={require('./q4.jpg')} />

    <p className="title2-quality">IGグループ各拠点のISO/IATF認証取得状況</p>
    <img className="img5" src={require('./q5.jpg')} alt=""/>
    <p className="info-quality"></p>
    <p className="info-quality"></p> */}
    
  </div>
}

export default QualityPage