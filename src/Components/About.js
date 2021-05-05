import React from 'react'
import {Nav}  from 'react-bootstrap'
import '../styles/About.css';
 const About =() =>{
    return(
<div className="About">
    <div className="Company-info">
<p>Millenium Technologies came into existence in 2013 with aim of serving quality products to Customers. Millenium is Pioneer and leader in serving better <Nav.Link href="/Sts" style={{padding:"0px",display:"inline",color:"black"}}><b>Safety Training Stimulators (STS)</b></Nav.Link> & <Nav.Link href="/Aes" style={{padding:"0px",display:"inline",color:"black"}}><b>Automation Engineering Solutions (AES).</b></Nav.Link>Innovation & Quality is always a most priority of Millenium Technologies and gives appropriate solutions for customers to reduce their manufacturing complexity.</p>
<p>Millenium Technologies is Partnership firm having vast experience in putting up brain in executing many successful <b>Automation Projects</b> and providing<Nav.Link href="/Aes" style={{padding:"0px",display:"inline",color:"black"}}><b>Turnkey Solutions</b></Nav.Link> across various Industry Segments.</p>
<p>We handle Customised projects in Different segments related to <b>AES, STS, SPMs, Material Handling Equipment’s </b>which Includes all Types Conveyors Systems, Jigs & Fixtures, Vision Systems, Quality Gauges and etc...</p>
<p>The solution which we offer is at par with any of our competitors at very reasonable cost and excellent quality.</p>
<h4 className="CAPABILITIES">MILLENIUM CAPABILITIES</h4>
<p>Our strong Technical expertise in <b>SPMs,</b> Vision System, Jig & Fixtures, Checking gauges, Conveyors and <b>Safety Training Stimulators</b> which enable us to analyse and establish the discipline specific detailed requirements and then develop a Customized overall Project specific methodology to produce the desired 3D Models with an integrated approach that satisfies the overall short & long term Objectives of a Project.</p>
 
   <h4 className="CAPABILITIES">MILLENIUM STRENGTH</h4>
   <ul>
       <li>Design & Engineering		
          </li>
          <li> 
          Industrial Automations		
          </li>
          <li>
              Instrumentations		
          </li>
          <li>
          Assembly & Manufacturing		
          </li>
          <li>
          Erection  & Commissioning		
          </li>
          <li>
              After Sales Service  Support
          </li>
   </ul>
</div>

</div>
    )
}
export default About;