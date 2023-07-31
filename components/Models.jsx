// import Model from "./Model";

// const Models = ({
//   modelsData,
//   modelsChamberData,
//   modelsChamberData2,
//   modelsChamberData3,
// }) => {
//   // modelsChamberData={modelsChamberData}
//   return (
//     <div id="models" className="models mt-[4.24rem]">
//       <div className="flex flex-col items-center gap-[1.63rem]">
//         <div className="flex gap-[0.75rem] items-center">
//           <div className="w-[4rem] sm:w-[10rem] h-0 border-[1px] border-[#2A70B0]" />
//           <h1 className="text-[#2A70B0] text-3xl">
//             {modelsData?.attributes?.modelTitle}
//           </h1>
//           <div className="w-[4rem] sm:w-[10rem] h-0 border-[1px] border-[#2A70B0]" />
//         </div>
//         <p className="w-[85%] vsm:w-[90%] xmd:w-[773px] text-justify text-zinc-700 text-xs font-normal">
//           {modelsData?.attributes?.modelDescription}
//         </p>
//       </div>

//       <Model reverse={false} modelsChamberData={modelsChamberData} />
//       <div className="hidden lg:block">
//         <Model reverse={true} modelsChamberData={modelsChamberData2} />
//         <Model reverse={false} modelsChamberData={modelsChamberData3} />
//       </div>
//     </div>
//   );
// };

// export default Models;


import Model from "./Model";

const Models = () => {
  return (
    <div id="models" className="models mt-[4.24rem]">
      <div className="flex flex-col items-center gap-[1.63rem]">
        <div className="flex gap-[0.75rem] items-center">
          <div className="w-[4rem] sm:w-[10rem] h-0 border-[1px] border-[#2A70B0]" />
          <h1 className="text-[#2A70B0] text-3xl">MODELS</h1>
          <div className="w-[4rem] sm:w-[10rem] h-0 border-[1px] border-[#2A70B0]" />
        </div>
        <p className="w-[85%] vsm:w-[90%] xmd:w-[773px] text-justify text-zinc-700 text-xs font-normal">
          It is an advance hyperbaric oxygen therapy (HBOT) system compliant to
          international standards and regulations for operations and safety.
          HBOT improves brain, lungs, heart and many other organs functioning in
          a human body, by increasing oxygen concentration during therapy time.
          Oxycea is an intuitive and easy to operate machine due to its
          intelligent control system.
        </p>
      </div>

      <Model reverse={false} />
      <div className="hidden lg:block">
        <Model reverse={true} />
        <Model reverse={false} />
      </div>
    </div>
  );
};

export default Models;

