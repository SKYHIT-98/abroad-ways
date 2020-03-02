import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="fixed-bottom">
        <div className="container py-4">
          <div className="copyright">
            © Copyright 
            <strong>
              <span> SKYHIT</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="/">MOHIT</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
