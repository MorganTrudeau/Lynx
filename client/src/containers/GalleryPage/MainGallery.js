import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/custom.css";
import Gallery from "../../components/Gallery";
import drainageGallery from "../../images/main-gallery/drainage_gallery.jpg";
import excavationGallery from "../../images/main-gallery/excavation-gallery.jpg";
import hardscapeGallery from "../../images/main-gallery/hardscape-gallery.jpg";
import irrigationGallery from "../../images/main-gallery/irrigation-gallery.jpg";
import lawnMaintenanceGallery from "../../images/main-gallery/lawn-maintenance-gallery.jpg";
import lawnInstallGallery from "../../images/main-gallery/lawn_install_gallery.jpg";
import softscapeGallery from "../../images/main-gallery/softscape-gallery.jpg";
import pavingStonesGalley from "../../images/main-gallery/paving_stones_gallery.jpg";

class MainGallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [
        {
          src: hardscapeGallery,
          alt: "allen_block_brick_retaining_wall_patio_hardscape_landscaping_1",
          title: "Hardscape",
          href: "/gallery/hardscape"
        },
        {
          src: pavingStonesGalley,
          alt: "brick_stone_walkway_path_garden_backyard_landscaping",
          title: "Paving Stones",
          href: "/gallery/paving-stones"
        },
        {
          src: excavationGallery,
          alt: "boulder_wall_construction_excavation_service_landscaping",
          title: "Excavation",
          href: "/gallery/excavation"
        },
        {
          src: lawnInstallGallery,
          alt: "fresh_new_lawn_install_sod_grass_garden_landscaping",
          title: "Lawn Installations",
          href: "/gallery/lawn-install"
        },
        {
          src: irrigationGallery,
          alt: "backyard_garden_lighting_install_lighting_style_landscaping",
          title: "Irrigation & Lighting",
          href: "/gallery/irrigation-lighting"
        },
        {
          src: lawnMaintenanceGallery,
          alt:
            "fertize_fertilizing_lawn_grass_care_maintenance_landscaping_health",
          title: "Lawn Maintenance",
          href: "/gallery/lawn-maintenance"
        },
        {
          src: softscapeGallery,
          alt: "softscape_flower_garden_grow_plants_lawn_beauty_landscape",
          title: "Softscape",
          href: "/gallery/softscape"
        },
        {
          src: drainageGallery,
          alt: "drainage_lawn_garden_grass_landscaping",
          title: "Drainage",
          href: "/gallery/drainage"
        }
      ]
    };
  }

  render() {
    return (
      <div className="mainGallery centerText">
        <div className="">
          <Gallery imgs={this.state.imgs} modal={false} />
        </div>
      </div>
    );
  }
}

export default MainGallery;
