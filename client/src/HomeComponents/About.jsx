import React from "react";
import chart from "./Images/chart.png";
import feedback from "./Images/feedback.png";

const About = () => {
  return (
    <div data-aos="fade-left"
    data-aos-delay="300"
    data-aos-duration="1000" className="sm:w-1/2 w-full my-3 gap-4 flex flex-col">
      <div className="flex rounded-xl shadow-md justify-around items-center px-3">
        <div className="flex flex-col w-1/2 p-4 py-6 justify-between gap-7">
          <h1 className="font-bold text-xl">Behavioral Analysis</h1>
          <h5>
            Leverage NLP and video analysis to gain insight into candidates'
            communication skills, body langugage, and cultural fit, helping you
            make holistic hiring decisions.
          </h5>
          <button className="border bg-white rounded-xl p-2 text-black">
            Learn More
          </button>
        </div>
        <img src={chart} alt="chart" width={"40%"} />
      </div>
      <div className="flex rounded-xl shadow-md justify-around items-center">
        <div className="flex flex-col w-1/2 p-4 py-6 justify-between gap-7">
          <h1 className="font-bold text-xl">Real-Time Feedback</h1>
          <h5>
            Get instant AI-generated feedback during live interviews, assisting
            interviews in asking follow-up questions and addressing potential
            concerns.
          </h5>
          <button className="border bg-white rounded-xl p-2 text-black">
            Learn More
          </button>
        </div>
        <img src={feedback} alt="feedback" width={"40%"} />
      </div>
    </div>
  );
};

export default About;
