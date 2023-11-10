import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyFeedbackData = [
    { parameter: 'Communication Skills', rating: 4, comment: 'Great communication during the interview.' },
    { parameter: 'Technical Knowledge', rating: 5, comment: 'Impressive technical knowledge and problem-solving skills.' },
    { parameter: 'Team Collaboration', rating: 3, comment: 'Average collaboration skills with the team.' },
];

export const FeedbackPage = () => {
    const Navigate = useNavigate()
    const [feedbackData, setFeedbackData] = useState(dummyFeedbackData);

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