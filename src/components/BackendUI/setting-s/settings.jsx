import React, { Component } from "react";
import BEnavbar from "../navbar/navbar";
import "./settings.css";

class settings extends Component {
  render() {
    return (
      <div className="BEmockupPage">
        <div className="BEmockupPageChild">
          <div className="temp">
            <BEnavbar />
          </div>
          <div className="titleDash">
            <div className="BEtitle">
              <h1>Settings</h1>
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

export default settings;
