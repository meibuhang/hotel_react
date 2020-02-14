import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Nav.css";
import Login from "./Login";
import Register from "./Register";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
// get token from sign in localstorage
const token = localStorage.getItem("auths");
let auth = false;
if (token === null) {
  auth = false;
} else {
  auth = true;
}

//clear local storage for signout
const signOut = () => {
  localStorage.clear();
  window.location = "/";
};

function panelMenu() {
  const roles = localStorage.getItem("role");
  if (roles === "user") {
    return (
      <div>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/pages/room">
          Rooms
        </Button>
        <Button color="inherit" href="/pages/reservation">
          My Reservation
        </Button>
        <Button color="inherit" href="/pages/mypending">
          Pending Payment
        </Button>

        <Button color="inherit" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    );
  } else if (roles === "resepsionis") {
    return (
      <div>
        <Button color="inherit">Home</Button>
        <Typography variant="body1">
          <Link to="/pages/room" className="linkNav">
            Rooms
          </Link>
        </Typography>
        <Button color="inherit">Check In Guest</Button>
        <Button color="inherit" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    );
  } else if (roles === "admin") {
    return (
      <div>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/pages/room">
          Rooms
        </Button>
        <Button color="inherit">In Order</Button>
        <Button color="inherit">Check In Guest</Button>
        <Button color="inherit" href="/pages/report/income">
          In Come Report
        </Button>
        <Button color="inherit" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    );
  }
}

export default function ButtonAppBar() {
  const classes = useStyles();
  //handle Modal login

  const [openModalLogin, setOpenModalLogin] = React.useState(false);

  const handleOpenModalLogin = () => {
    setOpenModalLogin(true);
  };

  const handleCloseModalLogin = () => {
    setOpenModalLogin(false);
  };
  //handle Modal register

  const [openModalRegister, setOpenModalRegister] = React.useState(false);

  const handleOpenModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#212121" }}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link to="/" className="linkNav">
              Luxury
            </Link>
          </Typography>

          <div className="myNav">
            {auth || (
              <div>
                <Button color="inherit" onClick={handleOpenModalRegister}>
                  Register
                </Button>
                <Button color="inherit" onClick={handleOpenModalLogin}>
                  Log In
                </Button>
              </div>
            )}
            {auth && panelMenu()}
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModalLogin}
            onClose={handleCloseModalLogin}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 100
            }}
          >
            <Fade in={openModalLogin}>
              <div>
                <Login />
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModalRegister}
            onClose={handleCloseModalRegister}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={openModalRegister}>
              <div>
                <Register />
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}
