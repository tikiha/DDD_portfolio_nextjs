import React from "react";
import Image from "next/image";
import spinner from "../public/loading.svg";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-light">
      <Image src={spinner} width="100" height="100" alt={"spinner"} />
    </div>
  );
};

export default loading;
