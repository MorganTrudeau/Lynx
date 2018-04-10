import React, { Component } from 'react';
import '../../styles/custom.css';
import Gallery from '../../components/Gallery';
import img1 from '../../images/Irrigation & Lighting/backyard_garden_lighting_install_lighting_style_landscaping.jpg';
import img2 from '../../images/Irrigation & Lighting/irrigation_healthy_lawn_water_grass_system_install_landscaping.jpg';

const alt = "boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping";

class IrrigationLightingGallery extends Component {
  constructor() {
    super();
    this.state = [
      {img:img1,alt:alt},
      {img:img2,alt:alt}
    ];
  }

  render() {
    return (
        <div className="irrigationLightingGallery">
          <Gallery imgs={this.state.imgs} />
        </div>
    );
  }
}

export default IrrigationLightingGallery;
