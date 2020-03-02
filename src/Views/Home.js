import React, { Fragment } from "react";
import Img1 from "../assets/img/1.jpg";
import Img2 from "../assets/img/2.jpg";
import Img3 from "../assets/img/3.jpg";
import ContactForm from '../Components/ContactForm';

class Home extends React.Component {
  render() {
    return (
      <>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>Dream of studying abroad?</h1>
                <h2>
                  IELTS | PTE | SPOKEN ENGLISH | STUDY VISA | TOURIST VISA |
                  TOUR PACKAGE
                </h2>
                <a href="#about" className="btn-get-started scrollto">
                  Start Coaching Today
                </a>
              </div>
              <div className="col-lg-6 order-lg-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section-bg">
          <div className="container">
            <div className="section-title aos-init aos-animate" data-aos="fade-up">
              <h1>Immigration - Choose your country!</h1>
              <h3>
                Suspendisse non commodo uspendisse sodales viverra fermenec
                aliquam ultricies justo, eget ornare augue volutpat idsed
                gravida sapien suscipit .
              </h3>
            </div>

            <div className="row">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Latest News</h2>
                  <p>
                    We Are A Creative Digital Agency. Focused on Growing Brands
                    Online
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div
                  className="single-blog-area wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: 0.5,
                    animationName: "fadeInUp"
                  }}
                >
                  <img src="img/blog-img/blog-1.jpg" alt="" />
                  <div className="blog-content">
                    <h5>
                      <a href="static-page.html">We Create Experiences</a>
                    </h5>
                    <p>
                      The Fancy that recognize the talent and effort of the best
                      web designers, developers and agencies in the world.
                    </p>
                    <a href="static-page.html">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="single-blog-area wow fadeInUp" data-wow-delay="1s">
                  <img src="img/blog-img/blog-2.jpg" alt="" />
                  <div className="blog-content">
                    <h5>
                      <a href="static-page.html">Simple, Fast And Fun</a>
                    </h5>
                    <p>
                      The Fancy that recognize the talent and effort of the best
                      web designers, developers and agencies in the world.
                    </p>
                    <a href="static-page.html">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div
                  className="single-blog-area wow fadeInUp"
                  data-wow-delay="1.5s"
                >
                  <img src="img/blog-img/blog-3.jpg" alt="" />
                  <div className="blog-content">
                    <h5>
                      <a href="static-page.html">Device Friendly</a>
                    </h5>
                    <p>
                      The Fancy that recognize the talent and effort of the best
                      web designers, developers and agencies in the world.
                    </p>
                    <a href="static-page.html">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       </>
    );
  }
}
export default Home;
