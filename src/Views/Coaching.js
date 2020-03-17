import React, { Component } from "react";
import About from "../assets/img/about-img.svg";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ClassIcon from "@material-ui/icons/Class";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import BusinessIcon from "@material-ui/icons/Business";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  // root: {
  //   minWidth: 160,
  //   margin: 20,
  //   width: 340,
  //   cursor: "pointer"
  // },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Coaching() {
  
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
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
                  The world’s most advanced economies rely on standardised tests
                  to assess visa applicants. As India’s Visas & Immigration
                  company, we have seen the positive impact of high scores in
                  these tests on work, student and migrant visa applications.
                  Abroad way Coaching delivers world-class coaching designed to help
                  you get your best score and boost your chances of achieving
                  your international ambitions.
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
                    <li>
                      World class coaching material from sources like British
                      Council & Pearson
                    </li>
                    <li>Experienced faculty with a track record of success</li>
                    <li>Platinum partner with British Council & IDP</li>
                    <li>Assistance with test slot booking</li>
                    <li>Coaching that fits your busy schedule</li>
                    <li>
                      Multiple ways to learn – online, in-class, live stream and
                      private
                    </li>
                    <li>
                      Flipped classroom approach which is proven to improve
                      learning
                    </li>
                  </ul>
                </p>
              </div>
              <div
                className="col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1104&q=80"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-up"
            >
              <h2>COURSES WE OFFER</h2>
              <div className="row mt-5">
              <Card className="coaching-card">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom><a href="/coaching/GRE">GRE</a></Typography>
        
        <Typography variant="p" component="h5" style={{marginBottom: 10}}>
      Apply for admissions with confidence
Improve your scores with Abroad way GRE Coaching       </Typography>
      </CardContent>
      
     
    </Card>
    <Card className="coaching-card">
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom><a href="/coaching/GMAT">GMAT</a></Typography>
        
        <Typography variant="p" component="h5" style={{marginBottom: 10}}>
        Get into the college of your dreams
Explore Abroad way GMAT Coaching       </Typography>
      </CardContent>
      
     
    </Card>
    <Card className="coaching-card">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom><a href="/coaching/IELTS">IELTS</a></Typography>
        
        <Typography variant="p" component="h5" style={{marginBottom: 10}}>
        Score more in PTE
Discover how Abroad way PTE Coaching can help you       </Typography>
      </CardContent>
      
     
    </Card>
    <Card className="coaching-card">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom><a href="/coaching/PTE">PTE</a></Typography>
        
        <Typography variant="p" component="h5" style={{marginBottom: 10}}>
        Master IELTS for your best score
Learn more about Abroad way IELTS Coaching      </Typography>
      </CardContent>
      
     
    </Card>
    <Card className="coaching-card">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom><a href="/coaching/SAT">SAT</a></Typography>
        
        <Typography variant="p" component="h5" style={{marginBottom: 10}}>
        Ace TOEFL in the first attempt
Explore Abroad way TOEFL Coaching      </Typography>
      </CardContent>
      
     
    </Card>
    <Card className="coaching-card">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom><a href="/coaching/TOEFL">TOEFL</a></Typography>
        
        <Typography variant="p" component="h5" style={{marginBottom: 10}}>
        Abroad way SAT Coaching is an intensive training program designed to help you achieve your highest score.     </Typography>
      </CardContent>
      
     
    </Card>
    
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services-coach mt-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-up"
            >
              <h2>OUR LEARNING ENVIRONMENT</h2>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <BusinessIcon style={{ fontSize: 80 }} />

                  <h4 className="title-custom">
                    <a href="">
                      MODERN
                      <br />
                      ENVIRONMENT
                    </a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <ClassIcon style={{ fontSize: 80 }} />
                  <h4 className="title-custom">
                    <a href="">
                      CLASS
                      <br />
                      ROOM
                    </a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <LiveTvIcon style={{ fontSize: 80 }} />
                  <h4 className="title-custom">
                    <a href="">
                      LIVE
                      <br />
                      CLASSROOM
                    </a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>{" "}
              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <PermIdentityIcon style={{ fontSize: 80 }} />

                  <h4 className="title-custom">
                    <a href="">
                      PRIVATE
                      <br />
                      TUTORING
                    </a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>{" "}
              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <WbSunnyIcon style={{ fontSize: 80 }} />

                  <h4 className="title-custom">
                    <a href="">EARLY MORNING CLASSES</a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>{" "}
              <div
                className="col-md-6 col-lg-2 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <Brightness3Icon style={{ fontSize: 80 }} />

                  <h4 className="title-custom">
                    <a href="">
                      NIGHT
                      <br />
                      CLASSES
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  
}

