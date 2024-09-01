import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row  justify-between gap-8 p-12 my-4">
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="text-5xl font-bold sm:w-2/4 w-full"
        >
          All-in-one AI interview platform
        </div>
        <div data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000" className="sm:w-2/4 w-full flex flex-col gap-10">
          <h1>
            Our platform combines advanced artificial intelligence technologies
            with intuitive features to streamline your talent selection process,
            saving your time, effort and resources.
          </h1>
          <div className="flex gap-5">
            <button className="border bg-green-500 rounded-xl p-2 text-white">
              Start interview
            </button>
            <button className="border bg-white rounded-xl p-2 text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
