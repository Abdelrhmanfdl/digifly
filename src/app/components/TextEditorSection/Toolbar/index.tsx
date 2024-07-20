import React from "react";
import BoldButton from "./Buttons/BoldButton";
import FontDropdown from "./Buttons/FontDropdown";
import ItalicButton from "./Buttons/ItalicButton";
import UnderlineButton from "./Buttons/underlineButton";
import IndentButton from "./Buttons/IndentButton";
import OutdentButton from "./Buttons/OutdentButton";
import ActionButton from "./Buttons/ActionButton";
import ToggleButton from "./Buttons/ToggleButton";

export type PositionStatus = {
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  isAlignLeft?: boolean;
  isAlignCenter?: boolean;
  isAlignRight?: boolean;
  fontSize?: string;
};

type ToolbarProps = {
  toggleBold: Function;
  toggleItalic: Function;
  toggleUnderline: Function;
  applyIndent: Function;
  applyOutdent: Function;
  applyFontSize: Function;
  applyAlignLeft: Function;
  applyAlignCenter: Function;
  applyAlignRight: Function;
  status: PositionStatus;
};

export default function Toolbar({
  toggleBold,
  toggleItalic,
  toggleUnderline,
  applyIndent,
  applyOutdent,
  applyAlignLeft,
  applyAlignCenter,
  applyAlignRight,
  applyFontSize,
  status: {
    isBold = false,
    isItalic = false,
    isUnderline = false,
    fontSize,
    isAlignLeft = false,
    isAlignCenter = false,
    isAlignRight = false,
  },
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
      <ItalicButton isActive={isItalic} onClick={() => toggleItalic()} />
      <UnderlineButton
        isActive={isUnderline}
        onClick={() => toggleUnderline()}
      />
      <IndentButton onClick={() => applyIndent()} />
      <OutdentButton onClick={() => applyOutdent()} />
      <ToggleButton
        isActive={isAlignLeft}
        icon="/images/icons/alignLeft.svg"
        onClick={applyAlignLeft}
        width={24}
        height={24}
      />
      <ToggleButton
        isActive={isAlignCenter}
        icon="/images/icons/alignCenter.svg"
        onClick={applyAlignCenter}
        width={24}
        height={24}
      />
      <ToggleButton
        isActive={isAlignRight}
        icon="/images/icons/alignRight.svg"
        onClick={applyAlignRight}
        width={24}
        height={24}
      />
      <FontDropdown value={fontSize} onUpdate={applyFontSize} />
    </div>
  );
}
