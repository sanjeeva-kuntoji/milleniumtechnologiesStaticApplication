import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/Components/Home';
import Footer from '../src/Components/Footer';
import SubnavBar from '../src/Components/Subnavbar';
import About from '../src/Components/About';
import Services from '../src/Components/Services';
import Contact from '../src/Components/Contact';
import Gallery from '../src/Components/Gallery';
import Aes from '../src/Components/ProductsPage/Aes';
import Sts from '../src/Components/ProductsPage/Sts';
import Mhs from '../src/Components/ProductsPage/Mhs';
import Automotive from '../src/Components/IndustryService/Automotive'; 
import Battery from '../src/Components/IndustryService/Battery';
import Food from '../src/Components/IndustryService/Food';
import FMCG from '../src/Components/IndustryService/FMCG'; 
import Electronics from '../src/Components/IndustryService/Electronics';
import './App.css';
import logo from './Images/logo.png'
 const App =()=> {
   var homedata = "stringvalue";
  return (
    <Router>
    <div className="App">
    <div className="fixed-top" style={{backgroundColor:"white"}}>
        <a className="item" href="#"><span><img src={logo} alt="" /></span><span>Millenium Technologies</span></a>
      <SubnavBar />
    </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} data={homedata}/>
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Aes" component={Aes} />
          <Route path="/Sts" component={Sts} />
          <Route path="/Mhs" component={Mhs} />
          <Route path="/Automotive" component={Automotive} />
          <Route path="/Food" component={Food} />
          <Route path="/FMCG" component={FMCG} />
          <Route path="/Battery" component={Battery} />
          <Route path="/Electronics" component={Electronics} />
                  </Switch>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
