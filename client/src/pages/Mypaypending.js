/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Room.css";
import {
  Typography,
  Divider,
  Grid,
  Card,
  CardContent
} from "@material-ui/core";
import Nav from "../component/Nav";

import moment from "moment";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getPending } from "../_actions/order";
class Pending extends Component {
  componentDidMount() {
    this.props.getPending();
  }
  render() {
    const { pendingData, isLoadingpen, errorpen } = this.props.myPending;

    if (errorpen) {
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

    if (isLoadingpen) {
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
            Pending Payment :
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

          {pendingData.length === 0 && (
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
          <div style={{ marginTop: "20px", marginLeft: "0", marginRight: "0" }}>
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {pendingData.map((pendingData, index) => {
                return (
                  <Grid item xs={12} sm={12} lg={6} md={6} key={index}>
                    <div style={{ marginTop: "30px" }}>
                      <Link
                        to={`/pages/payment/${pendingData.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Card>
                          <CardContent>
                            <Typography
                              variant="body1"
                              style={{
                                color: "#212121",
                                fontWeight: "bold"
                              }}
                            >
                              You Have Booked Our Rooms :
                            </Typography>{" "}
                            <Divider
                              style={{
                                textAlign: "center",
                                width: "100%",
                                backgroundColor: "#bdbdbd",
                                margin: "15px 0"
                              }}
                            />
                            <Typography
                              variant="body1"
                              style={{
                                color: "#757575"
                              }}
                            >
                              For Date :{" "}
                              {String(moment(pendingData.start_date)).substring(
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
                              Room Type :{" "}
                              {pendingData.rooms_order
                                ? pendingData.rooms_order.type_rooms
                                : ""}
                            </Typography>
                            <Typography
                              variant="body1"
                              style={{
                                color: "#757575"
                              }}
                            >
                              Total : {pendingData.total_price}
                            </Typography>
                            <Typography
                              variant="body1"
                              style={{
                                color: "#d30000",
                                fontWeight: "bold"
                              }}
                            >
                              Status : {pendingData.status}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = states => {
  return {
    myPending: states.pendingAll
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPending: () => {
      dispatch(getPending());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pending);
