import React, { Component } from "react";
import BEnavbar from "../navbar/navbar";
import "./payment.css";

class payment extends Component {
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
                <h1>Payment</h1>
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

export default payment;
