import React from 'react';
import '../../Components/ProductsPage/Product.css'
import {Nav}  from 'react-bootstrap'

const Automotive = () =>{
    return(
        <div className="product">
            <h4>Industrial Automations for Automotive / Engineering</h4>
            <p>MMT is a leading manufacturer of <Nav.Link href="/Mhs" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyors</b></Nav.Link> and providing <b>Material Handling Solutions</b> for the Conveying  of Vehicle Components, Spares Parts and Automotive Bodies through the various stages of an assembly line for their production operations. MMT offers a wide range of <b>Material Handling Conveyors</b> for different applications such as</p>
                <div className="list">
                <ul>
                    <li>Providing online Automation Solutions for Automated order – filling stations.</li>
                    <li>Computerized Order- Picking Aisles & Sortation’s Systems</li>
                    <li>Automations Solutions for the movement of Overhead Cranes to move large & heavy loads on the assembly line.</li>
                    <li>Robotic Pick & Place Systems</li>
                    <li>Conveyors Systems Automations for Assembly line at different stations for multipurpose operations</li>
                </ul>
            </div>
            <p>MMT delivers solutions that increase the efficiency of production flow and also we process from <Nav.Link href="/Aes" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyor Components to Automations Turn-Key Solutions.</b></Nav.Link></p>
        
        </div>
    )
}

export default Automotive;