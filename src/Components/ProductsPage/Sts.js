import React ,{useState} from 'react';
import '../../Components/ProductsPage/Product.css';
import {Nav}  from 'react-bootstrap'
import {Collapse} from 'react-bootstrap';
import FIRESAFETYSIMULATOR from '../../Images/STS Gallery/FIRE SAFETY SIMULATOR.JPG';
import EOTCRANEACCIDENTSIMULATOR from '../../Images/STS Gallery/EOT CRANE ACCIDENT SIMULATOR.JPG'
import IMPORTANCEOFLIFELINEINHEIGHTWORKSIMULATOR from '../../Images/STS Gallery/IMPORTANCE OF LIFE LINE IN HEIGHT WORK SIMULATOR.JPG'
const Sts = () =>{
    const [open, setOpen] = useState(false);
    return(
        <div className="product">
            <h4>SAFETY  TRAINING STIMULATORS - S T S</h4>
            <p>
            We provide Manufacturing and trails of <b>Safety Training Stimulators</b> like, Residual pressure Release accident, Roller Jam accident, Belt Jam accident, Chain Drive accident, Safety Shoe accident, Vehicle accident, Electric Shock, Air Explosion, Risk of Burn injury due to hot abject, Accident in Dark Working System, Finger injury due to opened fan cover, Emergency push button (LOTO concept) with Hand gloves, etc. </p>
            <div className="list">
                <ul>
                    <li>Residual Pressure Release</li>
                    <li>Roller / Belt Jam Accident</li>
                    <li>Electric Shock Stimulator</li>
                    <li>Safety  Shoes Accident Stimulator</li>
                    <li>Hot Object Indication Stimulator</li>
                    <li>Vehicle Accident Stimulators</li>
                    <li>Fire Safety  Stimulator</li>
                    <li    onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} className="more">...More</li>
     <Collapse in={open}>
        <div id="example-collapse-text">
        <div className="list">
            <ul>
                <li>PINCH HARD STIMULATOR</li>
                <li>ELECTRIC STIMULATOR</li>
                <li>AIR EXPLOSION STIMULATOR</li>
                <li>ACCIDENT IN DARK SYSTEMS</li>
                <li>ELECTRICALLY OPERATED OVERHEAD CRANE STIMULATORS(EOT)</li>
                <li>HAND RAIL IMPORTANCE STIMULATORS</li>
                <li>OPEN FAN COVER STIMULATOR</li>
                <li>HEIGHT WORK SAFETY BELT STIMULATOR</li>
                <li>STATIC ENERGY STIMULATOR</li>
                <li>GOOD & BAD TOOLS STIMULATOR</li>
                <li>LOCK OUT & TAG OUT LOTO STIMULATORS</li>
                <li>TRIP STIMULATOR IN OVERLOAD CIRCUIT</li>
                <li>HEIGHT WORK & SLIP ACCIDENT STIMULATORS</li>
            </ul>
        </div>
        </div>
      </Collapse>
                </ul>
            </div>
            <div className="images">
                <div className="row">
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={FIRESAFETYSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>FIRE SAFETY SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={IMPORTANCEOFLIFELINEINHEIGHTWORKSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>IMPORTANCE OF LIFE LINE IN HEIGHT WORK SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={EOTCRANEACCIDENTSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>EOT CRANE ACCIDENT SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                   
                    </div>
                    <div>
                    <p style={{display:'flex',justifyContent:"flex-end"}}>More images to...<Nav.Link href="/Gallery" style={{padding:"0px"}}>Gallery</Nav.Link></p>
                    </div>
        </div>
    )
}
export default Sts;