import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../App.css";
import "./Room.css";
import {
  Typography,
  Divider,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Box
} from "@material-ui/core";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Orderroom from "../component/Orderroom";
import { connect } from "react-redux";
import { getDetailRooms } from "../_actions/room";
import StarIcon from "@material-ui/icons/Star";
class Detailroom extends Component {
  componentDidMount() {
    this.props.getDetailRooms(this.props.idRoom);
  }
  render() {
    const { details, isLoadingDet, errorDet } = this.props.rooms;
    if (errorDet) {
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

    if (isLoadingDet) {
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
            Detail Room
          </Typography>
          <Divider
            style={{
              textAlign: "center",
              width: "5%",
              paddingTop: "2px",
              backgroundColor: "#bcaaa4",
              marginTop: "15px "
            }}
          ></Divider>
          <div
            style={{
              marginTop: "40px",
              flexGrow: "1"
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
              {details.length === 0 && (
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
                lg={9}
                md={12}
                style={{ width: "345px" }}
              >
                <Card style={{ display: "flex", flexGrow: "1" }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={details.photo}
                  />

                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        paddingTop: "15px",
                        marginBottom: "20px",
                        marginLeft: "10px",
                        fontWeight: "Bold",
                        alignItems: "center"
                      }}
                    >
                      <StarIcon /> &nbsp;{" "}
                      <Typography variant="h4">{details.type_rooms}</Typography>
                    </div>
                    <div>
                      <Typography variant="body1" color="textSecondary">
                        {details.detail_rooms}
                      </Typography>
                    </div>

                    <CardActions>
                      <div
                        style={{
                          display: "block",
                          float: "left",
                          margin: "0"
                        }}
                      >
                        <Button size="small">
                          {" "}
                          <Typography
                            variant="body1"
                            style={{
                              fontFamily: "'Noticia Text', serif",
                              color: "#000",
                              fontWeight: "700",
                              fontSize: "18px"
                            }}
                          >
                            IDR {details.price}&nbsp;
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{
                              fontFamily: "'Roboto', sans-serif",
                              color: "#000",
                              marginLeft: "0",
                              fontSize: "12px"
                            }}
                          >
                            {" "}
                            / night
                          </Typography>
                        </Button>
                      </div>
                    </CardActions>
                    <CardActions>
                      <Orderroom idRoom={details.id} price={details.price} />
                      <div style={{ clear: "both" }}></div>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    rooms: state.detailRooms,
    idRoom: ownProps.match.params.idRoom
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetailRooms: idRoom => {
      dispatch(getDetailRooms(idRoom));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Detailroom)
);
