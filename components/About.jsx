import React from "react";
import Image from "next/image";
import aboutBg from "@/public/aboutBg.svg";
import aboutBgL from "@/public/aboutBgL.png";
import aboutBgR from "@/public/aboutBgR.png";
import downloadIcon from "@/public/downloadBlue.svg";
import aboutImg from "@/public/Rectangle 15.png";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import img6 from "@/public/img6.png";
import img7 from "@/public/img7.png";
import img8 from "@/public/img8.png";
import { SERVER_IP } from "@/Config/SERVER_IP";
import '@/app/media.css'


const About = ({ aboutData, productsData }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [
    `  ${SERVER_IP}${aboutData?.attributes?.aboutImg1?.data?.attributes?.url} `,
    `  ${SERVER_IP}${aboutData?.attributes?.aboutImg2?.data?.attributes?.url} `,
    `  ${SERVER_IP}${aboutData?.attributes?.aboutImg3?.data?.attributes?.url} `,
  ];
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  React.useEffect(() => {
    const interval = setInterval(changeImage, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="about" className="mt-[50px] relative bg-[#69A4DA]">
      {/* <div className="relative">
        <img className="" src={aboutBg} alt="About page bg" />
        <img
          className="absolute left-0 bottom-0"
          src={aboutBgL}
          alt="About page bg"
        />
        <img
          className="absolute right-0 bottom-0"
          src={aboutBgR}
          alt="About page bg"
        />
      </div> */}

      {/* <img
        className="bg-[red] absolute top-0 left-0 w-screen h-[20vh]"
        src={aboutBg}
        alt="About page bg"
      /> */}

      <div className="h-fit pb-[100px]">
        <div className="pt-[100px] flex flex-col items-center">
          <div className="flex gap-[0.75rem] items-center">
            <div className="hidden md:block w-[10rem] h-0 border-[1px] border-white" />
            <h1 className="text-white text-3xl">
              {aboutData?.attributes?.Title}
            </h1>
            <div className="hidden md:block w-[10rem] h-0 border-[1px] border-white" />
          </div>
          <p className="mt-[1.25rem] w-[85%] vsm:w-[90%] lg:w-[677px] text-justify text-white text-xs font-normal">
            {aboutData?.attributes?.Description}
          </p>
        </div>

        <img
          className="lg:mx-auto mb-[2rem] media-machine-bg lg:mt-[6.31rem] lg:mb-[10.38rem]"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
        />

        <div className="about-list lg:absolute top-[30%] w-full lg:w-fit flex flex-col items-center gap-[3rem] lg:gap-[6rem]">
          <div className="w-full lg:w-fit flex justify-around lg:justify-normal  items-center lg:gap-[11.25rem]">
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo1?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text1}</p>
            </div>
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo2?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text2}</p>
            </div>
          </div>

          <div className="w-full lg:w-fit flex justify-around lg:justify-normal  items-center lg:gap-[34.63rem]">
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo3?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text3}</p>
            </div>
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo4?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text4}</p>
            </div>
          </div>

          <div className="w-full lg:w-fit flex justify-around lg:justify-normal  items-center lg:gap-[35.25rem]">
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo5?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text5}</p>
            </div>
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo6?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text6}</p>
            </div>
          </div>

          <div className="w-full lg:w-fit flex justify-around lg:justify-normal  items-center lg:gap-[10.75rem]">
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo7?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text7}</p>
            </div>
            <div className="list-item">
              <img
                src={`${SERVER_IP}${aboutData?.attributes?.logo8?.data?.attributes?.url}`}
                alt="list_item"
              />
              <p>{aboutData?.attributes?.text8}</p>
            </div>
          </div>
        </div>

        <div className="mt-[50px] lg:mt-auto w-full flex justify-center gap-[1.44rem] items-center">
          <button className="w-[123px] h-10 rounded-[10px] border border-white bg-white flex justify-center items-center gap-[1rem] text-sky-700 text-[15px]">
            <Image src={downloadIcon} alt="download Icon" /> Brochure
          </button>
          <button className="w-[123px] h-10 rounded-[10px] border border-white flex justify-center items-center text-white text-[15px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div className="about-list absolute left-[40%] top-[35%]">
          <div className="list-item">
            <img src={img1} alt="list_item" />
            <p>Faster healing of injuries and wounds</p>
          </div>
          <div className="list-item">
            <img src={img2} alt="list_item" />
            <p>Increase circulation</p>
          </div>
          <div className="list-item">
            <img src={img3} alt="list_item" />
            <p>Stem cell increase</p>
          </div>
          <div className="list-item">
            <img src={img4} alt="list_item" />
            <p>Boost energy and physical performance</p>
          </div>
          <div className="list-item">
            <img src={img5} alt="list_item" />
            <p>Strengthen Immune System</p>
          </div>
          <div className="list-item">
            <img src={img6} alt="list_item" />
            <p>Strengthen lungs</p>
          </div>
          <div className="list-item">
            <img src={img7} alt="list_item" />
            <p>Increase Mental Clarity and alertness</p>
          </div>
          <div className="list-item">
            <img src={img8} alt="list_item" />
            <p>Anti-Aging</p>
          </div>
        </div> */
}
