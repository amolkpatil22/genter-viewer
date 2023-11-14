import axios from "axios";
import { QuestionFailure, QuestionRequest, QuestionSuccess } from "./landingReducer";



export const questionsFetch = (data) => (dispatch) => {
    dispatch({ type: QuestionRequest })
    axios.post("https://genterviewer-backend.up.railway.app/", data)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem("sessionID", JSON.stringify(res.data.sessionID));
            localStorage.setItem("session_id", JSON.stringify(res.data.session_id));           
            dispatch({ type: QuestionSuccess, payload: { questions: res.data.questions, sessionID: res.data.sessionID,session_id:res.data.session_id } })       

        })
        .catch((err) => { console.log(err); dispatch({ type: QuestionFailure }) })
}