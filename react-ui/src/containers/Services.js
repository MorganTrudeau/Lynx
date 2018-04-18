import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Hardscape from "./Services/Hardscape";
import PavingStones from "./Services/PavingStones";
import LawnInstall from "./Services/LawnInstall";
import IrrigationLighting from "./Services/IrrigationLighting";
import Drainage from "./Services/Drainage";
import LawnMaintenance from "./Services/LawnMaintenance";
import Excavation from "./Services/Excavation";
import Softscape from "./Services/Softscape";

class Services extends Component {
  render() {
    return (
      <Switch>
        <Route path="/services/hardscape" component={Hardscape} />
        <Route path="/services/paving-stones" component={PavingStones} />
        <Route path="/services/lawn-installation" component={LawnInstall} />
        <Route
          path="/services/irrigation-lighting"
          component={IrrigationLighting}
        />
        <Route path="/services/drainage-systems" component={Drainage} />
        <Route path="/services/lawn-maintenance" component={LawnMaintenance} />
        <Route path="/services/excavation-services" component={Excavation} />
        <Route path="/services/softscape" component={Softscape} />
      </Switch>
    );
  }
}

export default Services;
