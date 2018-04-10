import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../styles/custom.css';
import Gallery from '../../components/Gallery';

class MainGallery extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="mainGallery">
          <div className="entry">
            <Gallery />
          </div>
        </div>
    );
  }
}

export default MainGallery;
