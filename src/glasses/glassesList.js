import React, { Component } from "react";
import Glasses from "./glassesCard.js";

export default class GlassesList extends Component {
  render() {
    return (
      <div className="container" style={{padding:150}}>
        <div className="row">
          <Glasses getData={this.props.getData}/>
        </div>
      </div>
    );
  }
}
