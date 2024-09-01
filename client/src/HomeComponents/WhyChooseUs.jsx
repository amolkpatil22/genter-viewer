import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="m-5 border flex flex-col md:flex-row py-12 items-center px-3">
      <div data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000" className="md:w-1/2 w-full p-3 flex flex-col gap-5 text-left">
        <h1 className="text-6xl font-bold">Why choose us?</h1>
        <p>
          Out platform has helped reduce hiring time by up to 40%, increased
          interview accuracy by 30%, and bought a 20% improvement in employee
          retention rates.
        </p>
        <button className="border p-3 rounded-lg w-1/4">Learn more</button>
      </div>
      <div data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000" className="grid md:w-1/2 w-full sm:grid-cols-2 grid-cols-1 border rounded-md place-content-center gap-4 p-2 text-left">
        <div data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000" className="border p-5 rounded-lg bg-green-500 flex flex-col gap-5">
          <svg
            className="border rounded-full p-2 bg-white"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke="#23C55E"
              stroke-dasharray="28"
              stroke-dashoffset="28"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="28;0"
                />
              </path>
              <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.5s"
                  dur="0.4s"
                  values="28;0"
                />
              </path>
            </g>
          </svg>
          <div>
            <h1 className="text-3xl font-bold text-white">100k</h1>
            <h1 className="text-xl font-bold text-white">Uses active</h1>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000" className="border rounded-lg">
          <div className="border p-5 rounded-lg bg-gray-400 hover:bg-green-500 flex flex-col gap-5">
            <svg
              className="border rounded-full p-2 bg-white"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fill="#23C55E"
                d="M11 17H7q-2.075 0-3.538-1.463T2 12q0-2.075 1.463-3.538T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17h-4Z"
              />
            </svg>
            <div>
              <h1 className="text-3xl font-bold text-white">Upto 40%</h1>
              <h1 className="text-xl font-bold text-white">
                Reduce Hiring time
              </h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000" className="border rounded-lg">
          <div className="border p-5 rounded-lg bg-gray-400 hover:bg-green-500 transition-colors flex flex-col gap-5">
            <svg
              className="border rounded-full p-2 bg-white"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#23C55E"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path fill="#23C55E" d="M3 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" />
                <path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z" />
                <path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9" />
              </g>
            </svg>
            <div>
              <h1 className="text-3xl font-bold text-white">30%</h1>
              <h1 className="text-xl font-bold text-white">
                Interview Accuracy
              </h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000" className="border rounded-lg ">
          <div className="border p-5 bg-gray-400 hover:bg-green-500 transition-colors rounded-lg flex flex-col gap-5">
            <svg
              className="border rounded-full p-2 bg-white"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fill="#23C55E"
                d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78Z"
              />
            </svg>
            <div>
              <h1 className="text-3xl font-bold text-white">20%</h1>
              <h1 className="text-xl font-bold text-white">Employee rates</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
