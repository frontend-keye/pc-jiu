import React, { Component } from 'react';
import './index.scss'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount () {
  }
  render() { 
    return ( 
      <div className="index">
        <div className="banner">
          <img src="http://b.hiphotos.baidu.com/image/h%3D300/sign=92afee66fd36afc3110c39658318eb85/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg" alt="" srcset=""/>
        </div>
      </div>
    );
  }
}
 
export default Index;