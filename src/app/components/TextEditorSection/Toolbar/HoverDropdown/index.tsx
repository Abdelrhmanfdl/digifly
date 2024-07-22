"use client";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Image from "next/image";
import { OptionType } from "../Buttons/types";

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
  value?: string | undefined;
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
    if (value) {
      setSelectedOption(options.find((option) => option.value == value));
    } else {
      setSelectedOption(options?.[0]);
    }
  }, [value]);

  return (
    <div
      className="w-min relative text-center inline-block left-0 hover-drop-down"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {iconUrl && !selectedOption ? (
        <Image alt="" src={iconUrl} width={iconWidth} height={iconHeight} />
      ) : (
        <span className="text-nowrap flex flex-row flex-nowrap">
          <img src="/images/icons/dropdownArrow.svg" className="me-1" />
          {selectedOption ? selectedOption.label : title}
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
