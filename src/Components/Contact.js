import React from 'react'
import '../styles/Contact.css'
import Iframe from 'react-iframe'
import {Nav}  from 'react-bootstrap'
const Contact = () => {
    return (
        <div className="Contact">
            <div className="Contact-us">
                <h4>Contact Us </h4>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-title-address"><i className="fa fa-map-marker fa-spin" aria-hidden="true"></i>
                            <h6>Our Address</h6>
                            <p>#11, 1st main, 1st cross, Annapurneshwari layout, 
</p>
 
<p>Thigalarapalya, Peenya 2nd stage,</p>
 <p>Bangalore - 560 058, Karnataka</p>
 <br />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-title"> <i className="fa fa-user-circle fa-spin" aria-hidden="true"></i>
                            <h6>Managing Director</h6>
                            <p>Hareesh K R</p>
                            <p>
                            <Nav.Link href='mailto:krh@milleniumtechnologies.org' >krh@milleniumtechnologies.org</Nav.Link>
</p>
                            <p>+918892629981 / +919591737198</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-title"><i className="fa fa-bullhorn fa-spin" aria-hidden="true"></i>
                            <h6>Sales & Marketing Team</h6>
                            <p>Mr Girish V </p>
                            <p>   <Nav.Link href='mailto: marketing@milleniumtechnologies.org' > marketing@milleniumtechnologies.org </Nav.Link>
                               </p>
                            <p>+919739661988</p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-3">
                    <div className="card">
                        <div className="card-title"><i className="fa fa-cog fa-spin " aria-hidden="true"></i>
                            <h6>Design & Projects Team</h6>
                            
                            <p>design@milleniumtechnologies.org 
                            projects@milleniumtechnologies.org 
                        </p>
                        <br /> 
                        <br /> 
                        </div>
                    </div>
                </div> */}
            </div>


            <div className="map">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="card">
                            <div className="card-title">
                                <Iframe className="mb-4 mb-lg-0" alt=""  src="https://maps.google.com/maps?q=banglore%20annapurneshwari%20layout%20560058&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style={{ border: "0", width: "100%", height: "600px" }} allowfullscreen=""></Iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                    <div className="card"> 
                    <div className="card-title">

                    <form >
                                            <div className="row">
                                              <div className="col form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                              </div>
                                              <div className="col form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Company" required="" />
                                              </div>
                                            </div>
                                            <div className="row">
                                                <div className="col form-group">
                                                  <input type="text" name="name" className="form-control" id="name" placeholder="Ph Number" required="" />
                                                </div>
                                                <div className="col form-group">
                                                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                                </div>
                                              </div>
                                            <div className="form-group">
                                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Designation" required="" />
                                            </div>
                                            <div className="form-group">
                                              <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                                            </div>
                                            <div className="text-center"><button type="submit">Send Message</button> <button type="reset">Reset</button></div>
                                          </form>
                    </div>
                    </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Contact;