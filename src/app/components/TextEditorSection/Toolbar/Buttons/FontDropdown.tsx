import React, { useEffect } from "react";
import HoverDropdown from "../HoverDropdown";
import { selectorProps } from "./types";

export const FONT_SIZES = [
  { label: "12", value: "12px" },
  { label: "16", value: "16px" },
  { label: "20", value: "20px" },
  { label: "24", value: "24px" },
  { label: "32", value: "32px" },
];

export default function FontDropdown({ value, onUpdate }: selectorProps) {
  return (
    <div className={`toolbar-btn px-0`}>
      <HoverDropdown
        iconUrl="/images/icons/formatting.svg"
        iconWidth={36}
        iconHeight={36}
        title="Size"
        value={FONT_SIZES.find((font) => font.value == value)}
        options={FONT_SIZES.map(({ label, value }: any) => ({
          label,
          value,
        }))}
        onChangeValue={(newFontSize: { label: string; value: string }) =>
          onUpdate(newFontSize.value)
        }
      />
    </div>
  );
}
