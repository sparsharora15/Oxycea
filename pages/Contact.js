import React from "react";
import "@/app/globals.css";
import "./media.css";
import Image from "next/image";
import location1 from "@/public/location1.png";
import location from "@/public/location.png";
import mail from "@/public/mail.png";
import Phone from "@/public/Phone.png";
import Clock from "@/public/Clock.png";
import "@/app/globals.css";
import strip from "@/public/strip.png";
import Footnote from "@/components/Footnote";
import machine from "@/public/modelImg.png";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      {/* <div className="mt-[1.3rem] backGround padding-150 flex flex-col items-center justify-left">
        <h2 className="text-white text-3xl flex flex-row w-full items-center">
          Contact Us
          <div className="ml-2 mr-5 hidden md:block w-[10rem] h-0 border-[1px]" />
        </h2>
        <p className="text-white w-full">
          We would love to respond to your queries and help you succeed. Feel
          free to get in touch with us.
        </p>
      </div> */}
      <div className="mt-[1.3rem] backGround padding-150 p-4 md:p-8 flex flex-col items-center justify-left">
        {" "}
        <h2 className="text-white text-2xl md:text-3xl flex flex-row w-full items-center">
          {/* Adjusted font size for small and medium screens */}
          Contact Us
          <div className="ml-2 mr-5 hidden md:block md:w-[10rem] h-0 border-[1px]" />
        </h2>
        <p className="text-white w-full">
          We would love to respond to your queries and help you succeed. Feel
          free to get in touch with us.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full mediaParent">
        <div className="mediaCol1 md:w-[45%] bg-[#E4EDF5] p-8 shadow-md">
          {" "}
          <h2 className="text-2xl text-color flex items-center">
            Reach Us.
            <hr className="ml-2 border-color w-1/2" />
          </h2>
          <p className="mt-5 flex flex-row text-color">
            <Image src={Clock} alt="clock" className="w-[25px] mr-2" />
            Working Hours
          </p>
          <p className="mt-1">(08:00 AM - 08:00 PM)</p>
          <p className="mt-8 flex flex-row text-color items-center">
            <Image src={location1} alt="clock" className="w-[20px] mr-4" />
            Registered Office
          </p>
          <p className="" style={{ lineHeight: "36px" }}>
            Cogmac Technologies (Office)
          </p>
          <p className="flex flex-row items-center">
            <Image
              src={location}
              alt="clock"
              className="w-[15px] h-[15px] mr-2"
            />
            G-299, Sector 63, Noida, UP, India - 201301
          </p>
          <p
            className="flex flex-row items-center"
            style={{ lineHeight: "36px" }}
          >
            <Image
              src={location}
              alt="clock"
              className="w-[15px] h-[15px] mr-2"
            />
            A-101, Sector 58, Noida, UP, India - 203101
          </p>
          <p className="mt-8 flex flex-row text-color items-center">
            <Image src={Phone} alt="clock" className="w-[15px] h-[15px] mr-4" />
            Phone
          </p>
          <p className="" style={{ lineHeight: "36px" }}>
            +91 - 9560992852
          </p>
          <p className="" style={{ lineHeight: "36px" }}>
            +91 - 9560992852
          </p>
          <p className="mt-8 flex flex-row text-color items-center">
            <Image src={mail} alt="clock" className="w-[15px] h-[15px] mr-4" />
            Send Mail
          </p>
          <p className="" style={{ lineHeight: "36px" }}>
            oxycea@cogmac.com
          </p>
          {/* <Image src={machine} alt="machine" className="absolute" /> */}
        </div>

        <div className="mediaCol2 md:w-[55%] bg-white p-8 shadow-md">
          {" "}
          {/* Adjusted padding shorthand */}
          <h1 className="text-color flex items-center justify-center text-2xl mb-4">
            {" "}
            {/* Removed unnecessary margin */}
            Send your request
          </h1>
          <div className="flex flex-col md:flex-row mb-4 md:justify-between">
            {" "}
            {/* Adjusted flex layout for larger screens */}
            <input
              type="text"
              className="w-full md:w-[48%] px-4 py-2 border border-gray-400 rounded-md mb-2 md:mb-0 md:mr-2"
              style={{ borderRadius: "8px !important" }}
              placeholder="Name"
            />
            <input
              type="text"
              style={{ borderRadius: "8px !important" }}
              className="w-full md:w-[48%] px-4 py-2 border border-gray-400 rounded-md"
              placeholder="Contact"
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4 md:justify-between">
            <input
              type="text"
              className="w-full md:w-[48%] px-4 py-2 border border-gray-400 rounded-md mb-2 md:mb-0 md:mr-2"
              style={{ borderRadius: "8px !important" }}
              placeholder="Email"
            />
            <input
              type="text"
              style={{ borderRadius: "8px !important" }}
              className="w-full md:w-[48%] px-4 py-2 border rounded-md border-gray-400"
              placeholder="Subject"
            />
          </div>
          <div className="w-full">
            <textarea
              className="w-full mediaTextArea px-4 py-2 border border-gray-400"
              rows="4"
              style={{ borderRadius: "8px !important" }}
              placeholder="Enter your text message"
            />
          </div>
          <div className="mt-5 w-full flex items-center justify-center">
            <button className="w-[20%] backGround px-4 py-2 text-white rounded-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
//
