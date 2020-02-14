import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";

//from reducers rooms
import { rooms, detailRooms } from "../_reducers/room";

//from orders and payment
import {
  detailPayment,
  approvedAll,
  reportAll,
  pendingAll
} from "../_reducers/order";

//combine the reducers :
const rootReducers = combineReducers({
  rooms,
  detailRooms,
  detailPayment,
  approvedAll,
  reportAll,
  pendingAll
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
