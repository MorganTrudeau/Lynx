import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Hardscape from './Hardscape';
import PavingStones from './PavingStones';
import LawnInstall from './LawnInstall';
import IrrigationLighting from './IrrigationLighting';
import Drainage from './Drainage';
import LawnMaintenance from './LawnMaintenance';
import Excavation from './Excavation';
import Softscape from './Softscape';


const Button = require('react-bootstrap/lib/Button');

class Service extends Component {
  render() {
    return (
        <Switch>
           <Route path='/services/hardscape' component={Hardscape} />
           <Route path='/services/pavingstones' component={PavingStones} />
           <Route path='/services/lawninstall' component={LawnInstall} />
           <Route path='/services/irrigationlighting' component={IrrigationLighting} />
           <Route path='/services/drainage' component={Drainage} />
           <Route path='/services/lawnmaintenance' component={LawnMaintenance} />
           <Route path='/services/excavation' component={Excavation} />
           <Route path='/services/softscape' component={Softscape} />
        </Switch>
    );
  }
}

export default Service;
