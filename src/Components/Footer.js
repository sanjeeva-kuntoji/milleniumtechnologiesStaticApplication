import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Nav}  from 'react-bootstrap'

import '../styles/Footer.css';
const Footer = ()=> {
    return(
        <div className="footer">
            {/* <div className="icon">
            <Nav.Link href='/'>milleniumtechnologies.org @2021 </Nav.Link>
                 <Nav.Link href='https://wa.me/8892629981'><i className="fa fa-whatsapp"  style={{backgroundColor: "green"}} aria-hidden="true"></i> </Nav.Link>
                 <Nav.Link href='/'><i className="fa fa-facebook-f" style={{backgroundColor: "#007bff"}} aria-hidden="true"></i></Nav.Link>
                 <Nav.Link href='/'> <i className="fa fa-youtube-play" style={{backgroundColor: "red"}} aria-hidden="true"></i></Nav.Link>
                 <Nav.Link href='/'><i className="fa fa-twitter" style={{backgroundColor: "#007bff"}} aria-hidden="true"></i></Nav.Link>
            </div> */}
            <ul>
  <li> <Nav.Link href='/' style={{color:"white"}}><p>milleniumtechnologies.org @2021</p> </Nav.Link></li>
  <li>  <Nav.Link href='https://wa.me/+918892629981'><i className="fa fa-whatsapp"  style={{backgroundColor: "green"}} aria-hidden="true"></i> </Nav.Link>
               </li>
  <li> <Nav.Link href='/'><i className="fa fa-facebook-f" style={{backgroundColor: "#007bff"}} aria-hidden="true"></i></Nav.Link>
                </li>
  <li>  <Nav.Link href='/'> <i className="fa fa-youtube-play" style={{backgroundColor: "red"}} aria-hidden="true"></i></Nav.Link>
               </li>
               <li> <Nav.Link href='/'><i className="fa fa-twitter" style={{backgroundColor: "#007bff"}} aria-hidden="true"></i></Nav.Link></li>
</ul>
    </div>
    )
};

export default Footer;