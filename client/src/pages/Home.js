import React from "react";
import { Typography, Divider } from "@material-ui/core";
import Footer from "../component/Footer";
import "./Home.css";
import Nav from "../component/Nav";
import "typeface-nunito-sans";
export default function Home() {
  return (
    <div style={{ margin: "0 auto" }}>
      <Nav />
      <div className="header">
        <div className="section">
          <div className="textHeader">
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontFamily: "Nunito Sans",
                fontWeight: "500",
                color: "#fff"
              }}
            >
              Luxuary hotel & Resort Lifestyle
            </Typography>
            <Typography
              variant="h4"
              style={{
                textAlign: "center",
                fontWeight: "800",
                fontFamily: "Nunito Sans",
                color: "#fff"
              }}
            >
              The Perfect & Quality Stay For Your Relaxation
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                textAlign: "center",
                fontFamily: "Nunito Sans",
                color: "#fff"
              }}
            >
              So many people treat you like you're a kid so you might as well
              act like one and throw your television out of the hotel window.
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "80px",
          marginBottom: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontFamily: "Nunito Sans",
            fontWeight: "700"
          }}
        >
          Welcome to our Hotel Luxury
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
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            fontFamily: "Satisfy, cursive",
            fontStyle: "italic",
            marginTop: "20px",
            fontSize: "20px",
            color: "#616161"
          }}
        >
          This is an elegant hotel! Room service has an unlisted number.
        </Typography>
        <Typography
          variant="body1"
          style={{
            width: "70%",
            textAlign: "center",
            fontFamily: "Nunito Sans",
            fontStyle: "italic",
            marginTop: "20px",
            marginLeft: "0",
            marginRight: "0",
            fontSize: "18px",
            color: "#616161"
          }}
        >
          My desire to curtail undue freedom of speech extends only to such
          public areas as restaurants, airports, streets, hotel lobbies, parks,
          and department stores. Verbal exchanges between consenting adults in
          private are as of little interest to me as they probably are to them.
        </Typography>
      </div>
      <Footer />
    </div>
  );
}
