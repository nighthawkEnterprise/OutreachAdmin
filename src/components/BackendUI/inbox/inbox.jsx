import React, { Component } from "react";
import BEnavbar from "../navbar/navbar";
import "./inbox.css";

class BEinbox extends Component {
  render() {
    return (
      <div className="BEmockupPage">
        <div className="BEmockupPageChild">
          <div className="temp">
            <BEnavbar />
          </div>

          <div className="titleDash">
            <div className="BEtitle">
              <h1>Inbox</h1>
            </div>
            {/* -------------------------------- */}
            {/* code here, betweent these two lines */}
            {/* --------------------------------- */}
          </div>
        </div>
      </div>
    );
  }
}

export default BEinbox;
