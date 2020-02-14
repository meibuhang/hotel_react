import { GET_ROOMS, GET_DETAILROOMS } from "../config/constants.js";

//allrooms
const initialState = {
  roomsData: [],
  isLoading: false,
  isPosts: false,
  error: false
};

//detailrooms
const detailState = {
  details: [],
  isLoadingDet: false,
  isPosts: false,
  errorDet: false
};

export const rooms = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROOMS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ROOMS}_FULFILLED`:
      return {
        ...state,
        roomsData: action.payload.data.rooms,
        isLoading: false
      };
    case `${GET_ROOMS}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };

    default:
      return state;
  }
};

//detail rooms
export const detailRooms = (state = detailState, action) => {
  switch (action.type) {
    case `${GET_DETAILROOMS}_PENDING`:
      return {
        ...state,
        isLoadingDet: true
      };
    case `${GET_DETAILROOMS}_FULFILLED`:
      return {
        ...state,
        details: action.payload.data,
        isLoadingDet: false
      };
    case `${GET_DETAILROOMS}_REJECTED`:
      return {
        ...state,
        errorsDet: true,
        isLoadingDet: false
      };

    default:
      return state;
  }
};
