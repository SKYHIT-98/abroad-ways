import React, { Fragment } from "react";
import Logo from "../assets/img/logo.png";
import Modal from "react-modal";
import ContactForm from "../Components/ContactForm";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  {name:"Home",link:"/"},
  {name:"Coaching",link:"/coaching"},
  {name:"Country",link:"/country"},
  {name:"Visa",link:"/visa"},
  {name:"About Us",link:"/about"},
  {name:"ContactUs",link:"/contactUs"},

];
const ITEM_HEIGHT = 48;

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  

  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex">
        <div className="logo mr-auto">
          <a className="mr-auto" href="/">
            <img src={Logo} alt="Abroad Way" />
          </a>
          
     
        </div>
        <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="d-lg-none"
      >
        <MoreVertIcon />
      </IconButton>
        <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {options.map(option => (
          <MenuItem className="nav-menu" key={option} selected={option === 'Home'}>
            <ul> <li className="active">
              <a href={option.link}>{option.name}</a>
            </li>
           
            </ul>
            
          </MenuItem>
         

        ))}
         <MenuItem className="nav-menu">
          <ul> <li className="get-started">
              <a onClick={openModal}>Get Started</a>
            </li>
         
          </ul>
          
        </MenuItem>
      </Menu>
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
