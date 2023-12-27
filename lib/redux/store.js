import { createStore, combineReducers } from "redux";
import colorReducer from "./action";

const rootReducer = combineReducers({
  color: colorReducer,
});

const store = createStore(rootReducer);

export default store;
