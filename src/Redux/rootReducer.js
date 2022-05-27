import { combineReducers } from "redux";
import { shopReducer } from "./shopeSlice";

const rootReducer = combineReducers({ shopReducer });

export default rootReducer;
