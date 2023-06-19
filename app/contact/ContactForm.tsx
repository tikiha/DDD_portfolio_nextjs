"use client";
import React, { useState } from "react";

const CustomForm = ({ title, name, type }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="col-span-4 border border-collapse flex items-center"
      >
        {title}
      </label>
      <div className="col-span-8 border border-collapse flex items-center p-6">
        <input
          type={type}
          className="rounded-md border border-collapse border-slate-500 bg-gray-50 text-base p-1 w-2/3"
          id={name}
          // placeholder="お名前"
          minLength={1}
          maxLength={30}
          required
        />
      </div>
    </>
  );
};

function ContactForm({ setFormData, setStep }) {
  function handleConfirm(event) {
    event.preventDefault();
    const data = {
      company: event.target.company.value,
      name: event.target.name.value,
      tel: event.target.tel.value,
      email: event.target.email.value,
      url: event.target.url.value,
      select: event.target.select.value,
      message: event.target.message.value,
    };
    setFormData(data);
    setStep(2);
  }

  return (
    <form
      onSubmit={handleConfirm}
      className="flex-shrink-0 mx-auto lg:w-[1024px] w-full px-4 grid grid-cols-12 border-collapse"
    >
      <CustomForm title={"会社名または屋号"} name={"company"} type={"text"} />
      <CustomForm title={"担当者様のお名前"} name={"name"} type={"text"} />
      <CustomForm title={"お電話番号"} name={"tel"} type={"number"} />
      <CustomForm title={"メールアドレス"} name={"email"} type={"text"} />
      <CustomForm
        title={"現在のホームページのURL"}
        name={"url"}
        type={"text"}
      />
      <label
        htmlFor="name"
        className="col-span-4 border border-collapse flex items-center"
      >
        お問い合わせ項目
      </label>
      <div className="col-span-8 border border-collapse flex items-center p-6">
        <select
          name="select"
          id=""
          className="rounded-md border border-collapse border-slate-500 bg-gray-50 text-base p-1 w-2/3"
        >
          <option value="1:LPの制作">1:LPの制作</option>
          <option value="2:ホームページ制作">2:ホームページ制作</option>
          <option value="3:コーポレートサイト制作">
            3:コーポレートサイト制作
          </option>
          <option value="4:ECサイト制作">4:ECサイト制作</option>
          <option value="5:リニューアル">5:リニューアル</option>
          <option value="6:更新・修正">6:更新・修正</option>
          <option value="7:その他">7:その他</option>
        </select>
      </div>
      <label
        htmlFor="name"
        className="col-span-4 border border-collapse flex items-center"
      >
        お問い合わせ内容
      </label>
      <div className="col-span-8 border border-collapse flex items-center p-6">
        <textarea
          className="rounded-md border border-collapse border-slate-500 bg-gray-50 text-base p-1 w-2/3"
          id="message"
          placeholder="ご要望をお書きください"
          rows={4}
          minLength={5}
          maxLength={1000}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-gray-700 text-light rounded-lg mt-10 col-start-6 
        disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-default
        "
      >
        確認
      </button>
    </form>
  );
}

export default ContactForm;