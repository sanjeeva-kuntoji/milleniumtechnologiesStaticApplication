import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banar from '../Images/Home_two.png';
import Totoda from '../Images/Client Images/Toyoda.png';
import Itc from '../Images/Client Images/Itc.png';
import Auto from '../Images/Client Images/Auto.png';
import ATI from '../Images/Client Images/ATI.png';
import Rex from '../Images/Client Images/Rex.png';
import seo from '../Images/Client Images/Seo.png';
import Titan from '../Images/Client Images/Titan.png';
import Tvs from '../Images/Client Images/Tvs.png';
import Exedy from '../Images/Client Images/Exedy.png';
import Tafe from '../Images/Client Images/Tafe.png';
import Mtr from '../Images/Client Images/Mtr.png';
import Kei from '../Images/Client Images/KEI.png';
import Wint from '../Images/Client Images/wint.png';
import Hap from '../Images/Client Images/Hap.jfif';
import Kern from '../Images/Client Images/Kern.png';
import Pernod from '../Images/Client Images/Pernod.png';
import Mother from '../Images/Client Images/Mother.png';
import Nestle from '../Images/Client Images/Nestle.png';
import Fine from '../Images/Client Images/Fine.png';
import Tt from '../Images/Client Images/Tt.png';
import Devon from '../Images/Client Images/Devon.png';
import Sgs from '../Images/Client Images/Sgs.png';
import Col from '../Images/Client Images/Col.png';
import Robbins from '../Images/Client Images/Robbins.jfif';
import Mm from '../Images/Client Images/Mm.jfif';
import Rubber from '../Images/Home1.jpg'
import PhotoCollege  from "../Images/Photo College.png";
import '../styles/Home.css'
import  '../styles/commamResponsive.css';
export default class Home extends Component {
        render() {
                const settings = {
                        dots: false,
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        mobileFirst:true,
                        responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4,
                                    }
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                }
                        
                          ]

                };
                const Banner = {
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        speed: 3000,
                        mobileFirst:true,
                        
                };
                return (
                        <div className="content">
                              
                                <div className="row">
                                        <div className="col-md-012">
                                                <Slider ref={slider => (this.slider = slider)} {...Banner}>
                                                <img src={Banar} alt=""/>
                                                <img src={Rubber} alt=""/>
                                                <img src={PhotoCollege} alt="" />
                                               
                                        </Slider>
                                        </div>
                                </div>
                                <h4 className="card-title">MILLENIUM VISION</h4>
                                <ul>
                                                        <li>To be a pioneer organization by delivering exceptional performance</li>
                                                        <li>To emerge as a Brand in manufacturing of <b>Special Purpose Machines.</b></li>
                                                        <li>To form a productive Workforce which serves our clients better quality.</li>
                                                 </ul>
                                <h4 className="card-title">MILLENIUM MISSION</h4>
                                <ul>
                                                        <li>To provide a world-class Products & Services which make us a Trustworthy & Responsible Organization in the market.</li>
                                                        <li>To offer custom made Solutions & personalized Services.</li>
                                                        <li>To be a supporting hand to our Customers on the ground to solve complex manufacturing problems.</li>

                                                </ul>
                                <div>
                                <h4 className="card-title">MAJOR CLIENTS</h4>
                                        <Slider ref={slider => (this.slider = slider)} {...settings}>
                                                <div className= "clients">
                                                        <img src={Itc} alt="none"/>
                                                </div>
                                                <div className= "clients">
                                                        <img src={Rex} alt="none"/>
                                                </div>
                                                <div className= "clients">
                                                        <img src={Mtr} alt="none"/>
                                                </div>
                                                <div className= "clients">
                                                        <img src={Exedy} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                        <img src={Tvs} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                        <img src={Titan} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Tafe} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={seo} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Totoda} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Auto} alt="none" />
                                                </div>
                                                <div  className= "clients">
                                                <img src={ATI} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Kei} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Wint} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Mm} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Robbins} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Col} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Sgs} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Devon} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src=
                                                {Tt} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Fine} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Nestle} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Mother} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Pernod} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Kern} alt="none"/>
                                                </div>
                                                <div  className= "clients">
                                                <img src={Hap} alt="none"/>
                                                </div>
                                        </Slider>
                                </div>
                        </div>
                );
        }
}
