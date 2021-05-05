import React from 'react';
import '../../Components/ProductsPage/Product.css';
import FRONTFORKSTEM from '../../Images/AES/FRONT FORK STEM + HANDLE STOPPER_PRESSING_MACHINE.png';
import VISIONSYSTEM from '../../Images/AES/VISION SYSTEM.png';
import ASSEMBLYPOKOYOKESYSTEM from '../../Images/AES/ASSEMBLY POKOYOKE SYSTEM.png';
import PlasticSlatChainConveyor from '../../Images/AES/Plastic Slat Chain Conveyor.jpg'
import BUSHPRESSINGMACHINE from '../../Images/AES/BUSH PRESSING MACHINE.png';
import ASSEMBLYFIXTUREWITHPOKAYOKE from '../../Images/AES/ASSEMBLY FIXTURE WITH POKA YOKE.png';
import HOTSTAMPINGJIG from '../../Images/AES/HOT STAMPING JIG.png';
import LEAKTESTINGMACHINE from '../../Images/AES/LEAK TESTING MACHINE.png';
import PUNCHINGMACHINE from '../../Images/AES/PUNCHING MACHINE.png';
import OILSEALPRESSINGMACHINE from '../../Images/AES/OIL SEAL PRESSING MACHINE.png';
import STROKINGANDEXPENSTIONMACHINE from '../../Images/AES/STROKING AND EXPENSTION MACHINE.png';
const Aes = () => {
    return (
        <div className="product">
            <h4>AUTOMATION ENGINEERING SOLUTIONS -  A E S</h4>
            <p>We provide Manufacturing and Factory Automation Solutions for Automotive Assembly lines, <b>SPMs Machines,</b> Leak Testing Machines, Pressing Machines, Secondary line packaging systems, Pick and Place, Control panel & PLC Program, All types of conveyors, Quality Gauges, Checking Fixtures, pressing Tools and Jigs and Fixtures.</p>
            <div className="images">
                <div className="row">
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={FRONTFORKSTEM} alt="" ></img>
                                <div class="container">
                                    <p>FRONT FORK STEM</p>
                                    <p>HANDLE STOPPER PRESSING MACHINE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                    <div className="single">
                            <div class="polaroid">
                                <img src={VISIONSYSTEM} alt="" ></img>
                                <div class="container">
                                    <p>VISIONSYSTEM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                    <div className="single">
                            <div class="polaroid">
                                <img src={ASSEMBLYPOKOYOKESYSTEM} alt="" ></img>
                                <div class="container">
                                    <p>ASSEMBLY POKOYOKE SYSTEM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                    <div className="single">
                            <div class="polaroid">
                                <img src={PlasticSlatChainConveyor} alt="" ></img>
                                <div class="container">
                                    <p>PLASTIC SLAT CHAIN CONVEROY  </p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                    <div className="single">
                            <div class="polaroid">
                                <img src={BUSHPRESSINGMACHINE} alt="" ></img>
                                <div class="container">
                                    <p>BUSH PRESSING MACHINE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                    <div className="single">
                            <div class="polaroid">
                                <img src={LEAKTESTINGMACHINE} alt="" ></img>
                                <div class="container">
                                    <p>LEAK TESTING MACHINE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                    <div className="single">
                            <div class="polaroid">
                                <img src={HOTSTAMPINGJIG} alt="" ></img>
                                <div class="container">
                                    <p>HOT STAMPING JIG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                    <div className="single">
                            <div class="polaroid">
                                <img src={ASSEMBLYFIXTUREWITHPOKAYOKE} alt="" ></img>
                                <div class="container">
                                    <p>ASSEMBLY FIXTURE WITH POKA YOKE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                    <div className="single">
                            <div class="polaroid">
                                <img src={STROKINGANDEXPENSTIONMACHINE} alt="" ></img>
                                <div class="container">
                                    <p>STROKING AND EXPENSTION MACHINE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                    <div className="single">
                            <div class="polaroid">
                                <img src={OILSEALPRESSINGMACHINE} alt="" ></img>
                                <div class="container">
                                    <p>OIL SEAL PRESSING MACHINE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                    <div className="single">
                            <div class="polaroid">
                                <img src={PUNCHINGMACHINE} alt="" ></img>
                                <div class="container">
                                    <p>PUNCHING MACHINE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <h5>Turn - key System Solutions	</h5>
            <p>MMT have the ability to Design, Engineering and Installations of material Handling equipment, <b>Special Purpose Machines, Conveyors,</b> Providing <b>Safety Training Stimulators</b> Setup with Complete required Controls Systems & these are Combined together in order to have single point of Contact.	</p>
            <p>We are positioned to handle every step of a material handling projects. Featuring	</p>
            <div className="list">
                <ul>
                    <li>Engineering & Consultation	</li>
                    <li>Simulations	</li>
                    <li>Manufacturing</li>
                    <li>Electrical Control Systems	</li>
                    <li>Pneumatic Control systems	</li>
                    <li>Field Installations	</li>
                    <li>Projects start up	</li>
                    <li>Inspection & Service of Existing Conveyors & other Material Handling equipment’s</li>
                    <li>Rebuild / Upgrade your Existing Equipment.	</li>

                </ul>
            </div>
        </div>
    )
}
export default Aes;