import React, { Component } from "react";
import "../styles/custom.css";
import Form from "../components/Form";
import Iframe from "react-iframe";

const Button = require("react-bootstrap/lib/Button");

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contact">
        <div className="grad" />
        <div className="cell0 entry centerText">
          <h2>We Are Excited to Hear Your Ideas</h2>
          <h6>Your just a few clicks away from starting your new project.</h6>
          <div className="wrapper">
            <div className="rightText">
              <p>8258 207a Langley</p>
              <p>British Columbia, Canada</p>
            </div>
            <div className="leftText">
              <p>
                <b>Tel:</b> +1-604-818-4736
              </p>
              <p>
                <b>Email:</b> info@lynxlandscaping.ca
              </p>
            </div>
          </div>
          <div>
            <div className="centerText">
              <div style={{ margin: "0 auto", marginTop: "30px" }}>
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.530147449993!2d-122.64935488486357!3d49.152544687904545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d185e81f5eaf%3A0xdb45156856ae0052!2s8258+207A+St%2C+Langley+Twp%2C+BC+V2Y+0N4!5e0!3m2!1sen!2sca!4v1523332860015"
                  width="400"
                  height="250"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cell1 primaryBGColor whiteText">
          <Form />
        </div>
      </div>
    );
  }
}

export default Home;
