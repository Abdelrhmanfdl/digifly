"use client";
import React from "react";

type TextInputProps = {
  labelText: string;
  placeHolder: string;
  onInput: Function;
};

export default function TextInput({
  onInput,
  labelText,
  placeHolder,
}: TextInputProps) {
  return (
    <div className="flex flex-col items-start">
      {labelText ? <label className="mb-2"> {labelText} </label> : ""}
      <input
        type="text"
        className="w-full h-[52px] py-4 px-6 rounded-sm border-[1px] border-[rgba(229, 229, 229, 1)] border-solid"
        style={{ borderColor: "rgba(229, 229, 229, 1)" }}
        onInput={(e) => onInput(e)}
        placeholder={placeHolder}
      />
    </div>
  );
}
