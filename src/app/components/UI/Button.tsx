"use client";
import React from "react";

type ButtonProps = {
  text: string;
  onClick: Function;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="w-full h-[52px] p-2 rounded-sm text-white font-[700] bg-digifly-green hover:bg-digifly-green-lighter cursor-pointer"
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
}
