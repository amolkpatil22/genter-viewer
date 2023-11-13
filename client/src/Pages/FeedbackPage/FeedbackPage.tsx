import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const dummyFeedbackData = [
    { parameter: 'Communication Skills', rating: 4, comment: 'Great communication during the interview.' },
    { parameter: 'Technical Knowledge', rating: 5, comment: 'Impressive technical knowledge and problem-solving skills.' },
    { parameter: 'Team Collaboration', rating: 3, comment: 'Average collaboration skills with the team.' },
];

export const FeedbackPage = () => {
    const Navigate = useNavigate()
    const [feedbackData, setFeedbackData] = useState(dummyFeedbackData);
    const dispatch = useDispatch()
    const { sessionID, questions } = useSelector((store: any) => {
        return {
            questions: store.landingReducer.questions,
            sessionID: store.landingReducer.sessionID,
        }
    }, shallowEqual)

    useEffect(() => {
        axios.get(`https://genterviewer-backend.up.railway.app/feedback/:${sessionID}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }, [])


    const handleChange = () => {
        Navigate("/")
    }

    return (
        <div>
            <div>
                <h2>Interview Feedback</h2>
                {feedbackData.map((feedback, index) => (
                    <div key={index}>
                        <h3>{feedback.parameter}</h3>
                        <p>Rating: {feedback.rating}</p>
                        <p>Comment: {feedback.comment}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <button onClick={handleChange}>Close this Session</button>
        </div>

    )
}