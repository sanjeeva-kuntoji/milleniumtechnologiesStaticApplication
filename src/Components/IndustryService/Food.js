import React from 'react';
import '../../Components/ProductsPage/Product.css'
import {Nav}  from 'react-bootstrap'

const Food = () =>{
    return(
        <div className="product">
        <h4>Industrial Automations for Food Processing Industries</h4>
        <p>	MMT is a leading manufacturer of <Nav.Link href="/Mhs" style={{padding:"0px",display:"inline",color:"black"}}><b>Conveyors</b></Nav.Link> and manufacturing of <b>Automation Equipment</b> for Food Processing as per the production operations for processing lines. MMT offers a wide range of <b>Food Processing Conveyors</b> for different applications.													
</p>
<p>MMT create added value across your entire food and beverage industry manufacturing process. Dedicated to every phase of your production, we support you with front-of-line, processing, picking and handling and end-of-line applications.</p>
        <div className="list">
            <ul>
                <li>Front of Line Automations such as palletiser, DE palletisers, loading the product etc...</li>
           <li>Automation for Handling & picking process</li>
           <li>End of Line automation</li>
           <li>Conveyors for Primary & Secondary Packaging line</li>
           <li>Providing Best <b>Hygiene Solutions</b> for Handling Direct Food Contact Product.</li>
            </ul>
        </div>
        <p>	Specifically for food processing automation delivers consistently better quality, improves picking and handling times and increases												
	output by speeding up packaging processes. The net results are lower costs and greater competitive scope and the ever-changing												
	demands of the food manufacturing industry.												
</p>
<h4>Industrial Automations for Beverage Industry</h4>
<p>	MMT is a leading manufacturer of <b>Conveyors</b> and manufacturing of <b>Automation Equipment</b> for Beverage Processing as per the production														
	operations for processing lines. MMT offers a wide range of <b>Beverage Processing Conveyors</b> for different applications at various														
	stages such as</p>
    <div className="list">
        <ul>
            <li>Palletiser & DE palletisers Conveyors</li>
            <li>Conveying of Bottles at various stages for different applications</li>
            <li>Automation for filling Bottle lines Conveyors</li>
            <li>Accumulation Conveyors, Telescopic Conveyors etc…</li>
            <li>Primary & Secondary Packaging lines	</li>
            <li>Ware house Automations for pallet Handling, Box handling etc…</li>
        </ul>
    </div>
    <h4>Industrial Automations for Dairy Industry</h4>
    <p>
    MMT is a leading manufacturer of <b>Conveyors</b> and manufacturing of <b>Automation Equipment</b> for Dairy Processing as per the production													
	operations for processing lines. MMT offers a wide range of <b>Dairy Processing Conveyors</b> for different applications at various stage</p>
   <div className="list">
       <ul>
           <li>	Empty Crates Handling at Various Stages															
</li>
           <li>	Buffer Tables Conveyors for Mono cartons / Bottles															
</li>
           <li>	Filling Automation Lines.															
</li>
           <li>	Primary & Secondary Packaging Line															
</li>
           <li>	Ware House Automations for Box Handling, Pallet Handling, till Truck loading etc..															
</li>
       </ul>
   </div>
   <p>MMT create Value added Solutions across your entire <b>Food/Beverage/Dairy Industry</b> manufacturing process. Dedicated to every phase of your production, we support you with from front-of-line Automations, Processing, and Picking & Handling and till the end-of-line applications.</p>
     <p>Specifically for food processing Automation delivers consistently better quality, Improves picking and handling times and increases output by speeding up packaging processes. The net results are lower costs and greater competitive scope and the ever-changing demands of the food manufacturing Industry.</p>
     </div>
    )
}

export default Food;