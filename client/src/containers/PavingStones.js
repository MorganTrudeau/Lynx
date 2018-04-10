import React, { Component } from 'react';
import paving1 from '../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping.jpg';
import paving2 from '../images/Paving Stones/paving_stone_brick_driveway_walkway_landscaping_2.jpg';
import '../styles/custom.css';

const Button = require('react-bootstrap/lib/Button');

class PavingStones extends Component {
  render() {
    return (
        <div className="pavingStones centerText">
          <div className="banner greyBG whiteText">
            <h2>Paving Stones</h2>
            <h6>A Classic Choice: Beautiful and Durable</h6>
          </div>
          <div className="gridRow col2">
            <div className="picUnder"><img src={paving1} alt="" className="picWide" /></div>
            <div className="textOverlap marginTop centerText">
              <div className="textBlock">
                <h6>Forever Beautiful</h6>
                <p>Hardscape refers to landscape construction where structures are permanently incorporated into any landscape. These would include driveways, patios, decks, walkways, and stairs. Materials for these structures include allan blocks, wood, paving stones, brick, stone and concrete.</p>
                <p>Some of the most common are allan block walls, brick patios, walkways, and driveways. If a customer is looking for a natural rustic look, we can do Flagstone and Natural Boulder work. Also, Allan Block structures that are frequently built include hot tub pads and raised garden beds. We guarantee the structural integrity of all Allan Block retaining walls & are sure to install the proper drainage when necessary. This is backed with a warranty.</p>
              </div>
            </div>
          </div>
          <div className="banner secondaryBGColor">
            <div className="letsTalk">
              <h3>Lets Talk About Your Project</h3><Button className="button"><b>Contact US</b></Button>
            </div>  
          </div>
          <div className="gridRow col2">
            <div className="textOverlap marginBottom centerText">
              <div className="textBlock">
                <h6>Make Your Vision Come to Life</h6>
                <p>At Lynx Landscaping, we can help build your vision, including driveways, walkways, patios and decks, using materials ranging from paving stones to concrete. From uncovered patios in the Langley or Surrey area, or mixed material jobs in Coquitlam and Burnaby, that feature bricks, concrete and stone, we can do it all. We have the expertise and equipment to create structures of all forms and finishes.</p>
                <p>Let us help you build your vision and dream, and make it a reality!</p>
              </div>
            </div>
            <div className="picUnder"><img src={paving2} alt="" className="picWide" /></div>
          </div>
        </div>
    );
  }
}

export default PavingStones;
