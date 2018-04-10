import React, { Component } from 'react';
import iriigation from '../images/Irrigation & Lighting/irrigation_healthy_lawn_water_grass_system_install_landscaping.jpg';
import lighting from '../images/Irrigation & Lighting/backyard_garden_lighting_install_lighting_style_landscaping.jpg';
import '../styles/custom.css';

const Button = require('react-bootstrap/lib/Button');

class IrrigationLighting extends Component {
  render() {
    return (
        <div className="irrigationLighting centerText">
          <div className="banner greyBG whiteText">
            <h2>Irrigation and Lighting</h2>
            <h6>Automated Irrigation and Landscape Lighting</h6>
          </div>
          <div className="gridRow col2">
            <div className="picUnder"><img src={iriigation} alt="" className="pic" /></div>
            <div className="textOverlap marginTop centerText">
              <div className="textBlock">
                <h6>Your Outdoor Art Canvas</h6>
                <p>An automated sprinkler system is one of the best investments you can make, getting a healthy, beautiful landscape – without lifting a finger. And landscape lighting dramatically impacts your landscape work at night, making your outdoors look like a canvas of art.</p>
                <p>Lynx Landscaping can help with both your irrigation and landscape lighting needs, ensuring your lawn and plants have a long, healthy life, while reducing maintenance; the lighting also saves you a lot of time as it’s conveniently setup on timers and schedules.</p>
              </div>
            </div>
          </div>
          <div className="banner primaryBGColor whiteText">
            <div className="letsTalk">
              <h3>Lets Talk About Your Project</h3><Button className="whiteButton"><b>Contact US</b></Button>
            </div>  
          </div>
          <div className="gridRow col2">
            <div className="textOverlap marginBottom centerText">
              <div className="textBlock">
                <h6>High Quality Products and Service</h6>
                <p>Lynx Landscaping’s Irrigation Lighting services are for Residential, Commercial and Property Management groups. We provide full service design, installation and maintenance of water-efficient sprinkler and drip irrigation systems that fits the needs of your home and budget.</p>
                <p>For you lighting needs, Lynx Landscaping will not only make your outdoor space or garden more functional, but make it a beautiful place for you, your family and guests to spend time in the evening, all the while adding safety and security to your property.</p>
              </div>
            </div>
            <div className="picUnder"><img src={lighting} alt="" className="pic" /></div>
          </div>
        </div>
    );
  }
}

export default IrrigationLighting;
