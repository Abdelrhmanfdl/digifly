import React from "react";
import BoldButton from "./Buttons/BoldButton";
import FontDropdown from "./Buttons/FontDropdown";

export type PositionStatus = {
  isBold?: boolean;
  fontSize?: string;
};

type ToolbarProps = {
  toggleBold: Function;
  applyFontSize: Function;
  status: PositionStatus;
};

export default function Toolbar({
  toggleBold,
  applyFontSize,
  status: { isBold = false, fontSize },
}: ToolbarProps) {
  return (
    <div
      className="w-full flex flex-row flex-wrap justify-start bg-[#f8f7fc] rounded-sm border-[1px] border-solid"
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <BoldButton isActive={isBold} onClick={() => toggleBold()} />
      <FontDropdown value={fontSize} onUpdate={applyFontSize} />
    </div>
  );
}
