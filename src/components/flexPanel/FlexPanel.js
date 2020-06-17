import React, { Component } from "react";

import "./flexPanel.scss";

class FlexPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: false,
      toggle2: false,
      toggle3: false,
    };
  }
  toggleOpen = (e) => {
    const id = e.currentTarget.id;
    const toggleId = `toggle${id}`;
    let toggleItem = this.state[toggleId];
    this.setState({
      [toggleId]: !toggleItem,
    });
    this.toggleClose(toggleId);
  };

  toggleClose = (toggleId) => {
    toggleId === "toggle1" && this.setState({ toggle2: false, toggle3: false });
    toggleId === "toggle2" && this.setState({ toggle1: false, toggle3: false });
    toggleId === "toggle3" && this.setState({ toggle1: false, toggle2: false });
  };
  render() {
    const { toggle1, toggle2, toggle3 } = this.state;
    console.log(toggle1);
    return (
      <div className="panels">
        <div
          id={1}
          className={`panel panel1 ${toggle1 ? "open open-active" : "closed"} `}
          onClick={(e) => {
            this.toggleOpen(e);
          }}
        >
          <p>Consultas</p>
          <p>Terápias</p>
          <p>Apoyo</p>
        </div>
        <div
          id={2}
          className={`panel panel2 ${toggle2 ? "open open-active" : "closed"} `}
          onClick={(e) => {
            this.toggleOpen(e);
          }}
        >
          <p>Videoconsultas</p>
          <p>online</p>
          <p>y individuales</p>
        </div>
        <div
          id={3}
          className={`panel panel3 ${toggle3 ? "open open-active" : "closed"} `}
          onClick={(e) => {
            this.toggleOpen(e);
          }}
        >
          <p>Jordi</p>
          <p>Arjó</p>
          <p>Terápias</p>
        </div>
      </div>
    );
  }
}

export default FlexPanel;
