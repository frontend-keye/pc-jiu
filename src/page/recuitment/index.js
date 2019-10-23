import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.scss'
class Recuitment extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="recuitment">
        <p className="recuitment-h">
          <h5>採用情報</h5>
        </p>

        <div className="section-recuitment">
          <div className="type-container">
            <Link className="left-white" to="/recuitmentdetail/1"><img src={require('../../imgs/recruitment1.jpg')} alt=""/></Link>
            <Link to="/recuitmentdetail/2"><img src={require('../../imgs/recruitment2.jpg')} alt=""/></Link>
          </div>
          
        </div>
      </div>
    );
  }
}
 
export default Recuitment;