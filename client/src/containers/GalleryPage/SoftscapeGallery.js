import React, { Component } from "react";
import "../../styles/custom.css";
import Gallery from "../../components/Gallery";
import img1 from "../../images/Softscape/softscape_flower_garden_grow_plants_lawn_beauty_landscape.jpg";
import img2 from "../../images/Softscape/softscape_flower_garden_grow_plants_lawn_beauty_landscape_1.jpg";
import img3 from "../../images/Softscape/softscape_flower_garden_grow_plants_lawn_beauty_landscape_2.jpg";
import img4 from "../../images/Softscape/softscape_flower_garden_grow_plants_lawn_beauty_landscape_3.jpg";
import img5 from "../../images/Softscape/softscape_flower_garden_grow_plants_lawn_beauty_landscape_4.jpg";
import img6 from "../../images/Softscape/softscape_flower_garden_grow_plants_lawn_beauty_landscape_5.jpg";
import img7 from "../../images/Softscape/softscape_flower_garden_plant_grow_beauty_landscaping_1.jpg";
import img8 from "../../images/Softscape/softscape_flower_garden_plant_grow_beauty_landscaping_2.jpg";

const alt =
  "boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping";

class SoftScapeGallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        { src: img1, alt: alt },
        { src: img2, alt: alt },
        { src: img3, alt: alt },
        { src: img4, alt: alt },
        { src: img5, alt: alt },
        { src: img6, alt: alt },
        { src: img7, alt: alt },
        { src: img8, alt: alt }
      ]
    };
  }

  render() {
    return (
      <div className="softscapeGallery">
        <Gallery imgs={this.state.imgs} />
      </div>
    );
  }
}

export default SoftScapeGallery;
