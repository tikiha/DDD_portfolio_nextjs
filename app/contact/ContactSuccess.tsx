import React from "react";

const ContactSuccess = ({ setStep }) => {
  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <span className="text-h4">お問い合わせを受付けました</span>
      <button
        onClick={() => setStep(1)}
        className="px-4 py-2 text-Dark rounded-lg mt-10 disabled:text-gray-400 disabled:cursor-default btn-form
        "
      >
        戻る
      </button>
    </div>
  );
};

export default ContactSuccess;
