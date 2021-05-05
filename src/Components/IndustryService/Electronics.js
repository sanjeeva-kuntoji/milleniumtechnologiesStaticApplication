import React from 'react';
import '../../Components/ProductsPage/Product.css'
import {Nav}  from 'react-bootstrap'


const Electronics = () =>{
    return(
        <div className="product">
        <h4>Industrial Automations For Electronics Industry</h4>
        <p>MMT is a leading manufacturer of <Nav.Link href="/Mhs" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyors</b></Nav.Link> and manufacturing of <b>Automation Equipment</b> for Electronics Industry as per the production Cycle operations. MMT offers a wide range of automations for major areas for different applications at various stages such as</p>
        <div className="list">
            <ul>
                <li>Material and Component Handling Conveyors for assembly lines.</li>
                <li>Automations for handling delicate Components for different operations such as coating the PCBs, applying sealants/ adhesives and inspecting and testing the boards, etc.</li>
                <li>Automation for inspections and testing to Inspect electronics assemblies features through Vision Systems.</li>
                <li>Automation Solutions for Primary & Secondary Packaging lines.</li>
                <li>Providing <Nav.Link href="/Aes" style={{padding:"0px",display:"inline",color:"black"}}><b>Turnkey Solutions</b></Nav.Link> for complete setup</li>
            </ul>
        </div>
    </div>
    )
}

export default Electronics;