import { Navigate, useNavigate } from "react-router-dom";
import { ReactMediaRecorder } from "react-media-recorder";

export const InterviewPage = () => {
    const Navigate = useNavigate()

    const handleChange = () => {
        Navigate("/feedback")
    }

    return (
        <div>
            {/* GIF Image */}
            <img></img>

            {/* ChatData */}
            <div>
                Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
                Rerum similique asperiores natus maiores!
                Non numquam, nostrum sit vel error quos
                suscipit fugiat tenetur dolor autem officia quidem ipsam ab ipsa.
            </div>
            <div>
                {/* Video Recorder */}
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
  </div>
            {/* EndButton */}
            <button onClick={handleChange}>End This Interview</button>
        </div>
    )
}