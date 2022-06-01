import { combineReducers } from "redux";
import operationReducer from "./operationReducer";

export const reducers = combineReducers({
    operations: operationReducer
})