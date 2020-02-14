import React, { Component } from "react";
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
  Button
} from "@material-ui/core";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getRooms } from "../_actions/room";

class Room extends Component {
  componentDidMount() {
    this.props.getRooms();
  }
  render() {
    const { roomsData, isLoading, error } = this.props.allRooms;
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
            Our Rooms
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
              {roomsData.length === 0 && (
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
              {roomsData.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    lg={4}
                    md={4}
                    key={index}
                    style={{ width: "345px", margin: "0 auto" }}
                  >
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.photo}
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.type_rooms}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.detail_rooms.substring(0, 20)}
                        </Typography>
                      </CardContent>

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
                              IDR {item.price}&nbsp;
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
                        <div
                          style={{
                            margin: "0 auto",
                            float: "right",
                            display: "block",
                            textAlign: "center"
                          }}
                        >
                          <Button
                            size="small"
                            color="primary"
                            style={{
                              backgroundColor: "#795548",
                              color: "#fff"
                            }}
                            href={"/pages/detailroom/" + item.id}
                          >
                            Detail Room
                          </Button>
                        </div>
                        <div style={{ clear: "both" }}></div>
                      </CardActions>
                    </Card>
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
const mapStateToProps = state => {
  return {
    allRooms: state.rooms
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRooms: () => {
      dispatch(getRooms());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
