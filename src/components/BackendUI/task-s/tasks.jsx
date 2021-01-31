import React, { Component } from "react";
import BEnavbar from "../navbar/navbar";
import "./tasks.css";

class tasks extends Component {
  render() {
    return (
      <div>
        <div className="BEmockupPage">
          <div className="BEmockupPageChild">
            <div className="temp">
              <BEnavbar />
            </div>

            <div className="titleDash">
              <div className="BEtitle">
                <h1>Tasks</h1>
              </div>
              {/* -------------------------------- */}
              {/* code here, betweent these two lines */}

              {/* --------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default tasks;
