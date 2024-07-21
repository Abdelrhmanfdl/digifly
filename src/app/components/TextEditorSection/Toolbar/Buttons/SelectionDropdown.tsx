import React from "react";
import HoverDropdown from "../HoverDropdown";
import { selectorProps } from "./types";

interface SelectionDropdownProps extends selectorProps {
  iconUrl: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function SelectionDropdown({
  value,
  onUpdate,
  options,
  iconUrl,
  iconWidth = 36,
  iconHeight = 36,
}: SelectionDropdownProps) {
  return (
    <div className={`toolbar-btn px-0`}>
      <HoverDropdown
        iconUrl={iconUrl}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        title="Size"
        value={value}
        options={options}
        onChangeValue={(newFontSize: { label: string; value: string }) =>
          onUpdate(newFontSize.value)
        }
      />
    </div>
  );
}
