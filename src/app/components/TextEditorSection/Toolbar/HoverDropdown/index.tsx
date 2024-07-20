"use client";
import { useState } from "react";
import "./styles.css";
import Menu from "./Menu";
import Image from "next/image";

export default function HoverDropdown({
  options,
  title,
  onChangeValue,
  iconUrl,
  iconWidth,
  iconHeight,
}: {
  options: { label: string; value: string }[];
  title?: string;
  onChangeValue: any;
  iconUrl?: string;
  iconWidth?: number;
  iconHeight?: number;
}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null as any);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleChange = ({ label, value }: { label: string; value: string }) => {
    if (value === selectedOption?.value) return;
    setSelectedOption({ label, value });
    onChangeValue({ label, value });
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {iconUrl && !selectedOption ? (
        <Image alt="" src={iconUrl} width={iconWidth} height={iconHeight} />
      ) : (
        <span className="">
          {selectedOption ? selectedOption.label : title}
          {" ▾ "}
        </span>
      )}
      {isDropdownVisible && (
        <Menu
          options={options}
          onClick={handleChange}
          isOpen={isDropdownVisible}
        />
      )}
    </div>
  );
}
