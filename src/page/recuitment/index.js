import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import LeftBar from '../../components/leftBar';
import Detail from '../recuitmentdetail/index'
import './index.scss'
class Recuitment extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      index: 0,
      listData: [{
        title: '新卒採用'
      }, {
        title: 'キャリア採用'
      }]
    }
  } 
  onChange = (index) => {
    this.setState({
      index
    })
  }
  render() { 
    const {index, listData} = this.state
    return ( 
      <div className="recuitment">
        {/* <p className="recuitment-h">
          <h5>採用情報</h5>
        </p>
         */}
        <div>
          <LeftBar title="採用情報"
            listData={listData}
            index={index}
            onChange={this.onChange}
           />
        </div>
        <div>
          {index == 0 && <Detail type={0} />}
          {index == 1 && <Detail type={1} />}
        </div>
        {/* <div className="section-recuitment">
          <div className="type-container">
            <Link className="left-white" to="/recuitmentdetail/1"><img src={require('../../imgs/recruitment1.jpg')} alt=""/></Link>
            <Link to="/recuitmentdetail/2"><img src={require('../../imgs/recruitment2.jpg')} alt=""/></Link>
          </div>
          
        </div> */}
      </div>
    );
  }
}
 
export default Recuitment;