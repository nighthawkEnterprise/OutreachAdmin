import React, { Component } from "react";
import BEnavbar from "../navbar/navbar";
import "./adminAndtools.css";

class adminAndtools extends Component {
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
                <h1>Admin and Tools</h1>
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

export default adminAndtools;
