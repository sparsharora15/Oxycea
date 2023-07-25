import React from "react";

const Certifications = ({certificationData}) => {

  return (
    <div
      id="certification"
      className="min-h-screen mt-[300px]  lg:mt-[-350px] flex flex-col lg:flex-row justify-center gap-[5.13rem] items-center"
    >
      <div>
        <div className="flex items-center gap-[0.75rem]">
          <div className="text-center text-sky-700 text-3xl font-normal">
            {certificationData?.attributes?.title}
          </div>
          <div className="w-[6rem] h-0 border border-sky-700" />
        </div>
        <p className="mt-[0.69px] mb-[3.88rem] w-80 h-28 text-justify text-zinc-700 text-xs font-normal">
          {certificationData?.attributes?.description}
        </p>
        <button className="w-[123px] h-10 rounded-[10px] border border-sky-700 grid place-items-center text-sky-700 text-[15px]">
          Learn More
        </button>
      </div>

      <div className="w-full vsm:w-fit h-fit grid grid-cols-1 vsm:grid-cols-2 gap-x-[1.63rem] gap-y-[1.44rem] place-items-center lg:place-items-start">
        <div className="w-[70%] vsm:w-[186px] h-44 bg-zinc-300 rounded-[28px]" />
        <div className="w-[70%] vsm:w-[186px] h-44 bg-zinc-300 rounded-[28px]" />
        <div className="w-[70%] vsm:w-[186px] h-44 bg-zinc-300 rounded-[28px]" />
        <div className="w-[70%] vsm:w-[186px] h-44 bg-zinc-300 rounded-[28px]" />
      </div>
    </div>
  );
};

export default Certifications;
