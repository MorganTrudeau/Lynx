import React, { Component } from 'react';
import '../styles/custom.css';
import excavation2 from '../images/Excavation Services/boulder_wall_construction_excavation_service_landscaping.JPG';

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
          <div className="imgDiv">
            <img src={excavation2} alt="" className="img" />
          </div>
      </div>
    );
  }
}

export default Gallery;
