import React from "react";
import Image from "next/image";

const Works = ({ title, src, paragraph, button, ps, classNmae = "" }) => {
  return (
    <div className="flex-shrink-0 h-full w-1/3 relative max-lg:w-full max-lg:h-fit">
      <Image
        src={src}
        alt={`${title} Pic`}
        fill
        sizes="100vw"
        // priority
        className="-z-20 h-full object-cover"
      />
      <div className="bg-Dark/40 h-full absolute w-full -z-10" />
      <div className="h-full flex flex-col items-center justify-center text-Light p-5 px-12 max-lg:h-fit max-lg:px-8 max-lg:py-16">
        <h1 className="text-h3 font-semibold h-[3em]">{title}</h1>
        <p className="text-body/loose h-[9em]">{paragraph}</p>
        <button className="bg-light w-full max-w-[450px] py-3 rounded-xl text-dark max-lg:my-2 text-body">
          {button}
        </button>
        <p className="bottom-5 absolute mx-10 text-body/loose max-lg:w-full max-lg:mt-2 max-lg:static">{`(${ps})`}</p>
      </div>
    </div>
  );
};

export default Works;
