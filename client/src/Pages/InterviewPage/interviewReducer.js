

let init = {
    isSpeechEnded: null

}

export const interviewReducer = (state = init, { type, payload }) => {
    
    switch (type) {
        
        case "isSpeechEnded": return { ...state, isSpeechEnded: true }
        default: return state
    }
}