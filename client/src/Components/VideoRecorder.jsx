import React, { useEffect, useRef, useState } from "react";

export const VideoRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        mediaRecorderRef.current = recorder;

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
          }
        };

        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setRecordedChunks([]);
        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing user media:", error);
      });

    return () => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  //   const startRecording = () => {
  //     setRecordedChunks([]);
  //     mediaRecorderRef.current.start();
  //     setIsRecording(true);
  //   };

  const stopRecording = () => {
    if (mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const downloadRecording = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "recorded-video.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className="mt-10">
      {/* <h1 className="text-2xl">Video Recorder</h1> */}
      <div>
        {/* <h2>Live Video Capture</h2> */}
        <video ref={videoRef} style={{ width: "100%", height: "50vh" }} />
      </div>
      <div className="flex flex-row-reverse">
        {isRecording ? (
          <button
            className="m-5 border rounded-lg p-2 hover:scale-110 transition flex gap-3 items-center text-white font-bold"
            onClick={stopRecording}
          >
            Stop Recording
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#e11e1e"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10ZM9.5 8h5A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5v-5A1.5 1.5 0 0 1 9.5 8Z"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
        <button
          className="m-5 border rounded-lg p-2 hover:scale-110 transition flex gap-3 items-center text-white font-bold"
          onClick={downloadRecording}
          disabled={!recordedChunks.length}
        >
          Download Recording
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fill="#23C55E"
              d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7l7-7z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
