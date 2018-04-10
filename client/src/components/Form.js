import React, { Component } from 'react';
import '../styles/custom.css';
import Iframe from 'react-iframe';

const Button = require('react-bootstrap/lib/Button');
const FormControl = require('react-bootstrap/lib/FormControl');
const Checkbox = require('react-bootstrap/lib/Checkbox');
const FormGroup = require('react-bootstrap/lib/FormGroup');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');

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
        <div className="textArea">
          <FormControl componentClass="textarea" placeholder="Job Description" style={{ width: "100%" }} />
        </div>
        <div className="centerText">
          <Button className="formButton whiteButton">Get Free Quote</Button>
        </div>
        <div className="entry centerText">
          <div style={{ margin: "0 auto"}}>
          <Iframe 
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.530147449993!2d-122.64935488486357!3d49.152544687904545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d185e81f5eaf%3A0xdb45156856ae0052!2s8258+207A+St%2C+Langley+Twp%2C+BC+V2Y+0N4!5e0!3m2!1sen!2sca!4v1523332860015"
            width="600"
            height="450"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
