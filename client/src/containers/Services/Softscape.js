import React, { Component } from "react";
import softscape1 from "../../images/Softscape/softscape_flower_garden_plant_grow_beauty_landscaping_1.jpg";
import softscape2 from "../../images/Softscape/softscape_flower_garden_plant_grow_beauty_landscaping_2.jpg";
import "../../styles/custom.css";

const Button = require("react-bootstrap/lib/Button");

class SoftScape extends Component {
  render() {
    return (
      <div className="softscape centerText">
        <div className="banner greyBG whiteText">
          <h2>Softscape</h2>
          <h6>Living Beauty</h6>
        </div>
        <div className="gridRow col2">
          <div className="picUnder">
            <img src={softscape1} alt="" className="pic" />
          </div>
          <div className="textOverlap marginTop centerText">
            <div className="textBlock">
              <h6>Accentuate Your Hardscape Features</h6>
              <p>
                Softscape is the live horticultural aspect of landscaping.
                Softscaping includes flowers, plants, shrubs, trees, flower
                beds, hedges, as well as other components such as installing and
                supplying crushed rock, river rock, boulders, and bark mulch.
                And Softscape elements change over time, as they mature. The
                ideal landscape is a balance of both hardscape and softscape.
              </p>
              <p>
                So when the hardscaping is complete, it’s time to add the living
                part of the landscape, which is the softscape. From planting
                trees and shrubs, installing mulch or decorative stone or simply
                installing sod to design a full season backyard, allow Lynx
                Landscaping’s premium landscape contracting company help make
                your dreams a reality.
              </p>
            </div>
          </div>
        </div>
        <div className="banner primaryBGColor whiteText">
          <div className="letsTalk">
            <h3>Lets Talk About Your Project</h3>
            <Button className="whiteButton">
              <b>Contact US</b>
            </Button>
          </div>
        </div>
        <div className="gridRow col2">
          <div className="textOverlap marginBottom centerText">
            <div className="textBlock">
              <h6>Cost Effective Style</h6>
              <p>
                Lynx Landscaping will help you select the right plants to create
                the desired visual effect and keep your maintenance cost in time
                and money at a range you can afford. We offer new plants,
                transplanting of existing plants, and removal of any unwanted
                plants. We can build out anything from perennial and stone
                gardens, to bamboo and rock gardens, including a variety of
                trees, shrubs, perennial and annual flowers, as well as numerous
                hedges, ground covers, and erosion controls.
              </p>
              <p>
                So from beautiful cedars to front yard entry planters, we can
                provide you with beautiful, cost effective ways to add some
                beauty to your home, front yard or back. At Lynx Landscaping,
                we’ll help you select the right shrubs or plants.
              </p>
            </div>
          </div>
          <div className="picUnder">
            <img src={softscape2} alt="" className="pic" />
          </div>
        </div>
      </div>
    );
  }
}

export default SoftScape;
