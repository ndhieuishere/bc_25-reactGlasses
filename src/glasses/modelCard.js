import React, { Component } from "react";
import Data from "./dataGlasses.json";

export default class Model extends Component {
  renderModel = () => {
    const ModelNew = this.props.getData.map((item) => {
      return (
        <div className="col-md-6 background-card" key={item.id}>
          <div
            className="card"  
            style={{
              width: 200,
              marginTop: 187,
              backgroundColor: "orange",
              opacity: 0.5,
            }}
          >
            <img className="card-img-top" src="./public/img/model.jpg" alt="" />
            <img src={item.url} style={{width:165,position:"absolute",top:135,left:427,opacity:1}}></img>
            <div className="card-body">
              
              <h4
                className="card-title"
                style={{ color: "blueviolet", margin: 0 }}
              >
                {item.name}
              </h4>
              <p className="card-text" style={{ color: "white", fontSize: 14 }}>
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return ModelNew;
  };

  render() {
    return this.renderModel()[7];
  }
}
