import React, { Fragment } from "react";
import Logo from "../assets/img/logo.png";
import ContactForm from "../Components/ContactForm";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
   
    boxShadow: theme.shadows[5],
  },
}));

const options = [
  { name: "Home", link: "/" },
  { name: "Coaching", link: "/coaching" },
  { name: "Country", link: "/country" },
  { name: "Visa", link: "/visa" },
  { name: "About Us", link: "/about" },
  { name: "ContactUs", link: "/contactUs" }
];
const ITEM_HEIGHT = 48;

export default function App() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openM = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseM = () => {
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
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={openM}
          onClose={handleCloseM}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 10,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              className="nav-menu"
              key={option}
              selected={option === "Home"}
            >
              <ul>
                <li className="active">
                  <a href={option.link}>{option.name}</a>
                </li>
              </ul>
            </MenuItem>
          ))}
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

            <li className="get-started pointer">
              <a onClick={handleOpen}>Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <ContactForm
          // style={{
          //   top: "50%",
          //   left: "50%",
          //   right: "auto",
          //   bottom: "auto",
          //   marginRight: "-50%",
          //   marginTop: "50%",
          //   marginLeft: "50%",
          //   transform: "translate(-50%, -50%)",
          //   boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.25)",
          //   border: 0
          // }}
        />
          </div>
        </Fade>
      </Modal>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="col-6"
      >
        <ContactForm
          style={{
            top: "50%",
            left: "50%",
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
      </Modal> */}
    </header>
  );
}
