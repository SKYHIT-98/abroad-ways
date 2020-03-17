import React from "react";
import Navigationbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/style.css';
import './assets/css/style2.css';

import AboutUs from './Views/AboutUs';

import Visa from './Views/Visa';
import JobSeeker from "./Views/Visa/JobSeeker";


import Country from './Views/Country';
import America from './Views/Country/America'

import Coaching from "./Views/Coaching";
import GRE from './Views/Coaching/GRE';
import GMAT from './Views/Coaching/GMAT';
import IELTS from './Views/Coaching/IELTS';
import SAT from './Views/Coaching/SAT';
import PTE from './Views/Coaching/PTE';
import TOEFL from './Views/Coaching/TOEFL';



export default function App() {
  return (
    <div>
      <Navigationbar />
      <Router>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs}/>
          <Route path="/contact" component={Contact} />


          <Route exact path="/visa" component={Visa} />
          <Route exact path="/visa/jobseeker" component={JobSeeker} />


          <Route exact path="/country" component={Country} />
          <Route exact path="/country/America" component={America} />


          <Route exact path="/coaching" component={Coaching} />
          <Route exact path="/coaching/GRE" component={GRE} />
          <Route exact path="/coaching/GMAT" component={GMAT} />
          <Route exact path="/coaching/IELTS" component={IELTS} />
          <Route exact path="/coaching/PTE" component={PTE} />
          <Route exact path="/coaching/SAT" component={SAT} />
          <Route exact path="/coaching/TOEFL" component={TOEFL} />


        </main>
      </Router>
      <Footer />
    </div>
  );
}
