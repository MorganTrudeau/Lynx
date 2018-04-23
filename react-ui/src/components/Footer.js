import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/component.css";
import Instagram from "react-icons/lib/fa/instagram";
import Email from "react-icons/lib/io/email";
import Facebook from "react-icons/lib/fa/facebook-official";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="gridRow col3">
                    <div className="cell0">
                        <div className="gridRow col3 mediaIcons">
                            <a href="https://www.facebook.com/LynxLandscaping/">
                                <Facebook
                                    className="icon"
                                    color="white"
                                    size="25px"
                                />
                            </a>
                            <a href="https://www.instagram.com/lynxlandscaping/?hl=en">
                                <Instagram
                                    className="icon"
                                    color="white"
                                    size="25px"
                                />
                            </a>
                            <Link to="/contact">
                                <Email
                                    className="icon email"
                                    color="white"
                                    size="30px"
                                />
                            </Link>
                        </div>
                        <p>8258 207a Langley</p>
                        <p>T: 604.530.5646</p>
                    </div>
                    <div className="cell1 centerText">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <p className="rights">
                            ©2018 Lynx Landscaping Ltd. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
