import {
  GET_DETAILPAYMENT,
  GET_ALLAPPROVED,
  GET_ALLPENDING,
  GET_ALLREPORT
} from "../config/constants";
import axios from "axios";
const token = localStorage.getItem("auths");

export const getDetailPayment = idOrder => {
  return {
    type: GET_DETAILPAYMENT,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/hotel/rooms/payment/order/" + idOrder,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

export const getApproved = () => {
  return {
    type: GET_ALLAPPROVED,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/hotel/rooms/order/approved",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

export const getReport = () => {
  return {
    type: GET_ALLREPORT,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/hotel/rooms/payment/allReport",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

export const getPending = () => {
  return {
    type: GET_ALLPENDING,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/hotel/rooms/order/pending",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
