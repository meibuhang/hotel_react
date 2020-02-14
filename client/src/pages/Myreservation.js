/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "../App.css";
import "./Room.css";
import { Typography, Divider, Grid } from "@material-ui/core";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getApproved } from "../_actions/order";
import moment from "moment";
class Reservation extends Component {
  componentDidMount() {
    this.props.getApproved();
  }
  render() {
    const { approvedData, isLoadingap, errorap } = this.props.myApproved;

    if (errorap) {
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

    if (isLoadingap) {
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

          {approvedData.length === 0 && (
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
                {" "}
                <Grid
                  container
                  spacing={3}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    style={{ width: "345px" }}
                  >
                    {" "}
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
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
          {approvedData.map((approvedData, index) => {
            return (
              <div
                style={{
                  padding: "5px 5px",

                  backgroundColor: "#bcaaa4",
                  marginTop: "40px"
                }}
              >
                <div
                  style={{
                    padding: "5px 5px",

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
                            color: "#795548",
                            fontWeight: "bold",
                            textAlign: "center"
                          }}
                        >
                          LUXURY HOTEL - RESERVATION
                        </Typography>

                        <div style={{ padingTop: "2px" }}>
                          <Typography
                            gutterBottom
                            variant="body1"
                            style={{
                              color: "#616161",
                              fontSize: "12px",
                              textAlign: "center"
                            }}
                          >
                            The Perfect & Quality Stay For Your Relaxation
                          </Typography>
                        </div>
                      </div>

                      <Divider
                        style={{
                          textAlign: "center",
                          width: "100%",
                          paddingTop: "2px",
                          backgroundColor: "#616161",
                          marginTop: "15px "
                        }}
                      />
                      <div style={{ padingTop: "2px", marginTop: "15px " }}>
                        <Typography
                          gutterBottom
                          variant="body1"
                          style={{
                            color: "#616161",
                            fontSize: "12px",
                            textAlign: "center"
                          }}
                        >
                          Thankyou For Trusting Us
                        </Typography>
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
                          {approvedData.user_order
                            ? approvedData.user_order.name
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
                          {approvedData.user_order
                            ? approvedData.user_order.email
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
                          {approvedData.user_order
                            ? approvedData.user_order.phone
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
                        ID Booking : {approvedData ? approvedData.id : ""}
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="body1"
                        style={{
                          color: "#757575",
                          fontWeight: "500"
                        }}
                      >
                        Room Type :{" "}
                        {approvedData.rooms_order
                          ? approvedData.rooms_order.type_rooms
                          : ""}
                      </Typography>

                      <Typography
                        variant="body1"
                        style={{
                          color: "#757575"
                        }}
                      >
                        Check In Date :{" "}
                        {String(moment(approvedData.start_date)).substring(
                          0,
                          15
                        )}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          color: "#757575"
                        }}
                      >
                        Check Out Date :{" "}
                        {String(moment(approvedData.end_date)).substring(0, 15)}
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="body1"
                        style={{
                          color: "#757575"
                        }}
                      >
                        Price : IDR{" "}
                        {approvedData.rooms_order
                          ? approvedData.rooms_order.price
                          : ""}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        style={{
                          color: "#757575"
                        }}
                      >
                        Amount : IDR {approvedData.total_price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        style={{
                          color: "#757575",
                          fontWeight: "bold"
                        }}
                      >
                        Status : {approvedData.status}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = states => {
  return {
    myApproved: states.approvedAll
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getApproved: () => {
      dispatch(getApproved());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
