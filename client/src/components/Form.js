import React, { Component } from "react";
import "../styles/custom.css";

const Button = require("react-bootstrap/lib/Button");
const FormControl = require("react-bootstrap/lib/FormControl");
const Checkbox = require("react-bootstrap/lib/Checkbox");
const FormGroup = require("react-bootstrap/lib/FormGroup");
const ControlLabel = require("react-bootstrap/lib/ControlLabel");

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class Form extends Component {
  render() {
    return (
      <div className="formComp">
        <div className="formWrapper">
          <div className="form">
            <FormControl componentClass="select" placeholder="Title">
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </FormControl>
            <FormControl type="text" placeholder="First Name*" />
            <FormControl type="text" placeholder="Last Name*" />
            <FormControl type="text" placeholder="Telephone" />
            <FormControl type="text" placeholder="Email*" />
          </div>
          <div className="form">
            <FormControl type="text" placeholder="Address" />
            <FormControl type="text" placeholder="City" />
            <FormControl type="text" placeholder="Province" />
            <FormControl type="text" placeholder="Postal Code" />
            <FormControl type="text" placeholder="Country" />
          </div>
        </div>
        <div className="form textArea">
          <FormControl
            componentClass="textarea"
            placeholder="Job Description"
          />
        </div>
        <div className="centerText">
          <Button className="formButton whiteButton">Get Free Quote</Button>
        </div>
      </div>
    );
  }
}

export default Form;
