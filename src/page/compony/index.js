import React, { Component } from 'react';
import classnames from 'classnames'
import './index.scss'
class Compony extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      index: 0,
      listData: [{
        title: '企業理念'
      }, {
        title: '会社概要'
      }, {
        title: '調達方'
      }, {
        title: 'CSR: 企業行動憲章'
      }]
    }
  }
  activeClick = (index) => {
    if (this.setState.index !== index) {
      this.setState({index})
    }
  }
  render() { 
    const {listData, index} = this.state
    return ( 
      <div className="compony">
        <div className="left-bar">
          <p className="title-bar">企業情報</p>
          {
            listData.map((t, i) => {
            return <p onClick={this.activeClick.bind(this, i)} key={i} className={classnames({"active-left-componey": i === index})}>{t.title}</p>
            })
          }
        </div>
        <div className="right-compony">
          {
            index === 0 &&
            <div className="index0">
              <p className="main-title-compony">ご挨拶</p>
              <p className="main-info-compony">私たちは、1963年の創業から、"つくること"のエキスパートとして妥協無き歩みを続けてきました。</p>

              <p className="main-info-compony">そして、技術革新がめまぐるしく進歩するなか、未知の課題に対しても途絶えることなき無限の挑戦を重ねることで、私たちのポテンシャルはより大きく成長しています。</p>
              <p className="main-info-compony">このようなあくなき精神は、常に私たち社員一人一人が育て共鳴するものであり、私たちジェイオート精工にとっても必要不可欠な財産となって引き継がれるものです。</p>
              <p className="main-info-compony">ジェイオート精工は、超精密部品メーカーとして様々なニーズに応えるべく、設計から量産までの一貫生産体制を実現し、さらには現代から未来へ訴求する独自製品の企画開発を積極的に推し進めることで、多様なスキルと広大なリソースを保持し、企業体としての飛躍を遂げてきました。</p>
              <p className="main-info-compony">これからも次世代に向けた開発への投資をはじめ、グローバルレベルでの技術提案など、常にお客様へ価値を提供するメーカーとしての確固たる存在感を打ち出せるものと確信をしています。</p>
              <p className="main-info-compony">ジェイオート精工は、全社一丸となって未来創造へのクリエイティブマインドを絶やさず、その尖端性を極めることで、社会そしてステークホルダーの皆様への貢献と成果に繋げてまいります。</p>
              <p className="main-info-compony"></p>
              <p className="name-componey">社长名字 棚橋　賢人</p>


              <p className="main-title-compony">企業理念</p>
              <p className="main-info-compony">私たちはお客様第一主義に徹し、信頼ある技術・商品・サービスで、社会生活の改善と向上に努め、人と地球の豊かな未来を創造し続けます。</p>
              <img src={require('./company_img01.jpg')} />

              <p className="main-title-compony">行動指針"Igarashi Way"</p>
              <p className="main-info-compony">今までIgarashiグループとして大切にしてきたもの、そしてこれから大切にしていくべきものを抽出し、五つのキーワードに落とし込んだものが“Igarashi Way”です。この“Igarashi Way”をグローバル共通の行動指針とし、今後のIgarashiグループの更なる発展を実現させます。</p>
              <p className="main-info-compony">"Igarashi Way" 五つのキーワード</p>
              <p className="main-info-compony">
                <a className="subtitle-info-compony">Commitment (約束)</a>
                Igarashiグループの一員であることを強く自覚し、顧客や市場からどう見られるか、どのような価値を生み出しているかという視点を常に持ち、それにふさわしい行動をとる
              </p>
              <p className="main-info-compony">
                <a className="subtitle-info-compony">Improvement (改善)</a>
                現状に満足せず、どんな場面においても自分自身、ひいては製品やサービスを向上させる努力を欠かさない
              </p>
              <p className="main-info-compony">
                <a className="subtitle-info-compony">Proactivity (前進)</a>
                受け身ではなく、主体性を持った動きを心がけ、何事も“自分起点”で動かす意識を持って行動する
              </p>
              <p className="main-info-compony">
                <a className="subtitle-info-compony">Communication (会話)</a>
                社内外を問わず、対話を基本としたタイムリーで明確かつ信頼性の高いコミュニケーションを取り、意思疎通を図る
              </p>
              <p className="main-info-compony">
                <a className="subtitle-info-compony">Cooperation (連携)</a>
                顧客に対してベストな製品やサービスを提供するために、“One Igarashi”として、部門や拠点の垣根を超えて有益な情報やナレッジを共有し、全体最適に向けて協力をする
              </p>
              <p className="main-info-compony">“Igarashi Way”ビジュアル</p>
              <p className="main-info-compony">従業員満足（ＥＳ）及び顧客満足（ＣＳ）に向かい、５つのキーワードのもと、製造業として技術力を向上させながら未来に向かって前進するIgarashiグループのあるべき姿の象徴として描かれています。</p>
              {/* <p className="main-info-compony"></p> */}
            </div>
          }
          {
            index === 1 &&
            <div className="index2">
              <div className="info-table-componey">
                <div className="item-tabel-componey">
                  <div className="left-table-componey">会社名</div>
                  <div className="right-table-componey">シナノケンシ株式会社</div>
                </div>

                <div className="item-tabel-componey">
                  <div className="left-table-componey">プロフィール</div>
                  <div className="right-table-componey">
                    
                    <div className="item-table-componey">

                    </div>
                  </div>
                </div>
                <div className="item-tabel-componey">
                  <div className="left-table-componey"></div>
                  <div className="right-table-componey"></div>
                </div>
              </div>
            </div>
          }
          {
            index === 2 &&
            <div className="index2">
              <p  className="main-info-compony">当社は精密かつ完璧なものづくりを通じて社会に貢献することを企業理念としています。この理念を実現するために、当社がお客様から信頼される製品をつくること、またあらゆる事業を行ううえでの社会的責任を果たすために、法律を守り、安定した供給体制をつくり、継続的な原価低減ができる取引先様との協業関係を深める活動が不可欠であることから以下を当社の調達方針としています。</p>

              <p className="main-title-compony">1. 公平・公正な取引</p>
              <p  className="main-info-compony">国籍、企業規模、取引実績の有無を問わず、すべての企業様に対し公平に機会を設け、品質・納期・コスト・技術力・環境保全・健全な事業運営・法令や社会規範の遵守といった合理的な基準に基づいて、取引先様を公正に評価・選定します。</p>

              <p className="main-title-compony">2. 継続的なパートナーシップ</p>
              <p  className="main-info-compony">国内外の取引先様とのパートナーシップを深め、相互協力・信頼関係を構築し、取引を通じて共に成長・発展することができる関係を築きます。</p>

              <p className="main-title-compony">3. 環境への配慮</p>
              <p  className="main-info-compony">当社の「環境方針」に基づき、環境負荷の少ない部材を調達するなど、環境保全に配慮した調達活動を推進します。</p>

              <p className="main-title-compony">4. 法令・社会規範の遵守</p>
              <p  className="main-info-compony">「第一精工グループ企業行動憲章」に基づき、関連する法令や社会規範を遵守し、取引先様との信頼関係の構築に努めます。</p>
              <p  className="main-info-compony">また、調達活動で得た取引先様の情報については、適切に保護・管理します。</p>

              {/* <p className="main-title-compony"></p>
              <p  className="main-info-compony"></p>

              <p className="main-title-compony"></p>
              <p  className="main-info-compony"></p> */}
            </div>
          }

          {
            index === 3 &&
            <div className="index2">
              <p  className="main-info-compony">第一精工グループの「サプライヤー行動規範＆責任基準」については、こちら（PDF：997KB）をご覧ください。</p>
              <p className="main-title-compony">第一精工グループ企業行動憲章</p>
              <p  className="main-info-compony">第一精工グループは、「精密かつ完璧なものづくりにこだわる」という経営理念のもと、 広く社会から有用で成長を期待される企業を目指します。そのためには、関係法令の遵守はもちろんのこと常に社会的良識を持って行動し、あらゆるステークホルダーの信頼を得られるように公正で誠実な企業活動に取組みます。</p>

              <p  className="main-info-compony">
                <span className="subtitle-info-compony">1．お客さまの満足</span>
                第一精工グループは、真にお客さまが求める製品・サービスを、安全と品質に十分配慮して開発・提供し、お客さまの満足と信頼の向上に努めます。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">2．新しい技術への挑戦</span>
                第一精工グループは、独創的な技術開発に挑戦し、積極的に新製品と新事業領域の開拓を行います。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">3．公正な企業活動</span>
                第一精工グループは、法令その他の社会的規範を遵守し、公正で誠実な企業活動を行います。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">4．リスク管理</span>
                第一精工グループは、会社に重大な影響を及ぼすような発生リスクの把握と対応のみならず、リスクヘッジや発生した場合の損失を最小限にするための対策を立て管理します。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">5．情報開示</span>
                第一精工グループは、正確で十分な企業情報を適時・適切に開示し、企業活動の透明性を高めます。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">6．環境との調和</span>
                第一精工グループは、環境問題に積極的に取り組み、「地球にやさしい企業活動」を推進します。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">7．地域社会との調和</span>
                第一精工グループは、「良き企業市民」として、積極的に社会貢献活動を行います。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">8．人権の尊重</span>
                第一精工グループは、従業員一人ひとりの人権と個性を尊重し、その能力を十分に発揮できる安全で働きやすい職場環境を実現します。そしてあらゆる企業活動においても人権、自主的な労働を尊重し、不当な差別、人身売買、強制労働を排除します。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">9．知的財産・個人情報の管理</span>
                第一精工グループは、知的財産や個人情報の価値を認識し、適正な管理を実行します。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">10．国際社会との協調</span>
                第一精工グループは、国際ルールや各国法令の遵守はもとより、その文化や習慣を尊重し、国際社会と協調した企業活動を行います。
              </p>
              <p  className="main-info-compony">
                <span className="subtitle-info-compony">11．紛争鉱物</span>
                事業活動において、紛争地域の武装勢力の資金源となるような紛争鉱物の使用を可能な限り排除し、紛争地域の善良な住民の人権を尊重します。
              </p>

              <p className="name-componey">2019年（令和元年）10月1日改訂</p>
              <p className="name-componey">ジェイオート精工株式会社</p>
              <p className="name-componey">代表取締役社長　棚橋　賢人</p>
              {/* <p  className="main-info-compony">
                <span className="subtitle-info-compony"></span>
              </p>

              <p className="main-title-compony"></p>
              <p  className="main-info-compony"></p> */}
            </div>
          }
        </div>
      </div>
    );
  }
}
 
export default Compony;