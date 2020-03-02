import React, { Fragment } from "react";
import Logo from "../assets/img/logo.png";
import Modal from "react-modal";
import ContactForm from "../Components/ContactForm";
import customStyles from "../assets/css/style";

export default function App() {
  Modal.setAppElement("#root");

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex">
        <div className="logo mr-auto">
          <a href="index.html">
            <img src={Logo} alt="Abroad Way" />
          </a>
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/coaching">Coaching</a>
            </li>
            <li>
              <a href="/country">Country</a>
            </li>
            <li>
              <a href="/visa">Visa</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>

            <li className="get-started">
              <a onClick={openModal}>Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="col-6"
      >
        <ContactForm
          style={{
            top: "100%",
            left: "100%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            marginTop: "50%",
            marginLeft: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.25)",
            border: 0
          }}
        />
      </Modal>
    </header>
  );
}
