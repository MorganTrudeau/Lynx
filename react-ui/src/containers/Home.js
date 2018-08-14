import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import CarouselComp from "../components/Carousel";
import hardscape_flag_stone_patio from "../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_7.JPG";
import paving_stone_driveway from "../images/Paving Stones/paving_stone_driveway_square.JPG";
import excavation_construction from "../images/Excavation Services/excavation_construction_square.png";
import lawn_maintenance from "../images/Lawn Maintenance/lawn_maintenance_square.jpg";
import img1 from "../images/Hardscape/elevate-langley-landscaping-excavation-contracting.jpg";
import burnco_landscape from "../images/Partners/burnco_landscape.png";
import john_deere from "../images/Partners/john_deere.jpg";
import rainco_logo_main from "../images/Partners/rainco_logo_main.png";
import slider1 from "../images/slider1-langley-landscaping-excavation-contracting.jpg";
import slider2 from "../images/slider2-langley-landscaping-excavation-contracting.jpg";

const Button = require("react-bootstrap/lib/Button");

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home">
        <CarouselComp
          pictures={[
            {
              pic: slider1,
              alt: "langley-landscaping-excavation-contracting"
            },
            { pic: slider2, alt: "langley-landscaping-excavation-contracting" }
          ]}
        />
        <div className="entry cell0 centerText">
          <h2 className="h2">FULL SERVICE LANDSCAPING GREATER VANCOUVER</h2>
          <div className="paddedTextBlock">
            <p>
              Lynx Landscaping services manages your project each step of the
              way, from design stages through to the creation of your own
              outdoor retreat. Imagine coming home to your perfect outdoor oasis
              – to unwind and decompress. So let’s get talking. Choose Lynx
              Landscaping, the best landscaping company from Vancouver to
              Langley and beyond.
            </p>
          </div>
          <Link to="/about">
            <Button bsSize="large" className="button">
              <b>More About Lynx</b>
            </Button>
          </Link>
        </div>
        <div className="cell1" style={{ backgroundImage: `url(${img1})` }}>
          <div className="blanket">
            <div className="centerText">
              <h2 className="h2">Elevate Your Outdoor Living Space</h2>
              <h3>Find out how we can help</h3>
              <Link to="/contact">
                <Button bsSize="large" className="buttonReverse smoke">
                  <b>Contact Us</b>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="entry cell2 centerText">
          <h1 className="h1">Plan – Design – Build</h1>
          <h3>YOUR SATISFACTION IS OUR PRIORITY</h3>
        </div>
        <div className="services">
          <div className="service">
            <a href="services/hardscape">
              <img
                src={hardscape_flag_stone_patio}
                alt="hardscape retaining wall stone brick allen block"
                className="image"
              />
            </a>
            <div>
              <div className="title">
                <a href="services/hardscape">
                  <h3>Hardscape</h3>
                </a>
              </div>
              <div className="textBlock">
                <p>
                  Complete your landscape design with timeless natural
                  stonework.
                </p>
                <a href="services/hardscape">
                  <Button className="button">
                    <b>See Projects</b>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="service">
            <a href="services/paving-stones">
              <img
                src={paving_stone_driveway}
                alt="paving stone driving brick"
                className="image"
              />
            </a>
            <div className="title">
              <a href="services/paving-stones">
                <h3>Paving Stones</h3>
              </a>
            </div>
            <div className="textBlock">
              <p>
                Available in different models and hues, pavers can meet all your
                landscaping needs and reflect even the most individualized
                styles
              </p>
              <a href="services/paving-stones">
                <Button className="button">
                  <b>See Projects</b>
                </Button>
              </a>
            </div>
          </div>

          <div className="service">
            <a href="services/excavation-services">
              <img
                src={excavation_construction}
                alt="excavation construction dig land moving"
                className="image"
              />
            </a>
            <div className="title">
              <a href="services/excavation-services">
                <h3>Excavation</h3>
              </a>
            </div>
            <div className="textBlock">
              <p>
                We offer heavy duty services such as trenching, backfilling,
                leveling and grading, pool decommissioning and more.
              </p>
              <a href="services/excavation-services">
                <Button className="button">
                  <b>See Projects</b>
                </Button>
              </a>
            </div>
          </div>

          <div className="service">
            <a href="services/lawn-maintenance">
              <img
                src={lawn_maintenance}
                alt="lawn care maintenance landscaping"
                className="image"
              />
            </a>
            <div className="title">
              <a href="services/lawn-maintenance">
                <h3>Lawn Maintenance</h3>
              </a>
            </div>
            <div className="textBlock">
              <p>
                Installing beautiful healthy lawns that will transform the look
                and feel of any backyard.
              </p>
              <a href="services/lawn-maintenance">
                <Button className="button">
                  <b>See Projects</b>
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="cell3 centerText">
          <div className="banner">
            <h2>Trusted Partners</h2>
            <h6>Helping us deliver results</h6>
          </div>
          <div className="entry logos">
            <div>
              <img src={burnco_landscape} alt="burnco" height="100px" />
            </div>
            <div>
              <img src={john_deere} alt="john deere" height="100px" />
            </div>
            <div>
              <img
                src={rainco_logo_main}
                alt="rainco irrigation"
                height="100px"
              />
            </div>
          </div>
        </div>
        <div className="cell4" />
      </div>
    );
  }
}

export default Home;
