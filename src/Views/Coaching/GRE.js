import React from "react";
import CountryCard from "../../Components/CountryCard";

export default function GRE() {
  return (
    <>
      <section>
        <div
          className="page-header"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)`,
            backgroundPositionY: "center",
            width: "100%",
            height: "400px"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="coaching-page-title">GRE</h1>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p className="page-description">
                  Abroad way provides coaching for GRE that combines both in
                  class training and other learning options to suit hectic
                  lifestyles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>WHAT IS GRE?</h2>
          </div>
          <div
            class="migrateabroad_txt whyielts_txt"
            style={{ textAlign: "justify" }}
          >
            <p>
              The <strong>Graduate Record Examination or the GRE</strong> is a
              standardized test that is used to measure the verbal,
              mathematical, and analytical writing skills of students who wish
              to do their graduate studies abroad.
            </p>
            <p>
              The test helps to assess the potential of the applicant for
              advanced study. The GRE score is used by graduate schools in
              different countries to select applicants. Students applying to
              these universities must submit their GRE scores with their
              application.
            </p>
            <p>
              This is a computer-based test where each student will get a unique
              set of questions. The maximum score for GRE is 340. However, the
              GRE score is not the only criteria which will determine the
              applicant’s admission to a university. The test is only one of the
              factors that is taken into consideration.
            </p>
            <br/>
            <h3>What Is The Eligibility Criteria For GRE?</h3>
            <br/>
            <p>
              Applicants for the test need to have only a valid passport to take
              the GRE exam. The exam does not require a minimum qualification or
              age requirement. The tests are conducted at Prometric Testing
              Centers located across the country.
            </p>
            <br/>
            <h3>What Is The GRE Exam Like?</h3><br/>
            <p>The GRE exam consists of 3 modules:</p>{" "}
            <div class="immigrationprocess_txt">
              {" "}
              <ul>
                {" "}
                <li>Analytical Writing</li> <li>Verbal Reasoning</li>{" "}
                <li>Quantitative Reasoning</li>{" "}
              </ul>
            </div>
            <p>
              There is an option to either take a paper-based or computerized
              test. The Analytical Writing module is the first section in the
              test while the others are presented in a random order. There may
              also be un-scored sections in the tests. The duration of the test
              is about 3 hours and 45 minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
