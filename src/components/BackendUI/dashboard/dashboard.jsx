import React, { Component } from "react";
import BEnavbar from "../navbar/navbar";
import "./dashboard.css";

class BEmockup extends Component {
  render() {
    return (
      <div className="BEmockupPage">
        <div className="BEmockupPageChild">
          <div className="temp">
            <BEnavbar />
          </div>
          {/* ---------------------------- */}

          <div className="titleDash">
            <div className="BEtitle">
              <h1>Dashboard</h1>
            </div>
            {/* -------------------------------------- */}
            <div className="dashboard">
              {/* <img
                height="518"
                src="https://shareplm.com/wp-content/uploads/2020/01/Service-01-1024x818.png"
                data-lazy-type="image"
                data-src="https://shareplm.com/wp-content/uploads/2020/01/Service-01-1024x818.png"
                class="attachment-large size-large lazy-loaded"
                alt=""
                loading="lazy"
                srcset="https://shareplm.com/wp-content/uploads/2020/01/Service-01-1024x818.png 1024w, https://shareplm.com/wp-content/uploads/2020/01/Service-01-300x240.png 300w, https://shareplm.com/wp-content/uploads/2020/01/Service-01-768x614.png 768w, https://shareplm.com/wp-content/uploads/2020/01/Service-01.png 1250w"
                data-srcset=""
                sizes="(max-width: 1024px) 100vw, 1024px"
              ></img> */}
              <div className="futuerComponentParent">
                <div className="futuerComponent1"></div>
                <div className="futuerComponent2">
                  <div className="futuerComponentChild">
                    <i className="fa fa-user"></i>
                    <p>
                      <h2>7</h2>
                      <h4>New Customers</h4>
                    </p>
                  </div>
                  <div className="futuerComponentChild">
                    <i className="fa fa-building"></i>
                    <p>
                      <h2>4</h2>
                      <h4>Total Projects</h4>
                    </p>
                  </div>
                  <div className="futuerComponentChild">
                    <i className="fa fa-university"></i>
                    <p>
                      <h2>23</h2>
                      <h4>Interns</h4>
                    </p>
                  </div>
                  <div className="futuerComponentChild">
                    <i className="fa fa-users"></i>
                    <p>
                      <h2>3</h2>
                      <h4>Clients</h4>
                    </p>
                  </div>
                  <div className="futuerComponentChild">
                    <i className="fa fa-random"></i>
                    <p>
                      <h2>45%</h2>
                      <h4>Growth</h4>
                    </p>
                  </div>
                  <div className="futuerComponentChild">
                    <i className="fa fa-money"></i>
                    <p>
                      <h2>15.599</h2>
                      <h4>Total Profit</h4>
                    </p>
                  </div>
                </div>
              </div>
              {/* --------------------------------------------------- */}
              <div className="chartParent">
                <div className="chartsTitle">
                  <h2>IMPROVEMENT OF THE YEAR</h2>
                </div>
                <div className="charts">
                  <div className="chartsParent">
                    <div className="piecharts1">
                      <div className="piechart">
                        <span className="percentage">13</span>
                        <span className="percentages">%</span>
                      </div>
                    </div>
                    <div className="piecharts2">
                      <div className="piechart">
                        <span className="percentage">78</span>
                        <span className="percentages">%</span>
                      </div>
                    </div>
                    <div className="piecharts3">
                      <div className="piechart">
                        <span className="percentage">46</span>
                        <span className="percentages">%</span>
                      </div>
                    </div>
                    <div className="piecharts4">
                      <div className="piechart">
                        <span className="percentage">29</span>
                        <span className="percentages">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chartsContents">
                  <h3>Profit</h3>
                  <h3>Growth</h3>
                  <h3>Clients</h3>
                  <h3>Projects</h3>
                </div>
              </div>
              {/* ------------------------------------------- */}

              <div className="backlogsParent">
                <div className="backlogsBlur"></div>
                <div className="backlogs">
                  <h2>
                    <h4>Backlogs</h4>
                  </h2>
                  <div className="backlogsChild">
                    <div className="backlogsChild1">
                      <a href="#" className="backlogContent">
                        Ongoing Projects
                      </a>
                      <a href="#" className="backlogContent">
                        Upcoming Projects
                      </a>
                      <a href="#" className="backlogContent">
                        Current Interns
                      </a>
                      <a href="#" className="backlogContent">
                        Past Interns
                      </a>
                      <a href="#" className="backlogContent">
                        Clients
                      </a>
                      <a href="#" className="backlogContent">
                        Goals
                      </a>
                    </div>
                    {/* <div className="backlogsChild2">
                      <a href="#" className="backlogContent">
                        Profits
                      </a>
                      <a href="#" className="backlogContent">
                        Goals
                      </a>
                      <a href="#" className="backlogContent">
                        Page Views
                      </a>
                      <a href="" className="backlogContent">
                        Resgistered Users
                      </a>
                      <a href="" className="backlogContent">
                        Messages
                      </a>
                      <a href="#" className="backlogContent">
                        Inquiries
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------- */}
              <div className="BEsocialMediaPlatForms">
                <div className="BEsocialMedia1">
                  <div href="#" className="facebookLogo">
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </div>
                  <div className="followers">
                    <div className="SMcontacts ">250 Followers</div>
                    <div className="midLine">|</div>
                    <div className="friends">30 + Contacts</div>
                  </div>
                </div>
                <div className="BEsocialMedia2">
                  <div href="#" className="tweeterLogo">
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                  <div className="followers">
                    <div className="SMcontacts ">250 Followers</div>
                    <div className="midLine">|</div>
                    <div className="friends">30 + Contacts</div>
                  </div>
                </div>
                <div className="BEsocialMedia3">
                  <div href="#" className="googleLogo">
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div className="followers">
                    <div className="SMcontacts ">250 Followers</div>
                    <div className="midLine">|</div>
                    <div className="friends">30 + Contacts</div>
                  </div>
                </div>
                <div className="BEsocialMedia4">
                  <div href="#" className="linkInLogo">
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                  <div className="followers">
                    <div className="SMcontacts ">250 Followers</div>
                    <div className="midLine">|</div>
                    <div className="friends">30 + Contacts</div>
                  </div>
                </div>
              </div>
              {/* ----------------------------------------- */}
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------- */}
      </div>
    );
  }
}

export default BEmockup;
