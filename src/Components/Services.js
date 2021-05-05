import React, { Component } from "react";
import '../styles/Services.css'
import inspection from '../Images/Inspection.png';
import install from '../Images/Installation.png';
import Safty from '../Images/safety.png';
import Amg from '../Images/Amc.png'
import ClientImages from '../Images/Client Images.png'
export default class Services extends Component{
  render(){
    return(
      <div className="services">
        <h4>Services</h4>
      <div className="row">
      <div className="col-md-3">
        <div className="shadow p-3 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <div className="card-content">
                <img src={inspection} alt=""/>
                <h6>Inspection & Maintaince</h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="shadow p-3 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <div className="card-content">
                <img src={install} alt=""/>
                <h6>Installation & Commissioning</h6>
                <br />
      
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="shadow p-3 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <div className="card-content">
                <img src={Safty} alt=""/>
                <h6>Safety Operate Machines Training</h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="shadow p-3 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <div className="card-content">
                <img src={Amg} alt=""/>
                <h6>AMC & Audit Check Operations</h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="shadow p-3 bg-white rounded">
            <h5>After Sale Services</h5>
            <p>Millenium Technologies provides Responsive, Reliable and Technical Support  for all your after sales needs</p>
          <h5>Spare Parts Services</h5>
          <p>Millenium Technologies understands the importance of keeping your equipment operating at the Highest level of Accuracy and Efficiency.</p>
        <h5>Annual Maintains Contract</h5>  
        <p>Millenium Technologies undertakes “Annual Maintains Contracts” for all indigenously manufactured machines and  we are  having a well-trained Service Team to serve the Customers.</p>
        </div>
        </div>
      </div>
      <div>
                                      <h4 className="card-title">MAJOR CLIENTS</h4>
                                            <div className="portrai" >
                                              <img src={ClientImages} alt="" style={{width:"1200px"}} />
                                             </div>
                                      </div>
      </div>
          )
  }
}
