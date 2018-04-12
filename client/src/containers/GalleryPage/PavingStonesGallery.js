import React, { Component } from "react";
import "../../styles/custom.css";
import Gallery from "../../components/Gallery";
import img1 from "../../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping.jpg";
import img2 from "../../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping_1.JPG";
import img3 from "../../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping_2.JPG";
import img4 from "../../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping_3.JPG";
import img5 from "../../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping_4.png";
import img6 from "../../images/Paving Stones/brick_stone_walkway_path_garden_backyard_landscaping_5.jpg";
import img7 from "../../images/Paving Stones/paving_stone_brick_driveway_walkway_landscaping_1.jpg";
import img8 from "../../images/Paving Stones/paving_stone_brick_driveway_walkway_landscaping_2.jpg";

const alt =
  "boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping";

class PavingStoneGallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        { src: img1, alt: alt },
        { src: img2, alt: alt, ratio: "width" },
        { src: img3, alt: alt },
        { src: img4, alt: alt },
        { src: img5, alt: alt, ratio: "width" },
        { src: img6, alt: alt },
        { src: img7, alt: alt },
        { src: img8, alt: alt }
      ]
    };
  }

  render() {
    return (
      <div className="pavingStoneGallery">
        <Gallery imgs={this.state.imgs} />
      </div>
    );
  }
}

export default PavingStoneGallery;
