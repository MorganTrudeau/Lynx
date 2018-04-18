import React, { Component } from "react";
import { Link } from 'react-router-dom';
import paving1 from "../../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping.jpg";
import paving2 from "../../images/Paving Stones/paving_stone_brick_driveway_walkway_landscaping_2.jpg";
import "../../styles/custom.css";

const Button = require("react-bootstrap/lib/Button");

class PavingStones extends Component {
  render() {
    return (
      <div className="pavingStones centerText">
        <div className="banner greyBG whiteText">
          <h2>Paving Stones</h2>
          <h6>A Classic Choice: Beautiful and Durable</h6>
        </div>
        <div className="gridRow col2">
          <div className="picUnder">
            <img src={paving1} alt="" className="picWide" />
          </div>
          <div className="textOverlap marginTop centerText">
            <div className="textBlock">
              <h6>Forever Beautiful</h6>
              <p>
                Having been around for thousands of years, Paving stones can
                been seen in many ancient cities around the world. From Mexico
                to England, paving stones are a classic choice. Requiring no
                maintenance, and having great sustainability, paving stones have
                become very popular for home driveways, walkways, patios and
                lawn areas. Paving stones can also create a unique backdrop to
                any outdoor area, as they come in so many different styles,
                shapes, and colors.
              </p>
              <p>
                Paving stones are beautiful, durable and, when properly
                installed, can really add value to your home. Often called
                interlocking brick, Paving Stones are used to build patios,
                paths, and are often used for borders between grass and gardens
                to aid in lawn mowing.
              </p>
            </div>
          </div>
        </div>
        <div className="banner secondaryBGColor">
          <div className="letsTalk">
            <h3>Lets Talk About Your Project</h3>
            <Link to="/contact">
              <Button className="button">
                <b>Contact US</b>
              </Button>
            </Link>
          </div>
        </div>
        <div className="gridRow col2">
          <div className="textOverlap marginBottom centerText">
            <div className="textBlock">
              <h6>Paving Stones are a Great Investment</h6>
              <p>
                There are so many different stone options, ranging in style and
                price. And because of this, you always have the ability to
                choose from numerous colours to help match any style of home.
              </p>
              <p>
                Lynx Landscaping warranties all paving stone work, and this
                includes a variety of finishing touches. The use of polymeric
                sand, which is brushed between the joints after the brickwork is
                completed, helps to lower the amount of maintenance, keeping
                weeds at bay. All areas with paving stones/brickwork installed
                will first be excavated. We then apply a road base material,
                which is then compacted with a plate tamper to ensure your
                surface will not settle or sink.
              </p>
            </div>
          </div>
          <div className="picUnder">
            <img src={paving2} alt="" className="picWide" />
          </div>
        </div>
      </div>
    );
  }
}

export default PavingStones;
