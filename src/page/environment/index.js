import React, { Component } from 'react';
import './index.scss'
class Environment extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="environment">
        <div className="banner-envi">
          <img src={require('../../imgs/environment.jpg')} alt="" srcset=""/>
        </div>
        <section>
          <p className="title-envi"></p>
          <ol>
            <li>地球規模での環境保護が企業の重要な使命の一つであることを深く認識し、当社のあらゆる事業活動・軸受、軸受関連製品及び機械部品、設備等の販売及びサービスにおいて、自主的かつ積極的に地球環境保全活動を推進する。</li>
            <li>事業活動と環境を調和させるために環境管理システムを確立し、継続的に改善する。</li>
            <li>事業活動に関連する環境法令、条例、協定及びその他の要求事項を遵守し、積極的に汚染の予防に努める。</li>
            <li>地球環境保全上の技術的ニーズを的確に把握し、これらに対応する商品を顧客に提供することで世界の省エネルギー・省資源化に貢献する。</li>
            <li>
              全社員の環境意識を高め、事業活動・製品およびサービスに関する、環境管理重点テーマとして次の項目に取組む。
              <p>①環境配慮型商品の提案型営業活動の展開</p>
              <p>②顧客への製品に対する情報提供</p>
              <p>③廃棄物の削減</p>
              <p>④電力等、消費エネルギーの削減</p>
              <p>⑤コピー用紙等の使用量の削減</p>
            </li>
            <li>環境保全体制の整備と環境保全活動の目的と目標を定め、定期的なレビューを行う。</li>
            <li>各事業場の立地条件を認識し、関係諸官庁・地域住民とのコミュニケーションを図り、地域社会の環境改善に協力する。</li>
            <li>の環境方針は全従業員に周知徹底すると共に、一般にも公開する。</li>
          </ol>
        </section>
      </div>
    );
  }
}
 
export default Environment;