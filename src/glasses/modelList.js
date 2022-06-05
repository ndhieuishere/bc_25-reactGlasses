import React, { Component } from "react";
import Model from "./modelCard";
import ActiveModel from "./activeModel";
export default class ModelList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Model getData={this.props.getData} />
          <ActiveModel getData={this.props.getData} getDetail={this.props.detailGlass}/>
        </div>
      </div>
    );
  }
}
