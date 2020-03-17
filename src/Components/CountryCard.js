import React, { Component } from 'react';

class CountryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div class="col-lg-4 col-sm-6 col-md-6" style={{cursor: "pointer"}}>
                    <div class="service-box" style={{backgroundImage: "url(../../assets/img/flags/uae.png)"}}>
                        <div class="service-img-icon">
                            <img src="../../assets/img/flags/uae.png" alt="service-icon " class="img-fluid service-icon " />
                        </div>
                        <div class="service-inner">
        <h4>{this.props.country}</h4>
        <p>{this.props.detail}</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CountryCard;