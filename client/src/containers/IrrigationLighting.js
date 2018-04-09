import React, { Component } from 'react';
import Hardscape1 from '../images/Hardscape-1.jpg';
import Hardscape2 from '../images/Hardscape-2.jpg';
import '../styles/custom.css';

class IrrigationLighting extends Component {
  render() {
    return (
        <div className="hardscape centerText">
          <div className="banner greyBG whiteText">
            <h3>Hardscape</h3>
            <h6>Landscaping Construction Structure</h6>
          </div>
          <div className="gridRow col2">
            <div className="centerText"><img src={Hardscape1} alt="" className="coverWidth" /></div>
            <div className="marginTop centerText">
              <h6>Forever Beautiful</h6>
              <div className="textBlock">
                <p>Hardscape refers to landscape construction where structures are permanently incorporated into any landscape. These would include driveways, patios, decks, walkways, and stairs. Materials for these structures include allan blocks, wood, paving stones, brick, stone and concrete.</p>
                <p>Some of the most common are allan block walls, brick patios, walkways, and driveways. If a customer is looking for a natural rustic look, we can do Flagstone and Natural Boulder work. Also, Allan Block structures that are frequently built include hot tub pads and raised garden beds. We guarantee the structural integrity of all Allan Block retaining walls & are sure to install the proper drainage when necessary. This is backed with a warranty.</p>
              </div>
            </div>
          </div>
          <div className="gridRow col2">
            <div className="marginBottom centerText">
              <h6>Make Your Vision Come to Life</h6>
              <div className="textBlock">
                <p>At Lynx Landscaping, we can help build your vision, including driveways, walkways, patios and decks, using materials ranging from paving stones to concrete. From uncovered patios in the Langley or Surrey area, or mixed material jobs in Coquitlam and Burnaby, that feature bricks, concrete and stone, we can do it all. We have the expertise and equipment to create structures of all forms and finishes.</p>
                <p>Let us help you build your vision and dream, and make it a reality!</p>
              </div>
            </div>
            <div className="centerText"><img src={Hardscape2} alt="" className="coverWidth"/></div>
          </div>
        </div>
    );
  }
}

export default IrrigationLighting;
