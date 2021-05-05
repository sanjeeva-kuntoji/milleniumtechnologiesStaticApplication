import React from 'react';
import '../styles/Gallery.css';
import '../Components/ProductsPage/Product.css'
import FRONTFORKSTEM from '../Images/AES/FRONT FORK STEM + HANDLE STOPPER_PRESSING_MACHINE.png';
import VISIONSYSTEM from '../Images/AES/VISION SYSTEM.png';
import ASSEMBLYPOKOYOKESYSTEM from '../Images/AES/ASSEMBLY POKOYOKE SYSTEM.png';
import PlasticSlatChainConveyor from '../Images/AES/Plastic Slat Chain Conveyor.jpg'
import BUSHPRESSINGMACHINE from '../Images/AES/BUSH PRESSING MACHINE.png';
import ASSEMBLYFIXTUREWITHPOKAYOKE from '../Images/AES/ASSEMBLY FIXTURE WITH POKA YOKE.png';
import HOTSTAMPINGJIG from '../Images/AES/HOT STAMPING JIG.png';
import LEAKTESTINGMACHINE from '../Images/AES/LEAK TESTING MACHINE.png';
import PUNCHINGMACHINE from '../Images/AES/PUNCHING MACHINE.png';
import OILSEALPRESSINGMACHINE from '../Images/AES/OIL SEAL PRESSING MACHINE.png'; 
import STROKINGANDEXPENSTIONMACHINE from '../Images/AES/STROKING AND EXPENSTION MACHINE.png';
import MACHINEGUARDSIMULATOR from '../Images/STS Gallery/MACHINE GUARD SIMULATOR.jpg';
import PINCHHAZARDSIMULATOR from '../Images/STS Gallery/PINCH HAZARD SIMULATOR.JPG';
import AIREXPLOSIONSIMULATOR from '../Images/STS Gallery/AIR EXPLOSION SIMULATOR.jpg';
import HEIGHTWORK from '../Images/STS Gallery/HEIGHT WORK AND SLIP ACCIDENT SIMULATOR.JPG';
import FIRESAFETYSIMULATOR from '../Images/STS Gallery/FIRE SAFETY SIMULATOR.JPG';
import GOODANDBADTOOLSSIMULATOR from '../Images/STS Gallery/GOOD AND BAD TOOLS SIMULATOR.JPG';
import WORKING  from '../Images/STS Gallery/WORKING TRAINING SYSTEM IN PNEUMATIC ACCESORIES SIMULATOR.JPG';
import HotObject from '../Images/STS Gallery/Hot Object.jpg';
import ELECTRICSHOCK from '../Images/STS Gallery/ELECTRIC SHOCK ACCIDENT SIMULATOR.JPG';
import ELECTRICALSIMULATOR from '../Images/STS Gallery/ELECTRICAL SIMULATOR.jpg';
import DARKWORKING from '../Images/STS Gallery/DARK WORKING SYSTEM  ACCIDENT SIMULATOR.jpg';
import VEHICLE from '../Images/STS Gallery/VEHICLE OR FORKLIFT ACCIDENT SIMULATOR.JPG';
import BELTDRIVE from '../Images/STS Gallery/BELT DRIVE.jpg'
import EMERGENCYPUSH from '../Images/STS Gallery/EMERGENCY PUSH BUTTON IN DRILLING MACHINE SIMULATOR.jpg';
import NG  from '../Images/STS Gallery/NG POINTS SIMULATOR IN ELECTRICAL WIRING.JPG';
import SAFETYSHEO from '../Images/STS Gallery/SAFETY SHEO ACCIDENT SIMULATOR.JPG';
import FIRE from '../Images/STS Gallery/FIRE OR SHOCK DUE TO STATIC ENERGY SIMULATOR.JPG';
import HEAVYOBJECT from '../Images/STS Gallery/HEAVY OBJECT LIFITING TRAINING SIMULATOR WITH ELECTRICAL.JPG';
import IMPORTANCE from '../Images/STS Gallery/IMPORTANCE OF HOLD HAND RAILS IN STAIR CASE SIMULATOR.JPG';
import LOCKOUT from '../Images/STS Gallery/LOCK OUT AND TAG OUT SYSTEM LOTO.JPG';
import OPENDFAN from '../Images/STS Gallery/OPEND FAN COVER ACCIDENT SIMULATOR.jpg';
import RESIDUALPRESSURE from '../Images/STS Gallery/RESIDUAL PRESSURE OF PNEUMATIC ACCIDENT SIMULATOR.jpg';
import ROLLERJAM from '../Images/STS Gallery/ROLLER JAM ACCIDENT SIMULATOR.JPG';
import TRIPSIMULATOR from '../Images/STS Gallery/TRIP SIMULATOR IN OVER LOAD CIRCUIT.JPG';
import UNSAFE from '../Images/STS Gallery/UNSAFE CONDITION IN ROTATING SHAFT WITH  LOOS CLOTH SIMULATOR.jpg';
import PPESIMULATOR from '../Images/STS Gallery/PPE SIMULATOR.jpg'
import IMPORTANCEOFLIFELINEINHEIGHTWORKSIMULATOR from '../Images/STS Gallery/IMPORTANCE OF LIFE LINE IN HEIGHT WORK SIMULATOR.JPG';
import one from '../Images/MHS/one.png';
import two from '../Images/MHS/two.png';
import three from '../Images/MHS/three.png';
import four from '../Images/MHS/four.png';
import five from '../Images/MHS/five.png'
import six from '../Images/MHS/six.jfif';
import seven from '../Images/MHS/seven.png';
import eight from '../Images/MHS/eight.png';
import nine from '../Images/MHS/nine.png';
import ten from '../Images/MHS/ten.png';
const Gallery = () => {
    return(
        <div className="gallery">
            <h4 style={{borderBottom:"2px solid blue"}}>SAFTEY TRAINING STIMULATORS - S T S</h4>
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
                                <img src={WORKING} alt="" ></img>
                                <div class="container">
                                    <p>WORKING TRAINING SYSTEM IN PNEUMATIC </p>
                                    <p>ACCESORIES SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ELECTRICALSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>ELECTRICAL SIMULATOR </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={PPESIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>PPE SIMULATOR </p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={HotObject} alt="" ></img>
                                <div class="container">
                                    <p>Hot Object </p>
                              
                                </div>
                            </div>
                        </div>
                    </div> 
                     <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={BELTDRIVE} alt="" ></img>
                                <div class="container">
                                    <p>BELT DRIVE </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={GOODANDBADTOOLSSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>GOOD AND BAD TOOLS SIMULATOR </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={AIREXPLOSIONSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>AIR EXPLOSION SIMULATOR</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={MACHINEGUARDSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>MACHINE GUARD SIMULATOR </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ PINCHHAZARDSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p> PINCH HAZARD SIMULATOR </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={DARKWORKING} alt="" ></img>
                                <div class="container">
                                    <p>DARK WORKING SYSTEM  ACCIDENT  </p>
                                   <p>SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ ELECTRICSHOCK} alt="" ></img>
                                <div class="container">
                                    <p>ELECTRIC SHOCK ACCIDENT </p>
                                   <p>SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ EMERGENCYPUSH } alt="" ></img>
                                <div class="container">
                                    <p>EMERGENCY PUSH BUTTON IN DRILLING </p>
                                   <p>MACHINE (LOTO CONCEPT) SIMULATOR </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ SAFETYSHEO} alt="" ></img>
                                <div class="container">
                                    <p> SAFETY SHEO ACCIDENT SIMULATOR </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ FIRE } alt="" ></img>
                                <div class="container">
                                    <p>FIRE OR SHOCK DUE TO</p>
                                    <p> STATIC ENERGY SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ HEIGHTWORK } alt="" ></img>
                                <div class="container">
                                    <p> HEIGHT WORK AND SLIP </p>
                                    <p>ACCIDENT SIMULATOR </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ HEAVYOBJECT} alt="" ></img>
                                <div class="container">
                                    <p> HEAVY OBJECT LIFITING TRAINING </p>
                                    <p>SIMULATOR WITH ELECTRICAL </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ IMPORTANCE} alt="" ></img>
                                <div class="container">
                                    <p>IMPORTANCE OF HOLD HAND RAILS  </p>
                                    <p>IN STAIR CASE SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ LOCKOUT} alt="" ></img>
                                <div class="container">
                                    <p>LOCK OUT AND TAG OUT SYSTEM LOTO </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ NG} alt="" ></img>
                                <div class="container">
                                    <p>NG POINTS SIMULATOR IN </p>
                                    <p>ELECTRICAL WIRING </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ OPENDFAN} alt="" ></img>
                                <div class="container">
                                    <p>OPEND FAN COVER ACCIDENT </p>
                                    <p>SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ RESIDUALPRESSURE} alt="" ></img>
                                <div class="container">
                                    <p>RESIDUAL PRESSURE OF PNEUMATIC </p>
                                    <p>ACCIDENT SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ ROLLERJAM} alt="" ></img>
                                <div class="container">
                                    <p>ROLLER JAM ACCIDENT SIMULATOR </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ TRIPSIMULATOR} alt="" ></img>
                                <div class="container">
                                    <p>TRIP SIMULATOR IN OVER </p>
                                    <p> LOAD CIRCUIT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ VEHICLE} alt="" ></img>
                                <div class="container">
                                    <p>VEHICLE OR FORKLIFT</p>
                                    <p>ACCIDENT SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ UNSAFE} alt="" ></img>
                                <div class="container">
                                    <p>UNSAFE CONDITION IN ROTATING </p>
                                    <p>SHAFT WITH  LOOS CLOTH SIMULATOR</p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
                </div>
            <h4 style={{borderBottom:"2px solid blue"}}>AUTOMATION ENGINEERING SOLUTIONS -  A E S</h4>
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
                                    <p>PLASTIC SLAT CHAIN CONVEROY</p>
                                
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
            <h4 style={{borderBottom:"2px solid blue"}}>MATERIAL HANDLING SYSTEMS - M H S</h4>
            <div className="images">
                <div className="row">
                <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={four} alt="" ></img>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={three} alt="" ></img>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={two} alt="" ></img>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-03">
                        <div className="single">
                            <div class="polaroid">
                                <img src={one} alt="" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={five} alt="" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={six} alt="" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={seven} alt="" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={eight} alt="" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={nine} alt="" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-04">
                        <div className="single">
                            <div class="polaroid">
                                <img src={ten} alt="" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;