import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../Pages/LandingPage/LandingPage"
import { FeedbackPage } from "../Pages/FeedbackPage/FeedbackPage"
import { InterviewPage } from "../Pages/InterviewPage/InterviewPage"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/main" element={<InterviewPage />}></Route>
            <Route path="/feedback" element={<FeedbackPage />}></Route>
        </Routes>
    )
}