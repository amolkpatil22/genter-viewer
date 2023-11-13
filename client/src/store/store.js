import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { interviewReducer } from "../Pages/InterviewPage/interviewReducer";

const rootReducer=combineReducers({
    interviewReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))