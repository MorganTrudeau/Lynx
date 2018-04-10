import React, { Component } from 'react';
import maintenance1 from '../images/Lawn Maintenance/fertize_fertilizing_lawn_grass_care_maintenance_landscaping_health.jpg';
import maintenance2 from '../images/Lawn Maintenance/lime_on_grass_lawn_care_maintenance_landscaping.jpeg';
import '../styles/custom.css';

const Button = require('react-bootstrap/lib/Button');

class LawnMaintenance extends Component {
  render() {
    return (
        <div className="lawnMaintenance centerText">
          <div className="banner greyBG whiteText">
            <h2>Lawn Maintenance</h2>
            <h6>Lawn Maintenance Equals a Healthy Lawn</h6>
          </div>
          <div className="gridRow col2">
            <div className="picUnder"><img src={maintenance2} alt="" className="picFixed" /></div>
            <div className="textOverlap marginTop centerText">
              <div className="textBlock">
                <h6>We Use the Best Products for the Best Results</h6>
                <p>Lawn Maintenance includes fertilizer, top dressing and overseeding programs, which is a more economical way of maintaining your lawn. And good nutrition, just like for ourselves, is the key to having a healthy lawn. A well-fertilized lawn will better overcome insects, weed infestations and disease development. A proper fertilization program from Lynx Landscaping is your first line of defense.</p>
                <p>Lynx Landscaping can implement a good liming and fertilization program for your lawn, and all top dressing is done using fully tested soil. This program will help to fill out a bare or patchy lawn in just a matter of weeks.</p>
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
                <h6>The Experts at Lynx Landscaping can Help</h6>
                <p>As your lawn and surrounding vegetation mature each year, it is a good idea to consider adding new grass seed into the mix. Weak areas of your lawn can appear due to drought or insect infestation from the previous year. Certified seed ensures a high level of performance. The experts at Lynx Landscaping will work with you to develop an affordable customized lawn care and property management program that will result in a lush, healthy green lawn.</p>
              </div>
            </div>
            <div className="picUnder"><img src={maintenance1} alt="" className="picWide" /></div>
          </div>
        </div>
    );
  }
}

export default LawnMaintenance;
