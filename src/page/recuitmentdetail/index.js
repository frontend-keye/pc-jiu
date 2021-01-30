import React, {useEffect, Fragment} from 'react'
import './index.scss'


const RecuitmentDetail = (props) => {
  return (
    <div className="recuitmentDetail">
        <p className="recuitment-h">
          <h5>募集要項</h5>
        </p>

        <div className="section-recDet center">
        {
        props.type == 0 && 
        <Fragment>
          <p className="sub-title "> <span className="icon">-</span> 新卒採用</p>

          <p className="minititle">【募集要項】</p>

          <p className="minititle">【　エントリー方法　】</p>

          <div className="table-recDetail">
            <div className="item-table">
              <span className="header">応募資格</span>
              <span className="content-table">2021年3月に大学及び大学院を卒業（修了）見込の方</span>
            </div>
            <div className="item-table">
              <span className="header">勤務地</span>
              <span className="content-table">本社埼玉県鶴ヶ島市脚折1646</span>
            </div>
            <div className="item-table">
              <span className="header">勤務時間</span>
              <span className="content-table">8：30～17：30（実働8時間）</span>
            </div>
            <div className="item-table">
              <span className="header">初任給</span>
              <span className="content-table">・学部卒　200,000円　　　・修士了　210,000円</span>
            </div>
            <div className="item-table">
              <span className="header">昇給・賞与</span>
              <span className="content-table">昇給　年1回　　賞与　年2回 （賞与は業績に応じて支給されます）</span>
            </div>
            <div className="item-table">
              <span className="header">手当</span>
              <span className="content-table">通勤手当、残業手当、家族手当</span>
            </div>
            <div className="item-table">
              <span className="header">休日・休暇（本社勤務時）</span>
              <span className="content-table">年間休日120日;完全週休2日制、年末年始休暇、夏季休暇、慶弔休暇、産育休、介護休;有給休暇　初年度10日　最高20日</span>
            </div>
            <div className="item-table">
              <span className="header">福利厚生</span>
              <span className="content-table">健康保険、厚生年金保険、雇用保険、労災保険、退職金制度あり</span>
            </div>
          </div>
          
        </Fragment>
      }
      {
        props.type == 1 && 
        <>
          <p className="sub-title "> <span className="icon">-</span> キャリア採用</p>
          <p className="minititle">【募集要項】</p>

          <div className="table-recDetail">
            <div className="item-table">
              <span className="header">募集職種</span>
              <span className="content-table">機械設計者</span>
            </div>

            <div className="item-table">
              <span className="header">応募資格</span>
              <span className="content-table">・モーターの設計・開発の経験が５年以上ある方<br/>--英語力があれば尚可--</span>
            </div>
            <div className="item-table">
              <span className="header">勤務地</span>
              <span className="content-table">ジェイオート精工株式会社</span>
            </div>
            <div className="item-table">
              <span className="header">勤務時間</span>
              <span className="content-table">8：30～17：30（実働8時間）・・・本社勤務時</span>
            </div>
            <div className="item-table">
              <span className="header">初任給</span>
              <span className="content-table">当社規定により、経験・年齢・能力に応じ決定いたします。</span>
            </div>
            <div className="item-table">
              <span className="header">昇給・賞与</span>
              <span className="content-table">昇給　年1回　　賞与　年2回 （賞与は業績に応じて支給されます）</span>
            </div>
            <div className="item-table">
              <span className="header">手当</span>
              <span className="content-table">役職手当、通勤手当、残業手当、家族手当</span>
            </div>
            <div className="item-table">
              <span className="header">休日・休暇（本社勤務時）</span>
              <span className="content-table">年間休日120日;完全週休2日制、年末年始休暇、夏季休暇、慶弔休暇、産育休、介護休;有給休暇　初年度10日　最高20日</span>
            </div>
            <div className="item-table">
              <span className="header">福利厚生</span>
              <span className="content-table">健康保険、厚生年金保険、雇用保険、労災保険、退職金制度あり</span>
            </div>
            <div className="item-table">
              <span className="header">その他</span>
              <span className="content-table">中国での勤務を希望される方は下記採用窓口にご相談ください。</span>
            </div>
          </div>

        </>
      }
          

          <p className="minititle">【　エントリー方法　】</p>

          <p className="tip-title-recDetail">下記採用窓口に事前連絡の上、履歴書、職務経歴書をご提出ください。</p>
          <p className="tip-recDetail">
            <span className="label">採用窓口</span>：
            <span className="content">ジェイオート精工株式会社</span>
          </p>
          <p className="tip-recDetail">
            <span className="label">採用担当</span>：
            <span className="content">経営管理グループ　人事チーム　宮田、石丸、佐々木</span>
          </p>
          <p className="tip-recDetail">
            <span className="label">E-Mail</span>：
            <span className="content">jinji@jaut.com</span>
          </p>
          <p className="tip-recDetail">
            <span className="label">電話番号</span>：
            <span className="content">080-7810-6483</span>
          </p>
        </div>
    </div>
  )
}


export default RecuitmentDetail