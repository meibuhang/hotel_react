/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
import "./Room.css";
import { Typography, Divider, Grid, Button } from "@material-ui/core";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getDetailPayment } from "../_actions/order";
import axios from "axios";
import moment from "moment";
class Payment extends Component {
  componentDidMount() {
    this.props.getDetailPayment(this.props.idOrder);
  }
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      dataOrders: []
    };
    this.OnClick.bind(this);
  }

  //edit status pending
  OnClick = orderId => event => {
    event.preventDefault();
    const token = localStorage.getItem("auths");
    const data = this.state.dataOrders;
    const status_id = 1;

    console.log(orderId);
    if (data !== undefined) {
      alert("Thankyou ! We will be aproved your Order soon ");
      axios({
        method: "PUT",
        url: `http://localhost:5000/api/hotel/rooms/payment/confirmed/${orderId}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          status: status_id
        }
      }).then(respons => {
        window.location = "/pages/reservation";
        this.setState({
          status: respons.data
        });
      });
    } else {
      alert("authorized");
    }
  };
  render() {
    const { paymentData, isLoading, error } = this.props.order;

    if (error) {
      return (
        <div style={{ margin: "0 auto" }}>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              color: "#616161",
              textAlign: "center"
            }}
          >
            Oopps... Something Error :(
          </Typography>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="loading">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      );
    }
    return (
      <div style={{ margin: "0 auto" }}>
        <Nav />
        <div style={{ margin: "60px 80px", justifyContent: "center" }}>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              color: "#616161"
            }}
          >
            Your Booking Order :
          </Typography>
          <Divider
            style={{
              textAlign: "center",
              width: "5%",
              paddingTop: "2px",
              backgroundColor: "#bcaaa4",
              marginTop: "15px "
            }}
          />
          <div
            style={{
              padding: "5px 5px",
              flexGrow: "1",
              backgroundColor: "#bcaaa4",
              marginTop: "40px"
            }}
          >
            <div
              style={{
                padding: "5px 5px",
                flexGrow: "1",
                backgroundColor: "#fff"
              }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {paymentData.length === 0 && (
                  <Typography
                    gutterBottom
                    variant="h6"
                    style={{
                      color: "#212121",
                      fontWeight: "bold",
                      alignItems: "center",
                      textAlign: "center"
                    }}
                  >
                    Oups....No Data :({" "}
                  </Typography>
                )}

                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  md={6}
                  style={{ width: "345px" }}
                >
                  <div style={{ margin: "0 auto" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        color: "#212121",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      You Have Booked Our Rooms
                    </Typography>

                    <div style={{ padingTop: "2px" }}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        style={{
                          color: "#43a047",
                          fontSize: "12px",
                          textAlign: "center"
                        }}
                      >
                        One more steps to get your cozy room
                      </Typography>
                    </div>
                  </div>

                  <Divider
                    style={{
                      textAlign: "center",
                      width: "100%",
                      paddingTop: "2px",
                      backgroundColor: "#bdbdbd",
                      marginTop: "15px "
                    }}
                  />
                  <div
                    style={{
                      marginTop: "20px",
                      alignItems: "center",
                      textAlign: "center"
                    }}
                  >
                    <img
                      src="https://idebisnis.org/wp-content/uploads/2018/05/cetak-struk-mandiri-400x491.jpg"
                      width="150"
                      height="150"
                      style={{ border: "5px solid #424242" }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      alignItems: "center",
                      textAlign: "center"
                    }}
                  >
                    <Button
                      type="submit"
                      name="order"
                      variant="outlined"
                      size="large"
                      color="primary"
                      onClick={this.OnClick(paymentData.id)}
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#01579b",
                        color: "#fff",
                        border: "none"
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  md={6}
                  style={{ width: "345px" }}
                >
                  <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#212121"
                      }}
                    >
                      Your Personal Information &nbsp; :
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      gutterBottom
                      variant="body1"
                      style={{
                        color: "#757575",
                        fontWeight: "500"
                      }}
                    >
                      Name :{" "}
                      {paymentData.user_order
                        ? paymentData.user_order.name
                        : ""}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      style={{
                        color: "#757575",
                        fontWeight: "500"
                      }}
                    >
                      Email :{" "}
                      {paymentData.user_order
                        ? paymentData.user_order.email
                        : ""}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      style={{
                        color: "#757575",
                        fontWeight: "500"
                      }}
                    >
                      Phone :{" "}
                      {paymentData.user_order
                        ? paymentData.user_order.phone
                        : ""}
                    </Typography>
                    <Divider
                      style={{
                        textAlign: "center",
                        width: "100%",
                        paddingTop: "2px",
                        backgroundColor: "#bdbdbd",
                        marginTop: "15px "
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#212121"
                      }}
                    >
                      Booking Detail &nbsp; :
                    </Typography>
                  </div>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{
                      color: "#757575",
                      fontWeight: "500"
                    }}
                  >
                    Room Type :{" "}
                    {paymentData.rooms_order
                      ? paymentData.rooms_order.type_rooms
                      : ""}
                  </Typography>

                  <Typography
                    variant="body1"
                    style={{
                      color: "#757575",
                      fontWeight: "bold"
                    }}
                  >
                    Check In Date :{" "}
                    {String(moment(paymentData.start_date)).substring(0, 15)}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: "#757575",
                      fontWeight: "bold"
                    }}
                  >
                    Check Out Date :{" "}
                    {String(moment(paymentData.end_date)).substring(0, 15)}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{
                      color: "#757575",
                      fontWeight: "Bold"
                    }}
                  >
                    Price : IDR{" "}
                    {paymentData.rooms_order
                      ? paymentData.rooms_order.price
                      : ""}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{
                      color: "#bf360c",
                      fontWeight: "BOld",
                      fontSize: "20px"
                    }}
                  >
                    Amount : IDR {paymentData.total_price}
                  </Typography>
                  <Divider
                    style={{
                      textAlign: "center",
                      width: "100%",
                      paddingTop: "2px",
                      backgroundColor: "#bdbdbd",
                      marginTop: "15px "
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    order: state.detailPayment,
    idOrder: ownProps.match.params.idOrder
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetailPayment: idOrder => {
      dispatch(getDetailPayment(idOrder));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Payment)
);
