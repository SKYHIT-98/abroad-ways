import React from 'react'

export default function America() {
    return (
        <>
        <section>
        <div
          className="page-header"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
            backgroundPositionY: "center",
            width: "100%",
            height: "400px"
          }}
        >
            <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="country-page-title">CANADA IMMIGRATION</h1>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p className="page-description">
                Canada is one of the most popular countries where people from all over the world immigrate to, and many people dream of obtaining a permanent resident Visa in Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
