import { Navigate, useNavigate } from "react-router-dom"



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

            {/* EndButton */}
            <button onClick={handleChange}>End This Interview</button>
        </div>
    )
}