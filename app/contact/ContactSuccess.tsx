import React from "react";

const ContactSuccess = ({ setStep }) => {
  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <span className="text-h4">お問い合わせを受付けました</span>
      <button
        onClick={() => setStep(1)}
        className="px-4 py-2 bg-gray-500 text-Light rounded-lg mt-10
        disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-default
        "
      >
        戻る
      </button>
    </div>
  );
};

export default ContactSuccess;
