import React, { Component } from "react";
import About from "../assets/img/about-img.svg";
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ClassIcon from '@material-ui/icons/Class';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import BusinessIcon from '@material-ui/icons/Business';

class Coaching extends Component {
  render() {
    return (
      <>
      <section id="about" className="about mt-5">
        <div className="container">
          <div className="row justify-content-between py-5">
            <div className="col-lg-4 d-flex align-items-center justify-content-center about-img">
              <img
                src={About}
                className="img-fluid aos-init aos-animate"
                alt=""
                data-aos="zoom-in"
              />
            </div>
            <div className="col-lg-8 pt-5 pt-lg-0">
              <h4 data-aos="fade-up" className="aos-init aos-animate">
              WORLD CLASS COACHING FOR STUDENTS & PROFESSIONALS
              </h4>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="aos-init aos-animate pt-3"
              >
                The world’s most advanced economies rely on standardised tests to assess visa applicants. As India’s #1 Visas & Immigration company, we have seen the positive impact of high scores in these tests on work, student and migrant visa applications. Y-Axis Coaching delivers world-class coaching designed to help you get your best score and boost your chances of achieving your international ambitions.
              </p>
             
            </div>
           
          </div>
          <div className="row">
          <div
                  className="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4>WHY CHOOSE US?</h4>
                  <p>
                    <ul className="py-3">
                    <li>World class coaching material from sources like British Council & Pearson</li>
                    <li>Experienced faculty with a track record of success</li>
                    <li>Platinum partner with British Council & IDP</li>
                    <li>Assistance with test slot booking</li>
                    <li>Coaching that fits your busy schedule</li>
                    <li>Multiple ways to learn – online, in-class, live stream and private</li>
                    <li>Flipped classroom approach which is proven to improve learning</li>
                    </ul>
                  </p>
                </div>
                <div
                  className="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1104&q=80" width="100%"></img>
                </div>
          </div>
                
              
          
        </div>
      </section>
      <section id="services" className="services-coach mt-5">
      <div className="container">
          <div className="section-title aos-init aos-animate" data-aos="fade-up">
            <h2>OUR LEARNING ENVIRONMENT</h2>
            </div>
            <div className="row">
            <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box" >
                <BusinessIcon style={{ fontSize: 80}} />

                  <h4 className="title-custom" >
                    <a href="">MODERN<br/>ENVIRONMENT</a>
                  </h4>
                  <p className="description">
                   
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box" >
                <ClassIcon style={{ fontSize: 80}} />
                  <h4 className="title-custom" >
                    <a href="">CLASS<br/>ROOM</a>
                  </h4>
                  <p className="description">
                   
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                
                <div className="icon-box" >
                <LiveTvIcon style={{ fontSize: 80}} />
                  <h4 className="title-custom" >
                    <a href="">LIVE<br/>CLASSROOM</a>
                  </h4>
                  <p className="description">
                   
                  </p>
                </div>
              </div> <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box" >
                <PermIdentityIcon style={{ fontSize: 80}} />

                  <h4 className="title-custom" >
                    <a href="">PRIVATE<br/>TUTORING</a>
                  </h4>
                  <p className="description">
                   
                  </p>
                </div>
              </div> <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box" >
                <WbSunnyIcon style={{ fontSize: 80}} />

                  <h4 className="title-custom" >
                    <a href="">EARLY MORNING CLASSES</a>
                  </h4>
                  <p className="description">
                   
                  </p>
                </div>
              </div> <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                <Brightness3Icon style={{ fontSize: 80}} />

                  <h4 className="title-custom" >
                    <a href="">NIGHT<br/>CLASSES</a>
                  </h4>
                  
                </div>
              </div>
               

              

             
            </div>
          </div>
      </section>
      </>
    );
  }
}

export default Coaching;
