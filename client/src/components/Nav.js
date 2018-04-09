import React, { Component } from 'react';
import '../styles/component.css';

const Nav = require('react-bootstrap/lib/Nav');
const Navbar = require('react-bootstrap/lib/Navbar');
const NavItem = require('react-bootstrap/lib/NavItem');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');

class Navigation extends Component {
  render() {
    return (
    	<div>
			<Navbar inverse collapseOnSelect fixedTop>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="/"></a>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav pullRight>
			      <NavItem eventKey={1} href="/">
			        Home
			      </NavItem>
			      <NavItem eventKey={2} href="/about">
			        About Us
			      </NavItem>
			      <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
			        <MenuItem eventKey={3.1} href="/services/hardscape">Hardscape</MenuItem>
			        <MenuItem eventKey={3.2} href="/services/railings">Railings</MenuItem>
			        <MenuItem eventKey={3.3} href="/services/canopies">Canopies</MenuItem>
			        <MenuItem eventKey={3.3} href="/services/renovations">Renovations</MenuItem>
			      </NavDropdown>
			      <NavItem eventKey={2} href="/contact">
			        Contact
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
    	</div>
    );
  }
}

export default Navigation;
