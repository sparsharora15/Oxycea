import Model from "./Model";

const Models = ({
  modelsData,
  modelsChamberData,
  modelsChamberData2,
  modelsChamberData3,
}) => {
  // modelsChamberData={modelsChamberData}
  return (
    <div id="models" className="models mt-[4.24rem]">
      <div className="flex flex-col items-center gap-[1.63rem]">
        <div className="flex gap-[0.75rem] items-center">
          <div className="w-[4rem] sm:w-[10rem] h-0 border-[1px] border-[#2A70B0]" />
          <h1 className="text-[#2A70B0] text-3xl">
            {modelsData?.attributes?.modelTitle}
          </h1>
          <div className="w-[4rem] sm:w-[10rem] h-0 border-[1px] border-[#2A70B0]" />
        </div>
        <p className="w-[85%] vsm:w-[90%] xmd:w-[773px] text-justify text-zinc-700 text-xs font-normal">
          {modelsData?.attributes?.modelDescription}
        </p>
      </div>

      <Model reverse={false} modelsChamberData={modelsChamberData} />
      <div className="hidden lg:block">
        <Model reverse={true} modelsChamberData={modelsChamberData2} />
        <Model reverse={false} modelsChamberData={modelsChamberData3} />
      </div>
    </div>
  );
};

export default Models;
