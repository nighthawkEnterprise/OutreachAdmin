import React, { Component, Fragment } from "react";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <div className="frontPage">
          <div className="frontPageTitle">
            <h1>Where Work Happens</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              dolor voluptates perferendis dolore! Dolore nostrum quibusdam
              voluptatem illo enim, est laboriosam similique eaque magnam
              quaerat quasi quod? Ea, voluptatem cumque?
            </p>
            <a href="" className="getStarted">
              {" "}
              Get started{" "}
            </a>
          </div>
          <div className="logoColors">
            <div className="topColors">
              <div className="color1"></div>
              <div className="color2"></div>
            </div>
            <div className="bottomColors">
              <div className="color3"></div>
              <div className="color4"></div>
            </div>
            <br />
          </div>
        </div>
        <div className="whatWeDo">
          <h1>What Do We Do For You</h1>
        </div>
        <div className="cardsPageParent ">
          <div className="cardsPage">
            <div className="cardParent">
              <div className="card">
                <p>
                  <a className="fa fa-leaf"></a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  hic voluptatibus praesentium a repudiandae culpa, ea est quod
                  aliquid dicta natus incidunt maxime dolores dolorem eveniet?
                  Doloribus quaerat illum ducimus, quo obcaecati quia optio fuga
                  aspernatur similique odio ratione hic tempore eligendi vel
                  maxime ut illo dolores atque. Eum, doloremque?
                </p>
              </div>
            </div>
            <div className="cardParent">
              <div className="card">
                <p>
                  <a href="" className="fa fa-globe"></a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  hic voluptatibus praesentium a repudiandae culpa, ea est quod
                  aliquid dicta natus incidunt maxime dolores dolorem eveniet?
                  Doloribus quaerat illum ducimus, quo obcaecati quia optio fuga
                  aspernatur similique odio ratione hic tempore eligendi vel
                  maxime ut illo dolores atque. Eum, doloremque?
                </p>
              </div>
            </div>
            <div className="cardParent">
              <div className="card">
                <p>
                  <a href="" className="fa fa-chevron-up"></a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  hic voluptatibus praesentium a repudiandae culpa, ea est quod
                  aliquid dicta natus incidunt maxime dolores dolorem eveniet?
                  Doloribus quaerat illum ducimus, quo obcaecati quia optio fuga
                  aspernatur similique odio ratione hic tempore eligendi vel
                  maxime ut illo dolores atque. Eum, doloremque?
                </p>
              </div>
            </div>
            <div className="cardParent">
              <div className="card">
                <p>
                  <a href="" className="fa fa-music"></a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  hic voluptatibus praesentium a repudiandae culpa, ea est quod
                  aliquid dicta natus incidunt maxime dolores dolorem eveniet?
                  Doloribus quaerat illum ducimus, quo obcaecati quia optio fuga
                  aspernatur similique odio ratione hic tempore eligendi vel
                  maxime ut illo dolores atque. Eum, doloremque?
                </p>
              </div>
            </div>
            <div className="cardParent">
              <div className="card">
                <p>
                  <a href="" className="fa fa-heart"></a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  hic voluptatibus praesentium a repudiandae culpa, ea est quod
                  aliquid dicta natus incidunt maxime dolores dolorem eveniet?
                  Doloribus quaerat illum ducimus, quo obcaecati quia optio fuga
                  aspernatur similique odio ratione hic tempore eligendi vel
                  maxime ut illo dolores atque. Eum, doloremque?
                </p>
              </div>
            </div>
            <div className="cardParent">
              <div className="card">
                <p>
                  <a href="" className="fa fa-user"></a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  hic voluptatibus praesentium a repudiandae culpa, ea est quod
                  aliquid dicta natus incidunt maxime dolores dolorem eveniet?
                  Doloribus quaerat illum ducimus, quo obcaecati quia optio fuga
                  aspernatur similique odio ratione hic tempore eligendi vel
                  maxime ut illo dolores atque. Eum, doloremque?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerLine"></div>

          <div className="footerContants">
            <div className="contacts">Contact Us</div>
            <div className="spaceLine"></div>
            <div className="contacts">FAQ</div>
            <div className="spaceLine"></div>
            <div className="contacts">Reviews</div>
            <div className="spaceLine"></div>
            <div className="contacts">Blog</div>
            <div className="spaceLine"></div>
            <div className="contacts">SWE Project Contests</div>
            <div className="spaceLine"></div>
            <div className="contacts">Legal Stuff</div>
          </div>

          <div className="llc">
            Copyright © 2020-2021 Outreach Design, LLC. All rights reserved.
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;