import React, { Component } from "react";
import "../../styles/custom.css";
import Gallery from "../../components/Gallery";
import img1 from "../../images/Lawn Installations/artificial_turf_yard_lawn_install_landscaping.jpg";
import img2 from "../../images/Lawn Installations/fresh_new_lawn_install_sod_grass_garden_landscaping.jpg";
import img3 from "../../images/Lawn Installations/fresh_new_lawn_install_sod_grass_garden_landscaping_1.JPG";

const alt = "fresh_new_lawn_install_sod_grass_garden_landscaping";

class LawnInstallGallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        { src: img1, alt: alt },
        { src: img2, alt: alt },
        { src: img3, alt: alt }
      ]
    };
  }

  render() {
    return (
      <div className="lawnInstallGallery">
        <Gallery imgs={this.state.imgs} />
      </div>
    );
  }
}

export default LawnInstallGallery;
