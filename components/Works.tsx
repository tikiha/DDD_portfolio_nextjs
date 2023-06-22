import React from "react";
import Image from "next/image";

const Works = ({ title, src, paragraph, button, ps, classNmae = "" }) => {
  return (
    <div className="flex-shrink-0 h-full w-1/3 relative max-lg:w-full max-lg:h-fit">
      <Image
        src={src}
        alt={`${title} Pic`}
        fill
        priority
        className="-z-20 h-full object-cover"
      />
      <div className="bg-Dark/40 h-full absolute w-full -z-10" />
      <div className="h-full flex flex-col items-center justify-center text-Light p-5 px-12 max-lg:h-fit max-lg:px-8 max-lg:py-12">
        <h1 className="text-4xl font-semibold mb-2">{title}</h1>
        <p className="text-base/loose">{paragraph}</p>
        <button className="my-10 bg-light p-3 rounded-xl text-dark max-lg:my-4 text-base">
          {button}
        </button>
        <p className="bottom-5 absolute mx-10 text-base/loose max-lg:m-2 max-lg:static">{`(${ps})`}</p>
      </div>
    </div>
  );
};

export default Works;
