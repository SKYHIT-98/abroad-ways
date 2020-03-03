import React, { Component } from 'react';
import './ContactForm.css'



class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={this.props.style} class="card">
                <div class="card-body">
                    <h2 class="title">Registration Form</h2>
                    <form method="POST">
                        <div class="row row-space">
                            <div class="col-12">
                                <div class="input-group">
                                    <label class="label">Name</label>
                                    <input class="input--style-4" type="text" name="first_name" />
                                </div>
                            </div>
                            
                        </div>
                      
                        <div class="row row-space">
                            <div class="col-lg-6 col-sm-12">
                                <div class="input-group">
                                    <label class="label">Email</label>
                                    <input class="input--style-4" type="email" name="email" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="input-group">
                                    <label class="label">Phone Number</label>
                                    <input class="input--style-4" type="text" name="phone" />
                                </div>
                            </div>
                        </div>
                       
                        <div class="p-t-15">
                            <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;