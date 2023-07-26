import Image from "next/image";
import boxShadow from "@/public/boxShadow.png";
import modelBg from "@/public/modelsBg.png";
import downloadIcon from "@/public/download.svg";
import { SERVER_IP } from "@/Config/SERVER_IP";
const Model = ({ reverse, modelsChamberData }) => {
  return (
    <>
      <div
        className={`${
          reverse ? "justify-center" : ""
        } w-[90%] mx-auto vsm:w-auto mt-[12.25rem] relative flex flex-col lg:flex-row items-center bg-stone-50 bg-opacity-50 rounded-[26px] shadow lg:shadow-none border lg:border-none border-zinc-300 border-opacity-10 backdrop-blur-[50px] lg:backdrop-blur-0`}
      >
        <div className={`${reverse ? "order-2" : "-[-50px]"}`}>
          <div className="ml-[200px] flex gap-[1rem] items-center">
            <div className="w-[46px] h-[46px] rounded-full border border-zinc-300 grid place-items-center">
              <div className="w-[34.07px] h-[34.07px] rounded-full bg-zinc-100" />
            </div>
            <div className="w-[46px] h-[46px] rounded-full hover:border border-zinc-300 grid place-items-center">
              <div className="w-[34.07px] h-[34.07px] rounded-full bg-sky-700" />
            </div>
          </div>

          <img
            src={`  ${SERVER_IP}${modelsChamberData?.attributes?.modelCHamberImg1?.data?.attributes?.url} `}
            alt="model"
          />
        </div>

        <div
          className={`${
            reverse ? "lg:mr-[-100px]" : "lg:ml-[-130px]"
          } flex flex-col gap-[1.38rem] items-center`}
        >
          <div className="w-[90%] vsm:w-[470px] h-[471px] py-[2.06rem] px-[2.44rem] lg:bg-stone-50 bg-opacity-50 rounded-[26px] lg:shadow lg:border lg:border-zinc-300 border-opacity-10 lg:backdrop-blur-[50px]">
            <h1 className="text-zinc-700 text-xl font-semibold text-center">
              {modelsChamberData?.attributes?.chamberTitle}
            </h1>
            <p className="w-full h-8 text-center text-zinc-700 text-xs font-normal">
              {modelsChamberData?.attributes?.chamberDescription}
            </p>
            <ul className="mt-[3.87rem] grid grid-cols-3 grid-rows-2 gap-x-[3rem] gap-y-[2.5rem]">
              <li>
                <img
                  src={`${SERVER_IP}${modelsChamberData?.attributes?.logo1?.data?.attributes?.url}`}
                  alt="shadow"
                />
                <p>{modelsChamberData?.attributes?.text1}</p>
              </li>
              <li>
                <img
                  src={`${SERVER_IP}${modelsChamberData?.attributes?.logo2?.data?.attributes?.url}`}
                  alt="shadow"
                />
                <p>{modelsChamberData?.attributes?.text2}</p>
              </li>
              <li>
                <img
                  src={`${SERVER_IP}${modelsChamberData?.attributes?.logo3?.data?.attributes?.url}`}
                  alt="shadow"
                />
                <p>{modelsChamberData?.attributes?.text3}</p>
              </li>
              <li>
                <img
                  src={`${SERVER_IP}${modelsChamberData?.attributes?.logo4?.data?.attributes?.url}`}
                  alt="shadow"
                />
                <p>{modelsChamberData?.attributes?.text4}</p>
              </li>
              <li>
                <img
                  src={`${SERVER_IP}${modelsChamberData?.attributes?.logo5?.data?.attributes?.url}`}
                  alt="shadow"
                />
                <p>{modelsChamberData?.attributes?.text5}</p>
              </li>
              <li>
                <img
                  src={`${SERVER_IP}${modelsChamberData?.attributes?.logo6?.data?.attributes?.url}`}
                  alt="shadow"
                />
                <p>{modelsChamberData?.attributes?.text6}</p>
              </li>
            </ul>
          </div>
          <Image src={boxShadow} alt="shadow" />
        </div>

        <Image
          className={`${
            reverse ? "left-0" : "right-0"
          } absolute w-[7.5rem] h-[8.5rem] md:w-auto md:h-auto top-[-50px] vsm:top-[-130px] z-[-2]`}
          src={modelBg}
          alt="model"
        />
      </div>

      <div className="mt-[3.12rem] w-full flex justify-center gap-[1.44rem] items-center">
        <button className="w-[123px] h-10 rounded-[10px] text-white flex justify-center items-center gap-[1rem] bg-sky-700 text-[15px]">
          <Image src={downloadIcon} alt="download Icon" /> Brochure
        </button>
        <button className="w-[123px] h-10 rounded-[10px] border border-sky-700 flex justify-center items-center text-sky-700 text-[15px]">
          Learn More
        </button>
      </div>
    </>
  );
};

export default Model;
