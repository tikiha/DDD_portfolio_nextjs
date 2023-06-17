import React from "react";

const Page = () => {
  return (
    <main className="w-screen h-screen">
      <div className="w-full bg-white h-1/2 mb-10">
        <div className="text-red-500 text-6xl text-bold h-full flex items-center justify-center">
          gridレイアウトテンプレート（コーポレート）
        </div>
      </div>
      <div className="mx-auto xl:w-[1280px] w-full px-4 grid grid-cols-12 gap-x-8 gap-y-10">
        <div className="col-span-4 bg-slate-400 h-40" />
        <div className="col-span-4 bg-slate-400 h-40" />
        <div className="col-span-4 bg-slate-400 h-40" />
        <div className="col-span-3 bg-red-400 h-10" />
        <div className="col-span-3 bg-red-400 h-10" />
        <div className="col-span-3 bg-red-400 h-10" />
        <div className="col-span-3 bg-red-400 h-10" />
        <div className="col-span-6 bg-blue-400 h-10" />
        <div className="col-span-6 bg-blue-400 h-10" />
      </div>
    </main>
  );
};

export default Page;
