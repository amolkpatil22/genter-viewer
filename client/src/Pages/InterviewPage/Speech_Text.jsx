import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true })
        setTimeout(() => {
            SpeechRecognition.stopListening()
        }, 180000);
    }, [])

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>

            <p>{transcript}</p>
        </div>
    );
};
export default Dictaphone;