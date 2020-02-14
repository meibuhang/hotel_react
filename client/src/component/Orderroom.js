/* eslint-disable no-undef */
import React, { Component } from "react";
import "../pages/Room.css";
import {
  Card,
  CardContent,
  Button,
  Divider,
  Typography,
  FormControl
} from "@material-ui/core/";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
export default class Orderroom extends Component {
  // for modal
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(), //sesuai permintaan state
      endDate: new Date(),
      date1: "",
      date2: "",
      total_price: "",
      error: {},
      show: false
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
  }
  showModal = idRoom => () => {
    this.setState({ show: true });
    const idroom = idRoom;
    console.log(idroom, "ini dia");
    //console.log(price, "ini dia harga");
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  closeModal = () => {
    this.setState({ show: false });
  };
  // end for modal

  handleChangeStart(date) {
    this.setState({
      startDate: date,
      date1: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date,
      date2: date
    });
  }

  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);

    return endDate.diff(startDate, "days");
  }

  handleSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("auths");
    const id = this.props.idRoom;
    axios({
      method: "post",
      url: `http://localhost:5000/api/hotel/rooms/${id}/order`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        start_date: this.state.date1,
        end_date: this.state.date2
      }
    })
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
        window.location = `/pages/mypending`; //direct halaman
      })
      .catch(err => {
        this.setState({ data: err, isLoading: false });
      });
  };

  // end for submit

  render() {
    const price = this.props.price;
    const { startDate, endDate } = this.state;
    const daysLeft = this.calculateDaysLeft(startDate, endDate);
    const total = daysLeft * price;
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <Card style={{ width: "100%", height: "100%" }}>
            <CardContent>
              <div style={{ margin: "0 auto", justifyItems: "center" }}>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ textAlign: "center" }}
                >
                  Book Your Room
                </Typography>
                <Divider
                  style={{
                    width: "20%",
                    paddingTop: "2px",
                    backgroundColor: "#bcaaa4",
                    marginTop: "5px",
                    marginBottom: "5px",
                    position: "fixed",
                    left: "40%"
                  }}
                />
              </div>

              <FormControl
                noValidate
                autoComplete="off"
                onSubmit={this.handleReverse}
              >
                <div style={{ marginTop: "20px" }}>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "12px", color: "#9e9e9e" }}
                  >
                    Start Date
                  </Typography>
                  <DatePicker
                    name="date1"
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "12px", color: "#9e9e9e" }}
                  >
                    End Date
                  </Typography>{" "}
                  <DatePicker
                    name="date2"
                    selected={this.state.endDate}
                    onChange={this.handleChangeEnd}
                  />
                </div>

                {/* <TextField
                  required
                  id="order"
                  name="order_qty"
                  label="Quantity"
                  type="number"
                  value={this.state.input}
                  onChange={this.handleChange}
                  fullWidth
                  required
                /> */}
                <div style={{ marginTop: "20px" }}>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "14px", color: "#01579b" }}
                  >
                    Length Of Stay : {daysLeft}
                  </Typography>
                </div>
                <label
                  name="total_price"
                  style={{
                    color: "#d50000",
                    fontSize: "20px",
                    fontWeight: "500"
                  }}
                >
                  Total : Rp {total}
                </label>

                <div style={{ display: "flex", paddingTop: "20px" }}>
                  <Button
                    type="submit"
                    name="order"
                    variant="outlined"
                    size="large"
                    color="primary"
                    onClick={this.handleSubmit}
                    style={{
                      marginTop: "30px",
                      marginBottom: "20px",
                      marginRight: "30px",
                      backgroundColor: "#01579b",
                      color: "#fff",
                      border: "none"
                    }}
                  >
                    Book Now
                  </Button>
                  <Button
                    type="submit"
                    name="order"
                    variant="outlined"
                    size="large"
                    color="primary"
                    style={{
                      marginTop: "30px",
                      marginBottom: "20px",
                      backgroundColor: "#212121",
                      color: "#fff",
                      border: "none"
                    }}
                    onClick={this.closeModal}
                  >
                    Close
                  </Button>
                </div>
              </FormControl>
            </CardContent>
          </Card>
        </Modal>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{
            backgroundColor: "#795548",
            color: "#fff"
          }}
          onClick={this.showModal(this.props.idRoom)}
        >
          BOOK NOW
        </Button>
      </main>
    );
  }
}
const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button onClick={handleClose}>Close</button> */}
      </section>
    </div>
  );
};
