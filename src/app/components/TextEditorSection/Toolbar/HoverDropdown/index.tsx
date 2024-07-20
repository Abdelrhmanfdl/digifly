"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import Menu from "./Menu";
import Image from "next/image";

type OptionType = { label: string; value: string };

export default function HoverDropdown({
  options,
  title,
  onChangeValue,
  iconUrl,
  iconWidth,
  iconHeight,
  value,
}: {
  options: OptionType[];
  title?: string;
  onChangeValue: any;
  iconUrl?: string;
  iconWidth?: number;
  iconHeight?: number;
  value?: OptionType;
}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null as any);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleChange = ({ label, value }: OptionType) => {
    setSelectedOption({ label, value });
    onChangeValue({ label, value });
  };

  useEffect(() => {
    console.log("font update 1", value);
    if (value) {
      console.log("font update 2", value);
      setSelectedOption(value);
    }
  }, [value]);

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
