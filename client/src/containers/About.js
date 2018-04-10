import React, { Component } from 'react';
import '../styles/About.css';
import MultiCarousel from '../components/MultiCarousel';
import allen_block_retaining_wall_hardscape_landscaping from '../images/patio-landscape-wall-firepit-belgard.jpg';
import excavation_landscaping_construction from '../images/Excavation Services/excavation_landscaping_construction.jpg';
import retaining_wall_allen_block_landscape from '../images/Hardscape/retaining_wall_allen_block_landscape.JPG';
import lawn_maintenance_square from '../images/Lawn Maintenance/lawn_maintenance_square.jpg';
import softscape_square from '../images/Softscape/softscape_square.jpg';
import construction_excavator_gravel from '../images/construction_excavator_gravel.jpg'

const Button = require('react-bootstrap/lib/Button');

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="about">
          <div className="cell0 centerText whiteText parallax" style={{backgroundImage:`url(${allen_block_retaining_wall_hardscape_landscaping}`,backgroundSize:"cover"}}>
            <div className="smoke centerText cover">
              <h1>Motivated and Passionate...</h1>
              <h6>...and it shows in our work</h6>
            </div>
          </div>
          <div className="cell1 gridRow col3 primaryBGColor whiteText">
            <div>
              <div className="title"><h5>10 Years of Services</h5></div>
              <div className="textBlock">
                <p>Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum assentior qui, nihil tollit quo ut. Sale tincidunt.</p>
              </div>
            </div>
            <div>
              <div className="title"><h5>100,000 Yards of Material</h5></div>
              <div className="textBlock">
                <p>Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum assentior qui, nihil tollit quo ut. Sale tincidunt.</p>
              </div>
            </div>
            <div>
              <div className="title"><h5>Over 5000 Satisfied Customers</h5></div>
              <div className="textBlock">
                <p>Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum assentior qui, nihil tollit quo ut. Sale tincidunt.</p>
              </div>
            </div>
          </div>
          <div className="entry cell2">
            <div className="paddedTextBlock">
              <h2>Lynx Landscaping</h2>
              <h6>A Decade of Excellence</h6>
              <p>
                Lynx Landscaping is a trusted expert in: Hardscape Installation, Lawn Maintenance, Small Project Management, Patios, Irrigation, and several other outdoor design approaches. We pride ourselves on integrity, and promise to deliver a final product that we proudly stand behind. With over 10 years in the industry, there is no job too big or small for our team.
              </p>
              <p>
                At Lynx Landscaping, we’ll work with you in designing a beautiful, yet functional space that seamlessly integrates into your homes natural surroundings. We’ll ensure that we take into account all of your needs and design elements, with a complete understanding of your overall goal.
              </p>
            </div>
          </div>
          <div> 
            <MultiCarousel 
              pictures={[
                {pic:excavation_landscaping_construction, alt:"excavation_landscaping_construction"},
                {pic:retaining_wall_allen_block_landscape, alt:"retaining_wall_allen_block_landscape"},
                {pic:lawn_maintenance_square, alt:"lawn_maintenance_square"},
                {pic:softscape_square, alt:"softscape_square"}
              ]} 
            />
          </div>
          <div className="cell3 parallax" style={{ backgroundImage: `url(${construction_excavator_gravel}`}}>

          </div>
          <div className="entry cell4">
            <div className="paddedTextBlock">
              <h2 className="h2">Proudly Serving the Lower Mainland</h2>
              <h6>Our Home and Our Future</h6>
              <p>Lynx Landscaping was started by Andy Evans, who was born, raised and lived his entire life in the Fraser Valley. Landscaping, building, contracting and real estate is in his blood, going back three generations in the Evans family. Growing up around the building and renovating of homes, he became obsessed with excavating at a very young age, and this progressed into landscape renovations. He now has a decade of landscaping renovation experience, and has put together a talented team ready to tackle the biggest and smallest of challenges!</p>
              <p>Recently rated as a Top-3 Landscaping company for the Fraser Valley, Andy and his team, including key staff having botany and horticultural program education and experience, have expanded their work scope to take on much larger projects. The group as a whole is strongly business minded and motivated.</p>
            </div>
          </div>
          <div className="entry cell5">
            <div className="paddedTextBlock">
              <h2>Our Philosophy</h2>
              <h6>Great Results Start With Great Ideas</h6>
              <p>“I believe in great customer service and quality results. Making money is nice — but the greatest reward is having a customer seeing their landscape work finished to their complete satisfaction, and more. That is called being thrilled with the results!”</p>
              <p>A well designed landscape makes a wonderful first impression and increases the lasting value of the property, and the key behind a great design is a free flow of ideas between you the client, and our company.</p>
              <p>At Lynx Landscaping, we’ll work with you in designing a beautiful, yet functional space that seamlessly integrates into your homes natural surroundings. We’ll ensure that we take into account all of your needs and design elements, with a complete understanding of your overall goal.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;