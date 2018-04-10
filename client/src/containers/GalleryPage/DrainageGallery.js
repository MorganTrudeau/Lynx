import React, { Component } from 'react';
import '../../styles/custom.css';
import Gallery from '../../components/Gallery';
import d1 from '../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_1.jpg';
import d2 from '../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_2.jpg';
import d3 from '../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_2.jpg';
import d4 from '../../images/Drainage Systems/drainage_lawn_garden_grass_landscaping_4.jpg';

const alt = "Drainage Systems/drainage_lawn_garden_grass_landscaping";

class DrainageGallery extends Component {
  constructor() {
    super();
    this.state = [{img:d1,alt:alt},{img:d2,alt:alt},{img:d3,alt:alt},{img:d4,alt:alt}];
  }

  render() {
    return (
        <div className="drainageGallery">
          <Gallery imgs={this.state.imgs} />
        </div>
    );
  }
}

export default DrainageGallery;
