import React, { Component } from "react";
import Data from "./dataGlasses.json";
import Header from "./header";
import ModelList from "./modelList";
import GlassesList from "./glassesList";

export default class GlassCart extends Component {
  constructor(props) {
    super(props);
    this.state = { glassesList: Data };
  }

  render() {
    const {glassesList} = this.state;

    return (
      <div className="backGround">
        <Header />
        <div >
          <ModelList getData={glassesList}/>
        </div>
        <GlassesList getData={glassesList}/>
      </div>
    );
  }
}
