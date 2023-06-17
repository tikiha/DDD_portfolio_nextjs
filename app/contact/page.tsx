"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactConfirm from "./ContactConfirm";
import ContactSuccess from "./ContactSuccess";

const Page = () => {
  const [formData, setFormData] = useState(null);
  const [step, setStep] = useState(1);

  return (
    <main className="flex flex-col items-center w-screen h-full bg-light mt-16">
      <div className="flex-shrink-0 w-full h-[66vh] relative">
        <h1 className="absolute left-1/2 top-1/2 text-light font-bold text-4xl z-10 -translate-x-1/2 -translate-y-1/2">
          Contact
        </h1>
        <Image
          src={"/Pic/ContactHome.png"}
          fill
          alt={"ConatctHome Pic"}
          className="w-full object-cover object-center"
        />
      </div>
      <div className="flex-shrink-0 py-6 text-dark mx-auto xl:w-[1280px] w-full px-4">
        home {">"} Contact
      </div>
      <span className="border-t w-full mb-16" />
      {step === 1 ? (
        <ContactForm setFormData={setFormData} setStep={setStep} />
      ) : step === 2 ? (
        <ContactConfirm formData={formData} setStep={setStep} />
      ) : step === 3 ? (
        <ContactSuccess setStep={setStep} />
      ) : null}

      <div className="mt-16 h-full w-full ">
        <div className="py-6 flex items-center justify-center border border-collapse">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            ↑
          </button>
        </div>
        <div className="py-6 flex items-center justify-center">
          &copy; DDD 2023
        </div>
      </div>
    </main>
  );
};

export default Page;
