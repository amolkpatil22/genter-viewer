import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import axios from "axios";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { questionsFetch } from "../LandingPage/action";

import { VideoRecorder } from "../../Components/VideoRecorder";

import Navbar from "../../HomeComponents/Navbar";
import AIBot from "../../Components/AIBot";

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
      } else {
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
      {/* <Navbar /> */}
      <div className="bg-gray-700 h-screen py-10">
        {/* GIF Image */}
        <div className="flex justify-around mx-9">
          <AIBot />
          {text && (
            <div className="border p-3 w-1/3 m-auto text-xl rounded-lg text-white">
              {text ==
              "Thank you for your response. Let's proceed to the next question."
                ? text
                : text ==
                  "Your interview has concluded. Please click the END button to conclude the session."
                ? `🎉${text}🎉`
                : `Q. ${text}`}
            </div>
          )}
          {/* Video Recorder */}

          <div className="w-1/2 text-center">
            <VideoRecorder />
          </div>
        </div>
        {/* <ReactMediaRecorder
                video
                render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                        <p>{status}</p>
                        <button onClick={startRecording}>Start Recording</button>
                        <button onClick={stopRecording}>Stop Recording</button>
                        <video src={mediaBlobUrl} controls autoPlay loop />
                    </div>
                )}
            /> */}

        {/* EndButton */}

        {count == null && (
          <button
            className="border m-auto rounded-lg p-2 hover:scale-110 transition text-xl font-bold text-green-500 flex gap-4 items-center"
            onClick={(e) => {
              setTimeout(() => {
                settext(questions[0].question);
                setcount(1);
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
            <svg
              width="30"
              height="30"
              viewBox="0 0 26 26"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M16 5c-.551 0-1 .449-1 1v4.875L7.906 5.25a1.339 1.339 0 0 0-1.281.063C6.239 5.545 6 5.963 6 6.405v13.188c0 .443.239.86.625 1.093c.208.127.449.188.688.188c.2 0 .408-.033.593-.125L15 15.125V20c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1h-3z"
              />
            </svg>
            End This Interview
          </button>
        )}
      </div>
    </>
  );
};
