import axios from "axios";
import { QuestionFailure, QuestionRequest, QuestionSuccess } from "./landingReducer";



export const questionsFetch = (data) => (dispatch) => {
    dispatch({ type: QuestionRequest })
    axios.post("https://genterviewer-backend.up.railway.app/", data)
        .then((res) => {
            localStorage.setItem("sessionID", JSON.stringify(res.data.sessionID));
            dispatch({ type: QuestionSuccess, payload: { questions: res.data.questions, sessionID: res.data.sessionID } })       

        })
        .catch((err) => { console.log(err); dispatch({ type: QuestionFailure }) })
}