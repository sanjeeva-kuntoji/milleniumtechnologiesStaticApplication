import React from 'react';
import '../../Components/ProductsPage/Product.css'
import {Nav}  from 'react-bootstrap'


const FMCG = () =>{
    return(
        <div className="product">
        <h4>Industrial Automations for FMCG / E Commerce Industry</h4>
        <p>	MMT is a leading manufacturer of <Nav.Link href="/Mhs" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyors</b></Nav.Link> and manufacturing of <b>Automation Equipment</b> for FMCG Industry as per the production operations for processing lines. MMT offers a wide range of FMCG products processing conveyors for different applications at various stages such as </p>
        <div className="list">
            <ul>
                <li> Primary & Secondary Packaging Line	</li>
                <li> Products Handling Automations as per the requirement</li>
                <li> Pallet / Box Handling Automation Conveyor lines</li>
                <li> Case packer Automation line</li>
                <li> Providing <b>Turnkey Solutions</b> for complete setup</li>
                <li> Warehouse Automations for Storage purpose.</li>
            </ul>
        </div>
        <p>MMT create Value added Solutions across your entire <b>FMCG / E Commerce Industry</b> manufacturing process. Dedicated to every phase of your production, we support you with from front-of-line Automations, Processing, and Picking & Handling and till the end-of-line applications.</p>
    </div>
    )
}

export default FMCG;