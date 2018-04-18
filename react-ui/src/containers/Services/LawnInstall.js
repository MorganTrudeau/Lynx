import React, { Component } from "react";
import { Link } from 'react-router-dom';
import lawn2 from "../../images/Lawn Installations/artificial_turf_yard_lawn_install_landscaping.jpg";
import lawn1 from "../../images/Lawn Installations/fresh_new_lawn_install_sod_grass_garden_landscaping.jpg";
import "../../styles/custom.css";

const Button = require("react-bootstrap/lib/Button");

class LawnInstall extends Component {
  render() {
    return (
      <div className="lawnInstall centerText">
        <div className="banner greyBG whiteText">
          <h2>Lawn Install</h2>
          <h6>Create Your Own Personal Oasis</h6>
        </div>
        <div className="gridRow col2">
          <div className="picUnder">
            <img src={lawn1} alt="" className="pic" />
          </div>
          <div className="textOverlap marginTop centerText">
            <div className="textBlock">
              <h6>Make an Impact</h6>
              <p>
                Beautiful, green lawns are one of the first things people notice
                when looking at a house. It’s a great investment for anyone’s
                home, and clearly shows people that as a homeowner, you take
                pride in where you live. Combined with rock work and shrub
                planting, we are able to create a backyard oasis for you. A
                beautiful green lawn helps provide both great curb appeal and
                your own personal backyard oasis, when combined with rock work
                and other plantings.
              </p>
              <p>
                At Lynx Landscaping, we have the knowledge and techniques to
                properly install a lawn, ensuring complete health of the entire
                project. With projects ranging from Coquitlam and Surrey to
                Langley and Abbotsford, we can clearly demonstrate our ability
                to make any new lawn installation project to be a great
                decision.
              </p>
            </div>
          </div>
        </div>
        <div className="banner primaryBGColor whiteText">
          <div className="letsTalk">
            <h3>Lets Talk About Your Project</h3>
            <Link to="/contact">
              <Button className="whiteButton">
                <b>Contact US</b>
              </Button>
            </Link>
          </div>
        </div>
        <div className="gridRow col2">
          <div className="textOverlap marginBottom centerText">
            <div className="textBlock">
              <h6>Lawn Installation: Synthetic and Sod</h6>
              <p>
                Synthetic lawns are very durable, as well as low maintenance;
                however, the cost is higher than traditional sod. Synthetic
                requires removal of old lawn and excavation of area to allow for
                base material (road base) to be laid and compacted prior to
                installation of the synthetic lawn. This allows for drainage.
              </p>
              <p>
                Turf or Sod installation begins with good soil preparation prior
                to installation, as well as proper lawn installation techniques
                and knowledge. This is crucial in promoting a healthy, beautiful
                lawn. At Lynx Landscaping, we’ll ensure your new lawn will be
                healthy and lush. Other lawn installation services include top
                dressing and reseeding, as well as Hydroseeding.
              </p>
            </div>
          </div>
          <div className="picUnder">
            <img src={lawn2} alt="" className="pic" />
          </div>
        </div>
      </div>
    );
  }
}

export default LawnInstall;
