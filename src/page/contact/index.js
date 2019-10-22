import React, { Component } from 'react';
import './index.scss'
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="contact">
        <p className="title-contact">予約状況</p>
        <p className="tip-contact">↑をクリックすると予約表をご確認いただけます。</p>

        {/* <p>入力内容に不備があります。確認してもう一度送信してください。</p> */}

        <p className="from-title">お問い合わせ・ご来店予約フォーム</p>

        <div className="form-contact">
          <p>
            <span>お問い合わせの種類 <span className="required">(必須)</span></span>
            <span>
              <select name="" id="">
                <option value="キャストや加工内容のお問い合わせ">キャストや加工内容のお問い合わせ</option>
                <option value="ご来店による打ち合わせのご予約(デジタル加工)">ご来店による打ち合わせのご予約(デジタル加工)</option>
                <option value="ご来店による打ち合わせのご予約(その他)">ご来店による打ち合わせのご予約(その他)</option>
              </select>
            </span>
          </p>

          <p>
            <span>ご担当者 <span className="required">(必須)</span></span>
            <span>
              <input type="text"/>
            </span>
          </p>

          <p>
            <span>フリガナ <span className="required">(必須)</span></span>
            <span>
              <input type="text"/>
            </span>
          </p>
          <p>
            <span>貴社名</span>
            <span>
              <input type="text"/>
            </span>
          </p>

          <p>
            <span>お電話番号(携帯可) <span className="required">(必須)</span></span>
            <span>
              <input type="text"/>
            </span>
          </p>

          <p>
            <span>携帯番号</span>
            <span>
              <div>郵便番号: <input className="short-input" type="text"/></div>
              <div>郵便番号で自動補完します。</div>
              <input type="text"/>
            </span>
          </p>
          <p>
            <span>E-MAIL (必須) <span className="required">(必須)</span></span>
            <span>
              <input type="text"/>
            </span>
          </p>

          <p>
            <span>参考ファイル</span>
            <span>
              <div>ファイルの添付にはアップローダーをご使用ください。</div>
              <textarea ></textarea>
            </span>
          </p>

          <p>
            <span>お問い合わせ内容(600文字以内) <span  className="required">(必須)</span>打ち合わせご予約の場合希望日時を記入してください。打ち合わせ時間は30分程度を予定しています。</span>
            <span><textarea ></textarea></span>
          </p>
          <p>
            <span>見積依頼</span>
            <span className="radio-container">
              <input type="radio" value="なし" name="test1"/>なし
              <input type="radio" value="あり" name="test1"/>あり
            </span>
          </p>
        </div>

        <div className="btn">
          <button>送信</button>
        </div>
      </div>
    );
  }
}
 
export default Contact;