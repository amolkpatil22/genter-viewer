import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { VideoRecorder } from "../../Components/VideoRecorder";



const reactQuestions = [
  "Explain the concept of Virtual DOM in React and how it helps in improving performance.",
  "What is JSX in React? How is it different from HTML?",
  // "Describe the lifecycle methods of a React component.",
  // "What are React Hooks? Provide examples of a few built-in hooks.",
];

export const InterviewPage = () => {
  let navigate = useNavigate();
  let [answers, setanswers] = useState([]);
  const [text, settext] = useState(null);
  const [isSpeechEnded, setisSpeechEnded] = useState(null);
  const [utterance, setUtterance] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [count, setcount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { sessionID, questions } = useSelector((store) => {
    return {
      questions: store.landingReducer.questions,
      sessionID: store.landingReducer.sessionID,
    };
  }, shallowEqual);
  let timeout1;
  let timeout2;
  let {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening();
  }, []);

  useEffect(() => {
    if (isListening == false) {
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(text);

      const voices = synth.getVoices();
      const selectedVoice = voices.find((v) => v.name === "Google हिन्दी");

      if (selectedVoice) {
        u.voice = selectedVoice;
      }

      u.pitch = 1;
      u.rate = 1;
      u.volume = 1;

      u.onend = () => {
        if (
          text !==
          "Your interview has concluded. Please click the END button to conclude the session."
        ) {
          setisSpeechEnded(true);
        }
      };

      if (text !== null) {
        synth.speak(u);
      }

      return () => {
        synth.cancel();
      };
    }
  }, [text]);

  useEffect(() => {
    if (isSpeechEnded) {
      setisSpeechEnded(false);
      setIsListening(true);
      if (
        text ==
        "Thank you for your response. Let's proceed to the next question."
      ) {
        setIsListening(false);
        timeout2 = setTimeout(() => {
          if (count < questions.length) {
            setcount((prev) => {
              let newcount = prev + 1;
              return newcount;
            });
            settext(questions[count].question);
            resetTranscript();
          } else {
            settext(
              "Your interview has concluded. Please click the END button to conclude the session."
            );
          }
        }, 2000);
      }
      else if (text == "I hope you're feeling well. We have five questions lined up for you, and you'll have a maximum of three minutes to answer each. Let's dive into the interview.") {
        setIsListening(false);
        settext(questions[count].question);
        resetTranscript();
      }

      else {
        SpeechRecognition.startListening({ continuous: true });
        timeout1 = setTimeout(() => {
          SpeechRecognition.stopListening();
          setIsListening(false);
          timeout2 = setTimeout(() => {
            settext(
              "Thank you for your response. Let's proceed to the next question."
            );
            resetTranscript();
          }, 2000);
        }, 5000);
      }
    }
  }, [isSpeechEnded]);

  useEffect(() => {
    if (isListening == false && count !== null) {
      if (transcript == "") {
        setanswers([...answers, "Don't know the answer"]);
      } else {
        setanswers([...answers, transcript]);
      }
    }
  }, [isListening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleChange = () => {
    setIsLoading(true);
    axios
      .patch("https://genterviewer-backend.up.railway.app/", {
        sessionID,
        responses: answers,
      })
      .then((res) => {
        setIsLoading(false);
        navigate("/feedback");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex flex-col py-10 border gap-0 h-screen bg-gray-700">
        <div className=" h-screen  flex gap-32 align-middle justify-center  " >
          <div className="flex  mx-9  flex-col align-middle justify-center w-fit h-fit mt-10 text-center  " style={{ justifyContent: "center", gap: "50px", }}>
            <div className="flex flex-col gap-9 justify-center align-middle  text-center mr-auto" style={{ width: "400px" }}>
              <img src="https://www.linustock.com/images/uploads/2018/01/1515565917-1.png" style={{ width: "300px", margin: "auto" }}></img>
              {text && (
                <div className=" p-3  m-auto text-xl rounded-lg text-white ">
                  {text ==
                    "Thank you for your response. Let's proceed to the next question."
                    ? text
                    : text == "I hope you're feeling well. We have five questions lined up for you, and you'll have a maximum of three minutes to answer each. Let's dive into the interview."
                      ? text
                      : text ==
                        "Your interview has concluded. Please click the END button to conclude the session."
                        ? `🎉${text}🎉`
                        : `Q. ${text}`}
                </div>

              )}

            </div>
            <div style={{
              color: "white",
              fontSize: "30px",
              opacity: isListening ? 1 : 0,
              transition: "opacity 1s ease-in-out" // Adjust the transition duration and easing as needed
            }}>
              Listening...
            </div>
          </div>
          <VideoRecorder />
        </div>
        <div className=" text-center   ">

          {count == null && (
            <button
              className="border m-auto rounded-lg p-2 hover:scale-110 transition text-xl font-bold text-green-500 flex gap-4 items-center"
              onClick={(e) => {
                setTimeout(() => {
                  settext("I hope you're feeling well. We have five questions lined up for you, and you'll have a maximum of three minutes to answer each. Let's dive into the interview.");
                  setcount(0);
                }, 1000);
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#23C55E"
                  fill-rule="evenodd"
                  d="m4.25 3l1.166-.624l8 5.333v1.248l-8 5.334l-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              Start Interview
            </button>
          )}

          {count !== null && (
            <button
              disabled={isLoading}
              onClick={handleChange}
              className="m-auto border rounded-lg p-2 hover:scale-110 transition text-xl font-bold text-red-500 flex gap-4 items-center"
            >
              ⭕ End This Interview
            </button>
          )}

        </div>
      </div>
    </>
  );
};
