import React from "react";
import modelImg from "@/public/modelImg.png";
import aperture from "@/public/aperture.png";
import tv from "@/public/tv.png";
import phone from "@/public/vector-(1).png";
import play from "@/public/play.png";
import downloadIcon from "@/public/di.png";
import circle from "@/public/check-circle.png";
import lock from "@/public/lock.png";
import vector from "@/public/vector.png";
import "@/app/globals.css";
import "./media.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const Models = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
          <Navbar open={open} setOpen={setOpen} />
      <div className="mt-[1.3rem] backGround padding-110 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl flex flex-row w-full items-center justify-center">
          <div className="ml-2  hidden md:block w-[10rem] h-0 border-[1px]  mr-5" />
          IN HOUSE MANUFACTURING
          <div className="ml-2 mr-5 hidden md:block w-[10rem] h-0 border-[1px] " />
        </h2>
        <p className="text-white w-2/3 flex items-center justify-center">
          It is an advance hyperbaric oxygen therapy (HBOT) system compliant to
          international standards and regulations for operations and safety.
          HBOT improves brain, lungs, heart and many other organs functioning in
          a human body, by increasing oxygen concentration during therapy time.
          Oxycea is an intuitive and easy to operate machine due to its
          intelligent control system.
        </p>
      </div>
      <div className="padding-55px flex items-center justify-center flex-col">
        <h5 className="mb-5 font-bold">MONOPLACE CHAMBER</h5>
        <p className=" w-2/3 flex items-center justify-center">
          It is an advance hyperbaric oxygen therapy (HBOT) system compliant to
          international standards and regulations for operations and safety.
          HBOT improves brain, lungs, heart and many other organs functioning in
          a human body, by increasing oxygen concentration during therapy time.
          Oxycea is an intuitive and easy to operate machine due to its
          intelligent control system.
        </p>
        <Image src={modelImg} alt="" />
        <div className="p-12">
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-white p-4   text-center relative">
              <div className=" mx-auto w-10 h-10 rounded-full flex items-center justify-center text-white text-xl mb-4">
                <Image src={aperture} alt="" />
              </div>
              <h2 className="text-xs font-bold">PENETRATORS</h2>
              <p className="text-gray-700 text-xs mt-6 column-divider">
                It is an advance hyper-baric oxygen therapy (HBOT) system
                comp-liant to international standards and regul-ations for
                operations and safety.
              </p>
            </div>

            <div className="bg-white p-4   text-center relative ">
              <div className=" mx-auto w-10 h-10 rounded-full flex items-center justify-center text-white text-xl mb-4">
                <Image src={tv} alt="" />
              </div>
              <h2 className="text-xs font-bold">ENTERTAINMENT</h2>
              <p className="text-gray-700 text-xs mt-6 column-divider">
                It is an advance hyper-baric oxygen therapy (HBOT) system
                comp-liant to international standards and regul-ations for
                operations and safety.
              </p>
            </div>

            <div className="bg-white p-4   text-center relative ">
              <div className=" mx-auto w-10 h-10 rounded-full flex items-center justify-center text-white text-xl mb-4">
                <Image src={vector} alt="" />
              </div>
              <h2 className="text-xs font-bold">CONTROL PANEL</h2>
              <p className="text-gray-700 text-xs mt-6 column-divider">
                It is an advance hyper-baric oxygen therapy (HBOT) system
                comp-liant to international standards and regul-ations for
                operations and safety.
              </p>
            </div>

            <div className="bg-white p-4   text-center relative ">
              <div className=" mx-auto w-10 h-10 rounded-full flex items-center justify-center text-white text-xl mb-4">
                <Image src={lock} alt="" />
              </div>
              <h2 className="text-xs font-bold">COMMUNICATION</h2>
              <p className="text-gray-700 text-xs mt-6 column-divider">
                It is an advance hyper-baric oxygen therapy (HBOT) system
                comp-liant to international standards and regul-ations for
                operations and safety.
              </p>
            </div>

            <div className="bg-white p-4   text-center relative">
              <div className=" mx-auto w-10 h-10 rounded-full flex items-center justify-center text-white text-xl mb-4">
                <Image src={circle} alt="" />
              </div>
              <h2 className="text-xs font-bold">SAFETY LOCK</h2>
              <p className="text-gray-700 text-xs mt-6 column-divider">
                It is an advance hyper-baric oxygen therapy (HBOT) system
                comp-liant to international standards and regul-ations for
                operations and safety.
              </p>
            </div>

            <div className="bg-white p-4   text-center relative">
              <div className=" mx-auto w-10 h-10 rounded-full flex items-center justify-center text-white text-xl mb-4">
                <Image src={phone} alt="" />
              </div>
              <h2 className="text-xs font-bold">PATIENT STRETCHER</h2>
              <p className="text-gray-700 text-xs mt-6">
                It is an advance hyper-baric oxygen therapy (HBOT) system
                comp-liant to international standards and regul-ations for
                operations and safety.
              </p>
            </div>
          </div>
          <div className="container mx-auto mt-8 flex justify-center items-center">
          <div className="flex space-x-5">
            <button className="backGround px-4 py-2 flex items-center justify-center text-white rounded-md">
              <Image src={downloadIcon} className="text-white  mr-2" alt="download image"/>
              Brochure
            </button>

            <button className="px-4 py-2 border-color flex items-center justify-center text-color rounded-md">
            <Image src={play} className="text-white mr-2" alt="download image"/>
              Watch 3D View
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Models;
