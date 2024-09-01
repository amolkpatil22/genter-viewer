import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { landingReducer } from "../Pages/LandingPage/landingReducer";

const rootReducer = combineReducers({
    landingReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))