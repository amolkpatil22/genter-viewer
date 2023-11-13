
export const QuestionRequest = "QuestionRequest"
export const QuestionSuccess = "QuestionSuccess"
export const QuestionFailure = "QuestionFailure"

let int = {
    questions: [],
    sessionID: JSON.parse(localStorage.getItem("sessionID")) || "",
    isLoading: false,
    isError: false
}

export const landingReducer = (state = int, { type, payload }) => {
    switch (type) {
        case QuestionRequest: return ({ ...state, isLoading: true })
        case QuestionSuccess: return { ...state, isLoading: false, questions: payload.questions, sessionID: payload.sessionID }
        case QuestionFailure: return ({ ...state, isLoading: false, isError: true })
        default: return state
    }
}

