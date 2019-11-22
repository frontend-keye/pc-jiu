import React, { Component } from 'react';

class Compony extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      index: 1
    }
  }
  render() { 
    return ( 
      <div className="compony">
        <div className="left-bar">
          <p className="title-bar">企業情報</p>
          <p>会社概要</p>
          <p>調達方</p>
          <p>CSR: 企業行動憲章</p>
        </div>
      </div>
    );
  }
}
 
export default Compony;