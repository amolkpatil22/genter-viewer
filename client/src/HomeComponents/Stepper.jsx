import React from "react";

const Stepper = () => {
  return (
    <div data-aos="fade-right"
    data-aos-delay="300"
    data-aos-duration="1000" className="sm:w-1/2 w-full p-3 flex">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col space-y-9">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Question List</h2>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
    <path fill="currentColor" d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
</svg>
            </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              1
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">Tell us about yourself?</h2>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              2
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">Why do you think you are eligible for this company?</h2>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              3
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">What is your career goal?</h2>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              4
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">What is your greatest personal/professional achievement so far?</h2>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              5
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">Why should we hire you? / Why do you think you are eligible for this job?</h2>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              6
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium">What are your salary expectations?</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
