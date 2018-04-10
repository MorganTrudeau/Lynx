import React, { Component } from "react";
import drainage1 from "../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_1.jpg";
import drainage2 from "../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_2.jpg";
import "../../styles/custom.css";

const Button = require("react-bootstrap/lib/Button");

class Drainage extends Component {
  render() {
    return (
      <div className="hardscape centerText">
        <div className="banner greyBG whiteText">
          <h2>Drainage</h2>
          <h6>Essential for Water Control</h6>
        </div>
        <div className="gridRow col2">
          <div className="picUnder">
            <img src={drainage1} alt="" className="picWide" />
          </div>
          <div className="textOverlap marginTop centerText">
            <div className="textBlock">
              <h6>Functional Beauty</h6>
              <p>
                Without a doubt, a good drainage system is one of the most
                important aspects of your landscaping. Water is powerful, and
                can be extremely destructive. Poor drainage can lead to erosion
                of your property. It can also cause structural deficiencies in
                the landscape, damage the foundation of your home, and cause
                death of plant materials and lawns.
              </p>
              <p>
                At Lynx Landscaping, we’ll install a drainage system to assist
                in any boggy areas around your property. The use of “Big O”
                piping is typically used and is particularly effective for
                redirecting water away from unwanted areas. However, in some
                cases we are able to tie into an existing drainage network in
                the homeowners property, which helps to transport water, such as
                gutters and downspouts.
              </p>
            </div>
          </div>
        </div>
        <div className="banner secondaryBGColor">
          <div className="letsTalk">
            <h3>Lets Talk About Your Project</h3>
            <Button className="button">
              <b>Contact US</b>
            </Button>
          </div>
        </div>
        <div className="gridRow col2">
          <div className="textOverlap marginBottom centerText">
            <div className="textBlock">
              <h6>Surface and Subsurface Drainage Systems</h6>
              <p>
                There two main types of drainage; surface and subsurface
                drainage systems. Surface drainage collects water from the
                surface and redirects it elsewhere. A subsurface drainage system
                is installed beneath the soil surface and is typically used for
                landscapes, gardens and behind retaining walls.
              </p>
              <p>
                During the construction of your landscape, we pay particular
                attention to how water will behave in and around your new
                landscape so new water drainage issues are not created.
              </p>
            </div>
          </div>
          <div className="picUnder">
            <img src={drainage2} alt="" className="pic" />
          </div>
        </div>
      </div>
    );
  }
}

export default Drainage;
