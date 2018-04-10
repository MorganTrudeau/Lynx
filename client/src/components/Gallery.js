import React, { Component } from "react";
import "../styles/custom.css";
import excavation2 from "../images/Excavation Services/boulder_wall_construction_excavation_service_landscaping.JPG";
import Fade from "react-reveal/Fade";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        {this.props.imgs
          ? this.props.imgs.map(img => (
              <a href={img.href}>
                <div className="imgDiv">
                  <Fade>
                    <div className="cover tint lightTint">
                      <img src={img.src} alt={img.alt} className="img" />
                    </div>
                    <div className={img.title ? "hoverDiv" : ""}>
                      <h6>{img.title}</h6>
                    </div>
                  </Fade>
                </div>
              </a>
            ))
          : null}
      </div>
    );
  }
}

export default Gallery;
