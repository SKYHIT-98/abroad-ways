import React from "react";
import Navigationbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/style.css';
import './assets/css/style2.css';

import Coaching from "./Views/Coaching";
import Visa from './Views/Visa';
import JobSeeker from "./Views/Visa/JobSeeker";
import Country from './Views/Country';
import AboutUs from './Views/AboutUs'

export default function App() {
  return (
    <div>
      <Navigationbar />
      <Router>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs}/>
          <Route path="/contact" component={Contact} />
          <Route path="/coaching" component={Coaching} />
          <Route exact path="/visa" component={Visa} />
          <Route exact path="/visa/jobseeker" component={JobSeeker} />
          <Route exact path="/country" component={Country} />


        </main>
      </Router>
      <Footer />
    </div>
  );
}
