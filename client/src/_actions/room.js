import { GET_ROOMS, GET_DETAILROOMS } from "../config/constants";
import axios from "axios";
const token = localStorage.getItem("auths");

export const getRooms = () => {
  return {
    type: GET_ROOMS,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/hotel/rooms/all",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

export const getDetailRooms = idRoom => {
  return {
    type: GET_DETAILROOMS,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/hotel/rooms/" + idRoom,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
