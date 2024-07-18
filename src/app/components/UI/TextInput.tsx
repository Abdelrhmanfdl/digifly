"use client";
import React from "react";

type TextInputProps = {
  labelText: string;
  placeHolder: string;
  onInput?: Function;
  formHookRegistration?: any;
};

export default function TextInput({
  onInput,
  labelText,
  placeHolder,
  formHookRegistration,
}: TextInputProps) {
  return (
    <div className="flex flex-col items-start">
      {labelText ? <label className="mb-2"> {labelText} </label> : ""}
      <input
        {...formHookRegistration}
        type="text"
        className="w-full h-[52px] py-4 px-6 general-gray-border"
        onInput={(e) => onInput?.(e)}
        placeholder={placeHolder}
      />
    </div>
  );
}
