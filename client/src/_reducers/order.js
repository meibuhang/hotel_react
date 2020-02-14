import {
  GET_DETAILPAYMENT,
  GET_ALLAPPROVED,
  GET_ALLREPORT,
  GET_ALLPENDING
} from "../config/constants.js";

//allrooms
const initialState = {
  paymentData: [],
  isLoading: false,
  isPosts: false,
  error: false
};

const approvedState = {
  approvedData: [],
  isLoadingap: false,
  isPostsap: false,
  errorap: false
};

const reportState = {
  reportData: [],
  isLoadingrep: false,
  isPostrep: false,
  errorRep: false
};
const pendingState = {
  pendingData: [],
  isLoadingpen: false,
  isPostspen: false,
  errorpen: false
};
export const detailPayment = (stater = initialState, action) => {
  switch (action.type) {
    case `${GET_DETAILPAYMENT}_PENDING`:
      return {
        ...stater,
        isLoading: true
      };
    case `${GET_DETAILPAYMENT}_FULFILLED`:
      return {
        ...stater,
        paymentData: action.payload.data,
        isLoading: false
      };
    case `${GET_DETAILPAYMENT}_REJECTED`:
      return {
        ...stater,
        error: true,
        isLoading: false
      };

    default:
      return stater;
  }
};

export const approvedAll = (states = approvedState, action) => {
  switch (action.type) {
    case `${GET_ALLAPPROVED}_PENDING`:
      return {
        ...states,
        isLoadingap: true
      };
    case `${GET_ALLAPPROVED}_FULFILLED`:
      return {
        ...states,
        approvedData: action.payload.data,
        isLoadingap: false
      };
    case `${GET_ALLAPPROVED}_REJECTED`:
      return {
        ...states,
        errorap: true,
        isLoadingap: false
      };

    default:
      return states;
  }
};

export const reportAll = (statet = reportState, action) => {
  switch (action.type) {
    case `${GET_ALLREPORT}_PENDING`:
      return {
        ...statet,
        isLoadingrep: true
      };
    case `${GET_ALLREPORT}_FULFILLED`:
      return {
        ...statet,
        reportData: action.payload.data,
        isLoadingrep: false
      };
    case `${GET_ALLREPORT}_REJECTED`:
      return {
        ...statet,
        errorRep: true,
        isLoadingrep: false
      };

    default:
      return statet;
  }
};

export const pendingAll = (stated = pendingState, action) => {
  switch (action.type) {
    case `${GET_ALLPENDING}_PENDING`:
      return {
        ...stated,
        isLoadingpen: true
      };
    case `${GET_ALLPENDING}_FULFILLED`:
      return {
        ...stated,
        pendingData: action.payload.data,
        isLoadingpen: false
      };
    case `${GET_ALLPENDING}_REJECTED`:
      return {
        ...stated,
        errorpen: true,
        isLoadingpen: false
      };

    default:
      return stated;
  }
};
