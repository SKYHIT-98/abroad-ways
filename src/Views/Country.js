import React, { Component } from "react";
import Background from '../assets/img/country-header.jpg';
import '../assets/css/style.css';

import America from '../assets/img/flags/america.png';
import Australia from '../assets/img/flags/australia.png'
import canada from '../assets/img/flags/canada.png';
import germany from '../assets/img/flags/germany.png';
import nepal from '../assets/img/flags/nepal.png';
import uae from '../assets/img/flags/uae.png';
import uganda from '../assets/img/flags/uganda.png';
import uk from '../assets/img/flags/uk.png';


class Visa extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <div
          className="page-header"
          style={{
            backgroundImage:
            `url(https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
            backgroundPositionY:'center',
            width: "100%",
            height: "400px"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="country-page-title">Country</h1>{" "}
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p className="page-description">
                With over a decade of experience, Global Tree specializes in providing immigration counseling and visa processing services.
               </p>
              </div>
            </div>
          </div>

        </div>
        <section id="services" className="services section-bg">
          <div className="container">
        <div className="row">
          


            <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
              <a href="/country/America">
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={America} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>AMERICA</h4>
        <p></p>
                        </div>
                    </div>
                    </a>
                </div>
                
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={canada} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>CANADA</h4>
        <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={germany} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>GERMANY</h4>
        <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={germany} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>EUROPE</h4>
        <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={uk} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>UNITED KINGDOM</h4>
        <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={Australia} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>AUSTRALIA</h4>
        <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={uae} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>DUBAI</h4>
        <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={nepal} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>NEPAL</h4>
        <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box-flag" >
                        <div class="service-img-icon">
                            <img src={uganda} alt="service-icon " class="img-fluid service-icon-flag " />
                        </div>
                        <div class="service-inner">
        <h4>UGANDA</h4>
        <p></p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </section>
      </section>
    );
  }
}

export default Visa;
