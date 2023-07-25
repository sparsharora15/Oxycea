import Image from "next/image";
import servicesBg from "@/public/bgmob.svg";
import { SERVER_IP } from "@/Config/SERVER_IP";
const Services = ({ servicesData }) => {
  return (
    <div id="services" className="services relative min-h-[100vh] w-screen">
      <Image className="w-screen " src={servicesBg} alt="services" />
      <div className="services absolute top-[120px] left-0 min-h-[100vh] w-screen flex items-center justify-center">
        <div className="py-[3.12rem] w-[90%] lg:w-[1054px] h-fit lg:h-[535px] bg-zinc-100 bg-opacity-95 rounded-[56px] shadow border border-white">
          <div className="flex justify-center items-center gap-[0.94rem]">
            <div className="hidden xmd:block w-[5rem] border-[1px] border-sky-700" />
            <h1 className="text-center text-sky-700 text-3xl font-normal">
              {/* OUR SERVICES & PROMISES */}
              {servicesData?.attributes?.serviceTitle}
            </h1>
            <div className="hidden xmd:block w-[5rem] border-[1px] border-sky-700" />
          </div>
          <p className="mx-auto w-[90%] lg:w-[773px] text-justify text-zinc-700 text-xs font-normal">
            {servicesData?.attributes?.serviceDescription}
          </p>

          <div className="mx-auto services-list h-fit w-fit mt-[3.55rem] mb-[2.88rem] grid grid-cols-2 gap-x-[0.5rem] gap-[1.5rem] vsm:gap-[2rem] lg:flex lg:gap-[4rem] justify-center">
            <div>
              <img
                src={`${SERVER_IP}${servicesData?.attributes?.img1?.data?.attributes?.url}`}
                alt="img"
              />
              <p>{servicesData?.attributes?.text1}</p>
            </div>
            <div>
              <img
                src={`${SERVER_IP}${servicesData?.attributes?.img2?.data?.attributes?.url}`}
                alt="img"
              />
              <p>{servicesData?.attributes?.text2}</p>
            </div>
            <div>
              <img
                src={`${SERVER_IP}${servicesData?.attributes?.img3?.data?.attributes?.url}`}
                alt="img"
              />
              <p>{servicesData?.attributes?.text3}</p>
            </div>
            <div>
              <img
                src={`${SERVER_IP}${servicesData?.attributes?.img4?.data?.attributes?.url}`}
                alt="img"
              />
              <p>{servicesData?.attributes?.text4}</p>
            </div>
          </div>

          <button className="mx-auto w-[123px] h-10 rounded-[10px] border border-sky-700 grid place-items-center text-sky-700 text-[15px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
