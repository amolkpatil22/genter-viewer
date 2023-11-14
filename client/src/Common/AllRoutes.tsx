import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"
import { InterviewPage } from "../Pages/InterviewPage/InterviewPage"
import { FeedbackPage } from "../Pages/FeedbackPage/FeedbackPage"


export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<InterviewPage />}></Route>
            <Route path="/feedback" element={<FeedbackPage />}></Route>
        </Routes>
    )
}