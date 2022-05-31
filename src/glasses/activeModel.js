import React, { Component } from "react";

export default class ActiveModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }

  render() {
    const {img} = this.state
    return (
      <div className="card active-background">
        <img
          className="card-img-top"
          src={img}
          style={{ margin: 22, width: 155, opacity: 0.3 }}
          alt=""
        />
      </div>
    );
  }
}
