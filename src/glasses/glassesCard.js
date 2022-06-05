import React, { Component } from "react";

export default class Glasses extends Component {

  handleChangeGlasses = () => {
    this.setState({
    })
  };


  renderListGlasses = () => {
    const listGlassesNew = this.props.getData.map((item) => {
      return (
        <button
          style={{ backgroundColor: "white", margin: 10 }}
          onClick={()=>{this.props.getDetail(item)}}
        >
          <img src={item.url} style={{ height: 50, width: 100 }} />
        </button>
      );
    });
    return listGlassesNew;
  };

  render() {
    return this.renderListGlasses();
  }
}
