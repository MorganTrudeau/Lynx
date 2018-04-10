import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/custom.css';
import HardscapeGallery from './GalleryPage/HardscapeGallery';
import PavingStonesGallery from './GalleryPage/PavingStonesGallery';
import LawnInstallGallery from './GalleryPage/LawnInstallGallery';
import IrrigationLightingGallery from './GalleryPage/IrrigationLightingGallery';
import DrainageGallery from './GalleryPage/DrainageGallery';
import LawnMaintenanceGallery from './GalleryPage/LawnMaintenanceGallery';
import ExcavationGallery from './GalleryPage/ExcavationGallery';
import SoftscapeGallery from './GalleryPage/SoftscapeGallery';
import MainGallery from './GalleryPage/MainGallery';


class GalleryPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="galleryPage">
          <Switch>
            <Route exactPath='/gallery' component={MainGallery} />
            <Route path='/gallery/hardscape' component={HardscapeGallery} />
            <Route path='/gallery/paving-stones' component={PavingStonesGallery} />
            <Route path='/gallery/lawn-installation' component={LawnInstallGallery} />
            <Route path='/gallery/irrigation-lighting' component={IrrigationLightingGallery} />
            <Route path='/gallery/drainage-systems' component={DrainageGallery} />
            <Route path='/gallery/lawn-maintenance' component={LawnMaintenanceGallery} />
            <Route path='/gallery/excavation-services' component={ExcavationGallery} />
            <Route path='/gallery/softscape' component={SoftscapeGallery} />
          </Switch>
        </div>
    );
  }
}

export default GalleryPage;
