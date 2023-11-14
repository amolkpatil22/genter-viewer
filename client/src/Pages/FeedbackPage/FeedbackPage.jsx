import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../HomeComponents/Navbar";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const dummyFeedbackData = [
  {
    parameter: "Communication Skills",
    rating: 4,
    comment: "Great communication during the interview.",
  },
  {
    parameter: "Technical Knowledge",
    rating: 5,
    comment: "Impressive technical knowledge and problem-solving skills.",
  },
  {
    parameter: "Team Collaboration",
    rating: 3,
    comment: "Average collaboration skills with the team.",
  },
];

export const FeedbackPage = () => {
  const Navigate = useNavigate();
  const [feedbackData, setFeedbackData] = useState(dummyFeedbackData);
  const dispatch = useDispatch();
  const { sessionID, questions, session_id } = useSelector((store) => {
    return {
      questions: store.landingReducer.questions,
      sessionID: store.landingReducer.sessionID,
      session_id: store.landingReducer.session_id,
    };
  }, shallowEqual);
  const [userData, setUserData] = useState({
    labels: dummyFeedbackData.map((data) => data.parameter),
    datasets: [
      {
        label: "Your performance",
        data: dummyFeedbackData.map((data) => data.rating),
        backgroundColor: ["rgba(75,192,192,1)", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`https://genterviewer-backend.up.railway.app/feedback/${session_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = () => {
    Navigate("/");
  };

  return (
    <>
      <Navbar />
      <div>
        {/* <div className="w-1/2">
                    <Bar data={userData} />
                </div> */}
        <div className="flex" style={{ width: "80%" }}>
          {dummyFeedbackData.map((feedback, index) => (
            <div key={index} style={{ margin: "20px", textAlign: "center" }}>
              <h3>{feedback.parameter}</h3>
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [feedback.rating, 10 - feedback.rating],
                      backgroundColor: ["#4CAF50", "#e0e0e0"],
                    },
                  ],
                }}
                options={{
                  cutout: "80%",
                  plugins: {
                    legend: false,
                    doughnutlabel: {
                      labels: [
                        {
                          text: `${feedback.rating}/10`,
                          font: {
                            size: "20",
                            weight: "bold",
                          },
                        },
                      ],
                    },
                  },
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleChange}>Close this Session</button>
    </>
  );
};
