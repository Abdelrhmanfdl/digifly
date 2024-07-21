import React, { useEffect } from "react";
import HoverDropdown from "../HoverDropdown";
import { selectorProps } from "./types";

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
