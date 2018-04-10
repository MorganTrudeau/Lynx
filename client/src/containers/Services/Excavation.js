import React, { Component } from 'react';
import excavation1 from '../../images/Excavation Services/excavation_dirt_removal_dig_land_design_landscaping_service.jpg';
import excavation2 from '../../images/Excavation Services/boulder_wall_construction_excavation_service_landscaping.JPG';
import '../../styles/custom.css';

const Button = require('react-bootstrap/lib/Button');

class Excavation extends Component {
  render() {
    return (
        <div className="excavation centerText">
          <div className="banner greyBG whiteText">
            <h2>Excavation Services</h2>
            <h6>Transform Your Property Today</h6>
          </div>
          <div className="gridRow col2">
            <div className="picUnder"><img src={excavation1} alt="" className="pic" /></div>
            <div className="textOverlap marginTop centerText">
              <div className="paddedTextBlock">
                <h6>Any Job, Any Size</h6>
                <p>Let the professionals at Lynx Landscaping handle the heavy work. We can can help transform any property into a place of beauty. From planning and design to complete project completion and maintenance, we offer a complete range of landscape excavation services to meet all of your needs, from Vancouver and Burnaby, to Langley and Surrey, and as far as Abbotsford.</p>
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
              <div className="paddedTextBlock">
                <h6>Home Excavation Services</h6>
                <p>Lynx Landscaping provides trenching, excavation of pools and hot tub areas, backfill of foundations, grading and leveling of yards, demolition including removal of driveways and walkways, concrete breaking, tree stump removal and rock placement. Lynx Landscaping has a vast variety of small and large machines, so we can tackle any job. Give us a call today!</p>
              </div>
            </div>
            <div className="picUnder"><img src={excavation2} alt="" className="pic" /></div>
          </div>
        </div>
    );
  }
}

export default Excavation;
