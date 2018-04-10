import React, { Component } from 'react';
import '../../styles/custom.css';
import Gallery from '../../components/Gallery';
import img1 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_1.jpg';
import img2 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_2.JPG';
import img3 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_3.jpg';
import img4 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_4.jpg';
import img5 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_5.JPG';
import img6 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_6.jpg';
import img7 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_7.JPG';
import img8 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_8.JPG';
import img9 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_9.JPG';
import img10 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_10.JPG';
import img11 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_11.JPG';
import img12 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_12.JPG';
import img13 from '../../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_13.jpg';

const alt = "boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping";

class HardscapeGallery extends Component {
  constructor() {
    super();
    this.state = [
      {img:img1,alt:alt},
      {img:img2,alt:alt},
      {img:img3,alt:alt},
      {img:img4,alt:alt},
      {img:img5,alt:alt},
      {img:img6,alt:alt},
      {img:img7,alt:alt},
      {img:img8,alt:alt},
      {img:img9,alt:alt},
      {img:img10,alt:alt},
      {img:img11,alt:alt},
      {img:img12,alt:alt},
      {img:img13,alt:alt}
    ];
  }

  render() {
    return (
        <div className="hardscapeGallery">
          <Gallery imgs={this.state.imgs} />
        </div>
    );
  }
}

export default HardscapeGallery;
