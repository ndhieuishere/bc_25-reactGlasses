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
          onClick={this.handleChangeGlasses}
          style={{ backgroundColor: "white", margin: 10 }}
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
