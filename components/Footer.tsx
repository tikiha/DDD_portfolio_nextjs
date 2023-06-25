import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary lg:w-10 flex flex-col justify-center max-lg:flex-row">
      <h1 className="text-mute text-sm w-full lg:rotate-90 lg:-translate-y-2">
        <span>&copy;</span>
        <span className="tracking-[0.125em] mx-2">DDD</span>
        <span className="">2023</span>
      </h1>
    </div>
  );
};

export default Footer;
