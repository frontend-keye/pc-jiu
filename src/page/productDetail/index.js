import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import classnames from 'classnames'
import data from '../product/data/data'
import T from './detail/t';


import './index.scss';


export default class Detail extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      index: 0,
    }
  }
  tabChang = (index) => {
    this.setState({index})
  }

  render() {
    const id = this.props.match.params.id
    const classInfo = data[id.slice(0,1)]
    const productInfo = classInfo.list.find(t => t.id = id)
    const {index} = this.state
    if (!id) {
      return <Redirect to="/product"></Redirect>
    }
    const tabData = ['概要', '特長/構造', '用途']

    return <div className="productDetail-new">
      <p className="detail-title">{productInfo.title}</p>

      <ul className="tab">
        {
          tabData.map((t, i) => <li className={classnames({"active": index===i})}
            onClick={() => {this.tabChang(i)}}
            >
            {t}
          </li>)
        }
      </ul>
      <div className="inner">
        {index === 0 && <div className="gaiyao">
          <div className="avatar">
            <div><img src={productInfo.img} alt=""/></div>
            {id == 41 && <div className="mt20"><img width="110px" src={require('./g41.jpg')} alt=""/></div>}
          </div>
          <ul>
            {productInfo.info.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>}
        {
          index === 0 && id == 21 && <div>
            <p className="title__">軸受系列</p>
            <img width="700px" src={require('./g21.png')} alt=""/>
          </div>
        }        
        {
          index === 1 && <T  type="t" id={id} />
        }
        {
          index === 2 && <T  type="u" id={id} />
        }
      </div>
    </div>
  }
}
