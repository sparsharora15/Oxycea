import { hero, products } from "@/Services/page.services";
import Hero from "@/components/Hero";
import React from "react";
import "@/app/globals.css";
import aboutImg from "@/public/Rectangle-30.png";

import download from "@/public/download.png";
import Image from "next/image";
import "./media.css";
import Asme from "@/public/American_Society_of_Mechanical_Engineers_logo 1.png";
import Settings from "@/public/Group-66.png";
import Cost from "@/public/Group66-(1).png";
import Expert from "@/public/Vector.png";
import Affiliated from "@/public/mdi_email-certified.png";
import Services from "@/public/Clock.png";
import siderImage from "@/public/Graphic-(1).png";

// import  from "@/public/Rectangle 15.png";

const About = () => {
  const [heroData, setHeroData] = React.useState();
  const [productsData, setProductsData] = React.useState();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    hero(setHeroData);
    products(setProductsData);
  }, []);
  return (
    <>
      <div>
        <Hero
          open={open}
          setOpen={setOpen}
          heroData={heroData}
          // handleProductId={handleProductId}
          productsData={productsData}
        />
      </div>
      <div className="flex mt-40 pt-32 pb-32">
        <div className="w-1/2 ">
          <Image src={aboutImg} alt="image" />
        </div>
        <div className="w-1/2 pl-10">
          <h5 className="text-2xl font-medium flex items-center">
            A BRIEF ABOUT HBOT{" "}
            <div className="ml-2  hidden md:block w-[10rem] h-0 border-[1px] border-black" />
          </h5>
          <p>Hyperbaric Oxygen Therapy</p>
          <p className="mt-3 text-sx">
            HBOT is said to be one of a kind non-invasive therapy which can
            enhance healing time for many medical conditions. HBOT is one of the
            most effective and tested method to treat many known diseases and
            ailments without introducing any chemicals in the body. As one of
            the first indigenously manufacturer of pressure chambers, we believe
            we can provide a safe and affordable option for many diseases in
            India and throughout the world.
          </p>
          <p className="mt-3 text-sx">
            Some of the medical conditions approved by FDA for hyperbaric
            chambers are listed below:
          </p>
          <div className="pl-6">
            <ul className=" ml-3 list-disc text-sx   leading-7">
              <li>Air and gas bubbles in blood vessels</li>
              <li>
                {" "}
                Anemia (severe anemia when blood transfusions cannot be used)
              </li>
              <li>
                Burns (severe and large burns treated at a specialized burn
                center)
              </li>
              <li>Carbon monoxide poisoning</li>
              <li>Crush injury</li>
              <li>Decompression sickness (diving risk)</li>
              <li>Gas gangrene</li>
              <li>
                Hearing loss (complete hearing loss that occurs suddenly and
                without any known cause)
              </li>
              <li>Infection of the skin and bone (severe)</li>
              <li>Radiation injury</li>
              <li>Skin graft flap at risk of tissue death</li>
              <li>
                Vision loss (when sudden and painless in one eye due to blockage
                of blood flow)
              </li>
              <li>Wounds (non-healing, diabetic foot ulcers)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex backGround flex-col items-center padding-55px justify-start bg-cover bg-center bg-no-repeat h-screen w-full bg">
        <div className="flex flex-col w-full items-center justify-center">
          <h2 className="text-white text-3xl flex flex-row w-full items-center justify-center">
            <div className="ml-2  hidden md:block w-[10rem] h-0 border-[1px] border-white mr-5" />
            WHY OXYCEA
            <div className="ml-2 mr-5 hidden md:block w-[10rem] h-0 border-[1px] border-white" />
          </h2>
          <p className="p-5 text-center text-align-last-center text-white">
            HBOT is said to be one of a kind non-invasive therapy which can
            enhance healing time for many medical conditions. HBOT is one of the
            most effective and tested method to treat many known diseases and
            ailments without introducing any chemicals in the body. As one of
            the first indigenously manufacturer of pressure chambers, we believe
            we can provide a safe and affordable option for many diseases in
            India and throughout the world.
          </p>
        </div>
        <div>
          <div className="container mx-auto mt-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
              <div className="bgColor rounded-2xl  shadow w-40">
                <div
                  className=""
                  style={{ padding: "20px", width: "10rem", height: "10rem" }}
                >
                  <Image
                    src={Asme}
                    alt="American_Society"
                    className="text-xl mx-auto font-bold mb-2"
                  />
                  <p className="text-color text-xs cardsText">
                    INDIA’S FIRST ASME APPROVED
                  </p>
                </div>
              </div>
              <div className="bgColor rounded-2xl  shadow w-40">
                <div
                  className=""
                  style={{ padding: "20px", width: "10rem", height: "10rem" }}
                >
                  <Image
                    src={Settings}
                    alt="American_Society"
                    className="text-xl mx-auto font-bold mb-2"
                  />
                  <p className="text-color text-xs cardsText">
                    EASY TO FUNCTION
                  </p>
                </div>
              </div>
              <div className="bgColor rounded-2xl  shadow w-40">
                <div
                  className=""
                  style={{ padding: "20px", width: "10rem", height: "10rem" }}
                >
                  <Image
                    src={Cost}
                    alt="American_Society"
                    className="text-xl mx-auto font-bold mb-2"
                  />
                  <p className="text-color text-xs cardsText">COST EFFECTIVE</p>
                </div>
              </div>
              <div className="bgColor rounded-2xl  shadow w-40">
                <div
                  className=""
                  style={{ padding: "20px", width: "10rem", height: "10rem" }}
                >
                  <Image
                    src={Expert}
                    alt="American_Society"
                    className="text-xl mx-auto  font-bold mb-2"
                  />
                  <p className="text-color text-xs cardsText">
                    EXPERT TRAINERS
                  </p>
                </div>
              </div>
              <div className="bgColor rounded-2xl  shadow w-40">
                <div
                  className=""
                  style={{ padding: "20px", width: "10rem", height: "10rem" }}
                >
                  <Image
                    src={Affiliated}
                    alt="American_Society"
                    className="text-xl mx-auto   font-bold mb-2"
                  />
                  <p className="text-color text-xs cardsText">
                    AFFILIATED CERTIFICATION COURSE
                  </p>
                </div>
              </div>
              <div className="bgColor rounded-2xl  shadow w-40">
                <div
                  className=""
                  style={{ padding: "20px", width: "10rem", height: "10rem" }}
                >
                  <Image
                    src={Services}
                    alt="American_Society"
                    className="text-xl mx-auto font-bold mb-2"
                  />
                  <p className="text-color text-xs cardsText">24x7 SERVICES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="padding-55px flex flex-col w-full items-center relative justify-center">
        <h2 className="text-color text-3xl flex flex-row w-full items-center justify-center">
          <div className="ml-2  hidden md:block w-[10rem] h-0 border-[1px] border-color mr-5" />
          IN HOUSE MANUFACTURING
          <div className="ml-2 mr-5 hidden md:block w-[10rem] h-0 border-[1px] border-color" />
        </h2>
        <p className="p-5 text-center text-align-last-center text-black">
          HBOT is said to be one of a kind non-invasive therapy which can
          enhance healing time for many medical conditions. HBOT is one of the
          most effective and tested method to treat many known diseases and
          ailments without introducing any chemicals in the body. As one of the
          first indigenously manufacturer of pressure chambers, we believe we
          can provide a safe and affordable option for many diseases in India
          and throughout the world.
        </p>
        <div className="grid grid-cols-4 gap-4 backdrop relative z-10">
          <div className="max-w-sm rounded-2xl p-3 bg-transparent overflow-hidden shadow-lg flex flex-col">
            <div className="font-bold flex justify-center items-center text-base mb-2 p-4">
              INHOUSE FABRICATION
            </div>
            <img
              src="card1-image.jpg"
              alt="Card 1"
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4 flex-1">
              <p className="text-gray-700 text-center text-sm">
                It is an advance hyperbaric oxygen therapy (HBOT) system
                compliant to international standards and regulations for
                operations and safety.
              </p>
            </div>
          </div>

          <div className="max-w-sm p-3 rounded-2xl bg-transparent overflow-hidden shadow-lg flex flex-col">
            <div className="font-bold flex justify-center items-center text-base mb-2 p-4">
              WELDING
            </div>
            <img
              src="card2-image.jpg"
              alt="Card 2"
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4 flex-1">
              <p className="text-gray-700 text-center text-sm">
                It is an advance hyperbaric oxygen therapy (HBOT) system
                compliant to international standards and regulations for
                operations and safety.{" "}
              </p>
            </div>
          </div>

          <div className="max-w-sm p-3 rounded-2xl bg-transparent overflow-hidden shadow-lg flex flex-col">
            <div className="font-bold text-base flex justify-center items-center mb-2 p-4">
              MACHINING
            </div>
            <img
              src="card3-image.jpg"
              alt="Card 3"
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4 flex-1">
              <p className="text-gray-700 text-center text-sm">
                It is an advance hyperbaric oxygen therapy (HBOT) system
                compliant to international standards and regulations for
                operations and safety.{" "}
              </p>
            </div>
          </div>

          <div className="max-w-sm p-3 rounded-2xl bg-transparent overflow-hidden shadow-lg flex flex-col">
            <div className="font-bold text-base flex justify-center items-center mb-2 p-4">
              ASSEMBLY
            </div>
            <img
              src="card4-image.jpg"
              alt="Card 4"
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4 flex-1">
              <p className="text-gray-700 text-center text-sm">
                It is an advance hyperbaric oxygen therapy (HBOT) system
                compliant to international standards and regulations for
                operations and safety.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-8 flex justify-center items-center">
          <div className="flex space-x-5">
            <button className="backGround px-4 py-2  text-white rounded-md">
              {/* <Image src={download} className="text-white" alt="download image"/> */}
              Brochure
            </button>

            <button className="px-4 py-2 border-color  text-color rounded-md">
              Download
            </button>
          </div>
        </div>
        <Image
          src={siderImage}
          className="absolute bottom-0 z-0 left--40"
          alt="graphic image"
        />
      </div>

      <div className="backGround padding-55px flex flex-col items-center justify-center">
        <h4 className="text-white text-3xl mb-3">Learn more about HBOT</h4>
        <p className="text-white">
          We have shared some knowledge about hbot to give you a proper
          guidance, Click below link to download files.
        </p>
        <div className="container mx-auto mt-8 flex justify-center items-center">
          <div className="flex space-x-12">
            <button className="flex items-center justify-center px-4 py-2 bg-white text-color rounded-md">
              <Image src={download} className="mr-2" alt="download image" />
              Download
            </button>

            <button className="flex items-center justify-center px-4 py-2 bg-white text-color rounded-md">
              <Image src={download} className="mr-2" alt="download image" />
              Download
            </button>

            <button className="flex items-center justify-center px-4 py-2 bg-white text-color rounded-md">
              <Image src={download} className="mr-2" alt="download image" />
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="padding-80 flex justify-center items-center flex-col">
        <h1 className="text-color text-4xl">Healthy India is Our Goal</h1>
        <p className="text-color text-sm mt-2">We have shared some knowledge about hbot to give you a proper guidance, Click below link to download files.</p>
        <hr className="w-full border-color mt-12"/>
      </div>
    </>
  );
};

export default About;

