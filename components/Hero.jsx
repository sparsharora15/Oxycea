import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import heroBg1 from "@/public/heroBg1.png";
import heroBg2 from "@/public/heroBg2.png";
import { SERVER_IP } from "@/Config/SERVER_IP";
import '@/app/media.css'
const Hero = ({ open, setOpen, heroData }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [
    `${SERVER_IP}${heroData?.attributes?.heroRightImage1?.data?.attributes?.url}`,
    `${SERVER_IP}${heroData?.attributes?.heroRightImage1?.data?.attributes?.url}`,
    `${SERVER_IP}${heroData?.attributes?.heroRightImage1?.data?.attributes?.url}`,
  ];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as per your requirement (e.g., 3000ms for 3 seconds).

    return () => {
      clearInterval(interval);
    };
  }, [images]);
  return (
    <div id="hero" className="relative">
      {/* Backgroud images */}
      <Image
        className="absolute top-[-190px] media-bg  lg:top-0  lg:right-0 z-[-1]"
        src={heroBg1}
        alt="hero bg"
      />
      <Image
        className="hidden md:block absolute top-[25.06rem] left-0  z-[-1]"
        src={heroBg2}
        alt="hero bg2"
      />

      <Navbar open={open} setOpen={setOpen} />
      <div className="mt-[3.56rem] vsm:mt-[3rem] 2xl:mt-[5.81rem] flex flex-col lg:flex-row items-center justify-center 2xl:gap-[30px]">
        <div className="px-[2rem] md:px-0 lg:mr-[-270px] 2xl:mr-[-300px] lg:ml-[60px] z-[2] ">
          <h1 className="text-black text-3xl text-center md:text-start font-normal">
            {heroData?.attributes?.heroHeading1}
          </h1>
          <h2 className="mb-[0.37rem] text-blue-500 text-[31px] vsm:text-[45px] text-center md:text-start md:text-[50px] font-normal">
            {heroData?.attributes?.heroHeading2}
          </h2>
          <p className="w-fit md:w-[464px] text-black text-[15px] font-normal text-justify">
            {heroData?.attributes?.discription}
          </p>
          <button className="mt-[1.87rem] w-[123px] h-10 rounded-[10px] border border-cyan-600 text-sky-700 text-[15px] font-normal">
            Read More
          </button>
        </div>

        <div className=" 2xl:mr-[-160px]">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;