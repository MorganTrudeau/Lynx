import React, { Component } from "react";
import "../../styles/custom.css";
import Gallery from "../../components/Gallery";
import img1 from "../../images/Lawn Maintenance/fertize_fertilizing_lawn_grass_care_maintenance_landscaping_health.jpg";
import img2 from "../../images/Lawn Maintenance/fertize_fertilizing_lawn_grass_care_maintenance_landscaping_health_1.jpg";
import img3 from "../../images/Lawn Maintenance/fertize_fertilizing_lawn_grass_care_maintenance_landscaping_health_3.jpg";
import img4 from "../../images/Lawn Maintenance/lime_on_grass_lawn_care_maintenance_landscaping.jpeg";

const alt =
  "boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping";

class LawnMaintenanceGallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        { src: img1, alt: alt },
        { src: img2, alt: alt },
        { src: img3, alt: alt },
        { src: img4, alt: alt }
      ]
    };
  }

  render() {
    return (
      <div className="lawnMaintenanceGallery">
        <Gallery imgs={this.state.imgs} />
      </div>
    );
  }
}

export default LawnMaintenanceGallery;
