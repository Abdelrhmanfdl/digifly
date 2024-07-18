"use client";
import React from "react";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: Function;
};

export default function Button({ text, onClick, type }: ButtonProps) {
  return (
    <button
      type={type != undefined ? type : "button"}
      className="w-full h-[52px] p-2 rounded-sm text-white font-[700] bg-digifly-green hover:bg-digifly-green-lighter cursor-pointer"
      onClick={(e) => onClick?.(e)}
    >
      {text}
    </button>
  );
}
