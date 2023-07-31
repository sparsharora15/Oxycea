// import React from "react";
// import Navbar from "./Navbar";
// import Image from "next/image";
// import heroBg1 from "@/public/heroBg1.png";
// import heroBg2 from "@/public/heroBg2.png";
// import Link from "next/link";
// import { SERVER_IP } from "@/Config/SERVER_IP";
// import "@/app/media.css";
// const Hero = ({ open, setOpen, heroData, productsData }) => {
//   // console.log()
//   const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex + 1) % productsData?.attributes.Gallery.data.length
//       );
//     }, 3000); // Change the interval time as per your requirement (e.g., 3000ms for 3 seconds).

//     return () => {
//       clearInterval(interval);
//     };
//   }, [productsData?.attributes?.Gallery?.data]);
//   return (
//     <div id="hero" className="relative">
//       {/* Backgroud images */}
//       <Image
//         className="absolute top-[-190px] media-bg  lg:top-0  lg:right-0 z-[-1]"
//         src={heroBg1}
//         alt="hero bg"
//       />
//       <Image
//         className="hidden md:block absolute top-[25.06rem] left-0  z-[-1]"
//         src={heroBg2}
//         alt="hero bg2"
//       />

//       <Navbar open={open} setOpen={setOpen} />
//       <div className="flex flex-col lg:flex-row items-center justify-center 2xl:gap-[30px]">
//         <div className="px-[2rem] md:px-0  lg:ml-[60px] z-[2] ">
//           <h1 className="text-black text-3xl text-center md:text-start font-normal">
//             {heroData?.attributes?.heroHeading1}
//           </h1>
//           <h2 className="mb-[0.37rem] text-blue-500 text-[31px] vsm:text-[45px] text-center md:text-start md:text-[50px] font-normal">
//             {heroData?.attributes?.heroHeading2}
//           </h2>
//           <p className="w-fit md:w-[464px] text-black text-[15px] font-normal text-justify">
//             {heroData?.attributes?.discription}
//           </p>
//           <Link href={`/ViewProduct/${productsData?.id}`}>
//             <button className="mt-[1.87rem] w-[123px] h-10 rounded-[10px] border border-cyan-600 text-sky-700 text-[15px] font-normal">
//               Read More
//             </button>
//           </Link>
//         </div>

//         <div className=" 2xl:mr-[-160px]">
//           <img
//             src={`${SERVER_IP}${productsData?.attributes.Gallery.data[0]?.attributes?.url}`}
//             alt={`Image ${currentImageIndex}`}
//           />
//           {/* <img
//             src={`${SERVER_IP}${productsData?.attributes.Gallery.data[currentImageIndex]?.attributes?.url}`}
//             // productsData?.attributes.Gallery.data[0]?.attributes?.url
//             alt={`Image ${currentImageIndex}`}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import Navbar from "./Navbar";
import Image from "next/image";
import heroBg1 from "@/public/heroBg1.png";
import heroBg2 from "@/public/heroBg2.png";
import heroImg from "@/public/heroImg.png";
import Link from "next/link";
const Hero = ({ open, setOpen, heroData, productsData }) => {
  // console.log()
  // const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex(
  //       (prevIndex) =>
  //         (prevIndex + 1) % productsData?.attributes.Gallery.data.length
  //     );
  //   }, 3000); // Change the interval time as per your requirement (e.g., 3000ms for 3 seconds).

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [productsData?.attributes?.Gallery?.data]);
  return (
    <div id="hero" className="relative">
    {/* Backgroud images */}
    <Image
      className="absolute top-[-190px] right-[-180px] vsm:top-[-500px] lg:top-0 vsm:right-[-300px] lg:right-0 z-[-1]"
      src={heroBg1}
      alt="hero bg"
    />
    <Image
      className="hidden md:block absolute top-[25.06rem] left-0 z-[-1]"
      src={heroBg2}
      alt="hero bg2"
    />

    <Navbar open={open} setOpen={setOpen} />
    <div className="mt-[3.56rem] vsm:mt-[3rem] 2xl:mt-[5.81rem] flex flex-col lg:flex-row items-center justify-center 2xl:gap-[30px]">
      <div className="px-[2rem] md:px-0 lg:mr-[-270px] 2xl:mr-[-200px] lg:ml-[60px] z-[2]">
        <h1 className="text-black text-3xl text-center md:text-start font-normal">
          Say Hello
        </h1>
        <h2 className="mb-[0.37rem] text-blue-500 text-[31px] vsm:text-[45px] text-center md:text-start md:text-[50px] font-normal">
          to Your Good Health...
        </h2>
        <p className="w-fit md:w-[464px] text-black text-[15px] font-normal text-justify">
          It is an advance hyperbaric oxygen therapy (HBOT) system compliant
          to international standards and regulations for operations and
          safety. HBOT improves brain
        </p>
        <button className="mt-[1.87rem] w-[123px] h-10 rounded-[10px] border border-cyan-600 text-sky-700 text-[15px] font-normal">
          Read More
        </button>
      </div>

      <div className="lg:w-[1026px] lg:h-[705px] 2xl:w-[50vw] lg:mr-[-90px] 2xl:mr-[-160px] lg:flex justify-center items-center">
        <Image
          className=""
          src={heroImg}
          alt="Hero Img"
        />
      </div>
    </div>
  </div>
  );
};

export default Hero;
