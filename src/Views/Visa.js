import React, { Component } from "react";
import Background from '../assets/img/visa-header.jpg';
import Card from '../Components/Card';
import '../assets/css/style.css';

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
            `url(https://images.unsplash.com/photo-1532188142562-df556b861e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
            backgroundPositionY:'center',
            width: "100%",
            height: "400px"
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="page-title">Visa Immigration</h1>{" "}
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p className="page-description">
                Applying for a visa can be a stressful prospect. With an endless train of paperwork and documentation, it can quickly become overwhelming. Abroad way has the knowledge, experience and robust processes to help you navigate complex visa procedures and file your visa application with greater confidence.
                </p>
              </div>
            </div>
          </div>

        </div>
        <section id="services" className="services section-bg">
          <div className="container">
        <div className="row">
            <Card title="JOB SEEKER VISA"  desc="The job seeker visa for Germany is a Long-Term Residency Permit, which allows you to stay in the country for six months and look for a job." img="https://images.unsplash.com/photo-1476231790875-016a80c274f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />


            <Card title="PR VISA"  desc="Migration has become a common phenomenon in recent times with more people willing to move away from their country and settle down in another country." img="https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=999&q=80"/>


            <Card title="VISITOR VISA"  desc="The world is a beautiful place if you have sparkling eyes to catch the beauties and store them up in memories." img="https://images.unsplash.com/photo-1524467128837-00f6644866d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1038&q=80" />


            <Card title="STUDY VISA"  desc="Studying abroad is one of the most transformative and life-changing experiences. Abroad way helps you make the most of this huge investment in time and cost." img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>


            <Card title="BUSINESS VISA"  desc="As the world opens up to more business between countries, a golden opportunity has emerged for entrepreneurs. Business Visas help facilitate trade and business." img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />


            <Card title="INVESTOR VISA"  desc="With a favourable immigration climate now is a great time for you to explore your options of settling abroad with your family and setting up business operations." img="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>


            <Card title="DEPENDENT VISA"  desc="A dependent visa, known by various names officially, grants the dependents of a lawful resident (permanent/temporary) the rights to enter and reside in a country." img="https://images.unsplash.com/photo-1472377622610-57ef965c89f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>


            <Card title="TOURIST VISA"  desc="Applying for a visa can be intimidating. With an endless list of rules to follow and documentation, it can become overwhelming." img="https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80"/>


            <Card title="STUDY HOLIDAY VISA"  desc="The Working Holiday Visa offers the opportunity to explore and amazing lifestyle whilst also allowing you to work and study courses such as English Language." img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />

        </div>
        </div>
        </section>
      </section>
    );
  }
}

export default Visa;
