import React, { Component } from 'react';
import '../styles/custom.css';
import Form from '../components/Form';

const Button = require('react-bootstrap/lib/Button');

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="contact">
          <div className="grad"></div>
            <div className="cell0 entry centerText">
              <h2>We Are Excited to Hear Your Ideas</h2>
              <h6>Your just a few clicks away from starting your new project.</h6>
              <p><b>Tel:</b> +1-604-818-4736</p>
              <p><b>Email:</b> info@lynxlandscaping.ca</p>
              <p>8258 207a Langley</p>
              <p>British Columbia, Canada</p>
            </div>
          <div className="cell1 primaryBGColor whiteText entry">
            <Form />
          </div>
        </div>
    );
  }
}

export default Home;
