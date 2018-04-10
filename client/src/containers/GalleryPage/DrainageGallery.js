import React, { Component } from "react";
import "../../styles/custom.css";
// import Gallery from "../../components/Gallery";
import Gallery from "react-grid-gallery";
import d1 from "../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_1.jpg";
import d2 from "../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_2.jpg";
import d3 from "../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_3.jpg";
import d4 from "../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_4.jpg";

const alt = "Drainage Systems/drainage_lawn_garden_grass_landscaping";

const IMAGES = [
  {
    src: d1,
    thumbnail: d1,
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: d2,
    thumbnail: d2,
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: d3,
    thumbnail: d3,
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];

class DrainageGallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        { src: d1, alt: alt },
        { src: d2, alt: alt },
        { src: d3, alt: alt },
        { src: d4, alt: alt }
      ]
    };
  }

  render() {
    return (
      <div className="drainageGallery">
        <Gallery images={IMAGES} />
      </div>
    );
  }
}

export default DrainageGallery;
