import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../HomeComponents/Navbar";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Button, Spinner } from "@chakra-ui/react";
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
  const [result, setresult] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [modelAnswers, setmodelAnswers] = useState(null);
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

  const generateReport = () => {
    setisLoading(true);
    axios
      .get(`https://genterviewer-backend.up.railway.app/feedback/${session_id}`)
      .then((res) => {
        setisLoading(false);

        const parsedString = res.data.result
          .replace('"{', "{")
          .replace('}"', "}");
        const resultObject = JSON.parse(parsedString);
        setresult(resultObject);
        setmodelAnswers(res.data.modelAnswers);
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  };

  const handleChange = () => {
    Navigate("/");
  };

  console.log(modelAnswers);
  console.log(result);
  return (
    <>
      <Navbar />
      {modelAnswers && (
        <div>
          <div
            className="flex justify-between my-9"
            style={{ width: "20%", marginLeft: "15%" }}
          >
            <div className="mx-3">
              <h1 className="text-lg font-bold">
                Accuracy : {result?.accuracy}/10
              </h1>
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [result?.accuracy, 10 - result?.accuracy],
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
                          text: `${result?.accuracy}/10`,
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
            <div className="mx-3">
              <h1 className="text-lg font-bold">
                Communication : {result?.communication}/10
              </h1>
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [result?.communication, 10 - result?.communication],
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
                          text: `${result?.communication}/10`,
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
            <div className="mx-3">
              <h1 className="text-lg font-bold">
                Knowledge : {result?.knowledge}/10
              </h1>
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [result?.knowledge, 10 - result?.knowledge],
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
                          text: `${result?.knowledge}/10`,
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
          </div>
          <div data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000" className="text-left p-3 rounded-xl shadow-lg m-auto font-bold w-1/2">
            <h1>Feedback:</h1>
            <h2 className="p-3">{result?.summary}</h2>
            <h1>Hiring Status:</h1>
            <h2 className="p-3">{result?.hire_status === "rejected" ? "Rejected" : "Hired"}</h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="w-full p-3 flex"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col space-y-9">
                <div className="flex justify-between">
                  <h2 className="font-bold text-lg">Question & their modal answers</h2>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                    />
                  </svg>
                </div>
                {
                  modelAnswers?.length > 0 && modelAnswers?.map((ele, index) => (
                    <div key={index + Date()} className="flex text-left">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                    {index+1}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold">
                      {ele?.Question}?
                    </h2>
                    <h3 className="text-lg p-3">{ele?.Answer}</h3>
                  </div>
                    </div>
                  ))
                }

                {/* <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                    6
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium">
                      What are your salary expectations?
                    </h2>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-4">
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {modelAnswers == null && (
        <Button isDisabled={isLoading} onClick={generateReport}>
          Generate Report
        </Button>
      )}
      </div>
      <Button className="m-5" onClick={handleChange}>Close this Session</Button>
    </>
  );
};
