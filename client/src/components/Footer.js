import React, { Component } from 'react';
import '../styles/component.css';
import facebook from '../images/SocialMedia/facebook.png';
import instagram from '../images/SocialMedia/instagram.png';
import email from '../images/SocialMedia/email.png';

const Button = require('react-bootstrap/lib/Button');

class Footer extends Component {
  render() {
    return (
    	<div className="footer">
    		<div className="gridRow col3">
	    		<div className="cell0">
                    <div className="gridRow col3 mediaIcons">
                        <img src={facebook} alt="social media facebook" height="20px" className="mediaIcon" />
                        <img src={instagram} alt="social media instagram" height="25px" style={{ marginTop: "-2px"}} className="mediaIcon" />
                        <img src={email} alt="social media email" height="25px" style={{ marginTop: "-2px"}} className="mediaIcon" />
                    </div>
                    <p>5645 - 199th Street, Langley, BC, V3A 1H9</p>
                    <p>T: 604.530.5646</p>
	    		</div>
	    		<div className="cell1 centerText">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <p className="rights">©2018 Lynx Landscaping Ltd. All Rights Reserved.</p>
	    		</div>
    		</div>
    	</div>
    );
  }
}

export default Footer;
