"use client";
import React from "react";

type TextInputProps = {
  labelText: string;
  placeHolder: string;
  onInput?: Function;
  formHookRegistration?: any;
  className?: string;
  inputClassName?: string;
};

export default function TextInput({
  onInput,
  labelText,
  placeHolder,
  formHookRegistration,
  className,
  inputClassName,
}: TextInputProps) {
  return (
    <div className={`${className} flex flex-col items-start`}>
      {labelText ? <label className="mb-2"> {labelText} </label> : ""}
      <input
        {...formHookRegistration}
        type="text"
        className={`${inputClassName} w-full h-[52px] py-4 px-6 general-gray-border outline-none`}
        onInput={(e) => onInput?.(e)}
        placeholder={placeHolder}
      />
    </div>
  );
}
