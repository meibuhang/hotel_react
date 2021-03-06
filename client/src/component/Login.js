import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as auths from "../api/auth";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import "./loginRegister.css";
function LoginForm({ onSubmit }) {
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="lg">
      <div className="formRegister">
        <Card>
          <CardContent>
            <div>
              <h2 style={{ textAlign: "center" }}>Login</h2>
            </div>
            <div className="Register">
              <form
                noValidate
                autoComplete="off"
                onSubmit={event => {
                  event.preventDefault();
                  onSubmit(event);
                }}
              >
                {" "}
                <InputLabel htmlFor="standard-adornment-password">
                  Email
                </InputLabel>
                <TextField fullWidth name="email" type="text" />
                <InputLabel
                  htmlFor="standard-adornment-password"
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  Password
                </InputLabel>
                <Input
                  name="password"
                  label="password"
                  style={{ width: "100%" }}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button
                  type="submit"
                  name="register"
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Login
                </Button>
              </form>

              <div className="tagFormFooter" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
export default class Login extends React.Component {
  handleSubmit = event => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      auths
        .login({ email, password })
        .then(() => {
          window.location = "/";
        })
        .catch(error => {
          alert("Gagal login");

          throw error;
        });
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
