import React, { Component } from "react";
import "../App.css";
import "./Room.css";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Divider,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper
} from "@material-ui/core";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getReport } from "../_actions/order";

import moment from "moment";
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

class Income extends Component {
  componentDidMount() {
    this.props.getReport();
  }

  render() {
    const { reportData, isLoadingrep, errorRep } = this.props.allReport;

    const myDate = new Date();
    const sum = reportData
      .map(item => item.total_price)
      .reduce((prev, curr) => prev + curr, 0);

    if (errorRep) {
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

    if (isLoadingrep) {
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
            Report
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
            <TableContainer component={Paper}>
              <Table stickyHeader aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell align="center">Guest Name</StyledTableCell>
                    <StyledTableCell align="center">Type Room</StyledTableCell>
                    <StyledTableCell align="center">
                      Length Stay
                    </StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reportData.map(row => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {String(moment(row.start_date)).substring(0, 15)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.user_order ? row.user_order.name : ""}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {" "}
                        {row.rooms_order ? row.rooms_order.type_rooms : ""}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.length_stay} Nights
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        IDR {row.rooms_order ? row.rooms_order.price : ""}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        IDR {row.total_price}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  <StyledTableRow style={{ backgroundColor: "#000000" }}>
                    <StyledTableCell
                      align="center"
                      colSpan={5}
                      style={{ color: "#ffffff" }}
                    >
                      TOTAL
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ color: "#ffffff" }}
                    >
                      IDR {sum}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = statet => {
  return {
    allReport: statet.reportAll
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getReport: () => {
      dispatch(getReport());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Income);
