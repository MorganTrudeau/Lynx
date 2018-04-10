import React, { Component } from "react";
import "../../styles/custom.css";
import Gallery from "../../components/Gallery";
import e1 from "../../images/Excavation Services/boulder_wall_construction_excavation_service_landscaping.JPG";
import e2 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_10.jpg";
import e3 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_11.jpg";
import e4 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_12.jpg";
import e5 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_13.jpg";
import e6 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_14.jpg";
import e7 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_15.jpg";
import e8 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_1.jpg";
import e9 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_17.jpg";
import e10 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_18.jpg";
import e11 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_19.jpg";
import e12 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_2.jpg";
import e13 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_3.jpg";
import e14 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_4.jpg";
import e15 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_5.png";
import e16 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_6.jpg";
import e17 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_7.jpg";
import e18 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_8.jpg";
import e19 from "../../images/Excavation Services/boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping_9.jpg";

const alt =
  "boulder_wall_removal_dirt_land_design_construction_excavation_service_landscaping";

class ExcavationGallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        { src: e1, alt: alt },
        { src: e2, alt: alt },
        { src: e3, alt: alt },
        { src: e4, alt: alt },
        { src: e5, alt: alt },
        { src: e6, alt: alt },
        { src: e7, alt: alt },
        { src: e8, alt: alt },
        { src: e9, alt: alt },
        { src: e10, alt: alt },
        { src: e11, alt: alt },
        { src: e12, alt: alt },
        { src: e13, alt: alt },
        { src: e14, alt: alt },
        { src: e15, alt: alt },
        { src: e16, alt: alt },
        { src: e17, alt: alt },
        { src: e18, alt: alt },
        { src: e19, alt: alt }
      ]
    };
  }

  render() {
    return (
      <div className="excavationGallery">
        <Gallery imgs={this.state.imgs} />
      </div>
    );
  }
}

export default ExcavationGallery;
