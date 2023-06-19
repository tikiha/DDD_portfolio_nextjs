"use client";
import React, { useState } from "react";

const CustomConfirm = ({ title, formData }) => {
  return (
    <>
      <div className="col-span-4 border border-collapse flex items-center">
        {title}
      </div>
      <div className="col-span-8 border border-collapse flex items-center p-6">
        {formData}
      </div>
    </>
  );
};

const ContactConfirm = ({ formData, setStep }) => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      setStep(3);
      // event.target.company.value = "";
      // event.target.name.value = "";
      // event.target.tel.value = "";
      // event.target.email.value = "";
      // event.target.url.value = "";
      // event.target.select.value = "1:LPの制作";
      // event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <div className="flex-shrink-0 mx-auto lg:w-[1024px] w-full px-4 grid grid-cols-12 border-collapse">
      <h2 className="col-span-12">確認画面</h2>
      <CustomConfirm title={"会社名または屋号"} formData={formData.company} />
      <CustomConfirm title={"担当者様のお名前"} formData={formData.name} />
      <CustomConfirm title={"お電話番号"} formData={formData.tel} />
      <CustomConfirm title={"メールアドレス"} formData={formData.email} />
      <CustomConfirm
        title={"現在のホームページのURL"}
        formData={formData.url}
      />
      <CustomConfirm title={"お問い合わせ項目"} formData={formData.select} />
      <CustomConfirm title={"お問い合わせ内容"} formData={formData.message} />
      <button
        onClick={() => setStep(1)}
        className="px-4 py-2 bg-gray-700 text-light rounded-lg mt-10 col-start-6"
      >
        戻る
      </button>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-4 py-2 bg-gray-700 text-light rounded-lg mt-10 col-start-6 
        disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-default
        "
      >
        送信
      </button>
    </div>
  );
};

export default ContactConfirm;
