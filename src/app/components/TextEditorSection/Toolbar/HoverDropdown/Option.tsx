import React from "react";

export type OptionProps = {
  value: string;
  label: React.ReactNode;
  onClick?: any;
};

export default function Option({ value, label, onClick }: OptionProps) {
  return (
    <div
      className="block mx-auto py-2 text-center text-sm text-gray-700 hover:bg-gray-100 option"
      onClick={() => onClick({ label, value })}
    >
      {label}
    </div>
  );
}
