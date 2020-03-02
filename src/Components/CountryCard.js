import React, { Component } from 'react';
import Flag from '../assets/img/us.jpg';

class CountryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            <img src={Flag} alt="service-icon " class="img-fluid service-icon " />
                        </div>
                        <div class="service-inner">
                            <h4>America</h4>
                            <p>Reach a huge area of users and get a publicty of your product and service ,<span>video marketing</span> solution.</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CountryCard;