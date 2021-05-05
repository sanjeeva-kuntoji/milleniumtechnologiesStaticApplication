import React from 'react';
import '../../Components/ProductsPage/Product.css'
import {Nav}  from 'react-bootstrap'


const Battery = () =>{
    return(
        <div className="product">
        <h4>Industrial Automation for Battery Industry </h4>
        <p>MMT is a leading manufacturer of <Nav.Link href="/Mhs" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyors</b></Nav.Link> and manufacturing <b>Automation Equipment</b> for handling Battery as per the production operations for their  processing lines. MMT offers a wide range of battery manufacturing  conveyors lines for different applications such as</p>
        <div className="list">
            <ul>
                <li>Battery cell handling</li>
                <li>Battery case handling</li>
                <li>Battery leakage test, aging, and curing Lines</li>
                <li>Battery activating and charging processes</li>
                <li>Battery logistics packing or module assembly</li>
                <li>Handling other heavy products for Pallets handling etc. in ware Houses.</li>
            </ul>
        </div>
        <p>MMT delivers solutions that increase the efficiency of production flow and also we process from <Nav.Link href="/Aes" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyor Components to Automations Turn-Key Solutions.</b></Nav.Link></p>
  
        <h4>Industrial Automation for Tyre Industry</h4>
   <p>MMT is a leading manufacturer of <b>Conveyors</b> and Manufacturing of <b>Automation Equipment </b> for handling Tyre as per the production operations. MMT offers a wide range of conveyors at different stages for different applications such as</p>
   <div className="list">
<ul>
    <li>Conveyor System for Raw materials handling</li>
    <li>Inclined Conveyor for Rubber  mixing Processing lines</li>
    <li>Belt conveyors systems for tyres before curing</li>
    <li>Conveying systems for tyres Handling after curing (roller conveyors, belt conveyors)</li>
    <li>Conveyors lines for Sorting & Buffering</li>
    <li>Solutions for Rubber Extrusion line Process</li>
    <li>Automations & Conveyor Systems for Handling Green Tyres for Storage </li>
    <li>Trench Conveyor Lines</li>
    <li>Finished Tires Handling Applications for at various stages such as inspection, quality Checks, labelling etc.. & many more applications.</li>

</ul>
   </div>
   <p>MMT delivers solutions that increase the efficiency of production flow and also we process from <Nav.Link href="/Aes" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyor Components to Automations Turn-Key Solutions.</b></Nav.Link></p>
  
    </div>
    )
}

export default Battery;