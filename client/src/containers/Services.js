import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Service from './Service.js';

class Services extends Component {
  render() {
    return (
        <div>
          <div>
            <SideNav />
          </div>
          <div>
            <Service />
          </div>
        </div>
    );
  }
}

export default Services;
