import React, { Component } from 'react'
import Background from '../assets/img/visa-card1.jpg';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <a href="/visa/jobseeker">
            <div className="icon-box">
            <img src={this.props.img} class="img-fluid" alt=""></img>
              <h4 className="title">
        <a>{this.props.title}</a>
              </h4>
              <p className="description">
              {this.props.desc}
              </p>
            </div>
            </a>
          </div>
        );
    }
}

export default Card;