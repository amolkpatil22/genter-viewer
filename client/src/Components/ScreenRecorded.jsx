import React, { useState, useEffect, useRef } from 'react';

const RecordingComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
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
        console.error('Error accessing user media:', error);
      });

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
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
    if (mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const downloadRecording = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'recorded-video.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Video Recorder</h1>
      <div>
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          ""
        )}
        <button onClick={downloadRecording} disabled={!recordedChunks.length}>Download Recording</button>
      </div>
      <div>
        <h2>Live Video Capture</h2>
        <video ref={videoRef} style={{ width: '300px', height: 'auto' }} />
      </div>
    </div>
  );
};

export default RecordingComponent;
