import React from "react";

const ContactSuccess = ({ setStep }) => {
  return (
    <div>
      お問い合わせを受付しました
      <button
        onClick={() => setStep(1)}
        className="px-4 py-2 bg-gray-700 text-light rounded-lg mt-10 col-start-6"
      >
        戻る
      </button>
    </div>
  );
};

export default ContactSuccess;
