import React, { Component } from "react";
import '../styles/Sub.css';
import {Navbar,NavDropdown,Nav}  from 'react-bootstrap'
export default class SubnavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginBottom:"6px"}} />
  <Navbar.Collapse id="basic-navbar-nav">
   
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/About">About Us</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Aes">AES (Automation Engineering Solutions)</NavDropdown.Item>
        <NavDropdown.Item href="/Sts">STS (Safety Training Stimulators)</NavDropdown.Item>
        <NavDropdown.Item href="/Mhs">MHS (Material Handling Solutions)</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Industry Service" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Automotive">Automotive / Engineering</NavDropdown.Item>
        <NavDropdown.Item href="/Battery">Battery / Tyre Industry</NavDropdown.Item>
        <NavDropdown.Item href="/Food">Food & Beverages/ Food Processing Equipments / Pharmha/ Dairy</NavDropdown.Item>
        <NavDropdown.Item href="/FMCG">Ecommerce / FMCG</NavDropdown.Item>
        <NavDropdown.Item href="/Electronics">Electronics Industry</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/Services">Service</Nav.Link>
      <Nav.Link href="/Projects">On Going Projects</Nav.Link>
      <Nav.Link href="/Contact">Contact Us</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    );
  }
}
