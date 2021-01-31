import React, { Component } from "react";

import "./navbar.css";

class BEnavbar extends Component {
  render() {
    return (
      <div>
        <div className="NavDashboard">
          <div className="dashboardChild1">
            <div className="mainDashboardContent">
              <h2>Backend UI</h2>
            </div>
          </div>
          <div className="dashboardChild2">
            <a href="/dashbaord" className="dashboardContent">
              <i className="fa fa-pencil"></i>
              <p>Dashboard</p>
            </a>

            <a href="/inbox" className="dashboardContent">
              {" "}
              <i className="fa fa-envelope-o"></i>
              <p>Inbox</p>
              {/* <div className="inbox">20</div> */}
            </a>

            {/* <a href="#" className="dashboardContent">
              {" "}
              <i className="fa fa-users"></i>
              <p>Regestered Users</p>
              <div className="users">6</div>
            </a> */}

            <a href="/payment" className="dashboardContent">
              <i className="fa fa-credit-card"></i>
              <p>Payment</p>
            </a>
            <a href="/mobileApplication" className="dashboardContent">
              <i className="fa fa-wifi"></i>
              <p>Mobile Application</p>
            </a>
            <a href="/tasks" className="dashboardContent">
              {" "}
              <i className="fa fa-file-text"></i>
              <p>Tasks</p>
              {/* <div className="tasks">9</div> */}
            </a>
            <a href="/adminAndtools" className="dashboardContent">
              {" "}
              <i className="fa fa-wrench"></i>
              <p>Admin-Tools</p>
            </a>
            <a href="/Charts" className="dashboardContent">
              {" "}
              <i className="fa fa-bar-chart"></i>
              <p>Charts</p>
            </a>
            <a href="/settings" className="dashboardContent">
              <i className="fa fa-cogs"></i>
              <p>Sittings</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BEnavbar;
