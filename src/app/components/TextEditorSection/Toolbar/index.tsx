import React from "react";
import BoldButton from "./Buttons/BoldButton";
import ItalicButton from "./Buttons/ItalicButton";
import UnderlineButton from "./Buttons/underlineButton";
import IndentButton from "./Buttons/IndentButton";
import OutdentButton from "./Buttons/OutdentButton";
import ActionButton from "./Buttons/ActionButton";
import ToggleButton from "./Buttons/ToggleButton";
import HoverDropdown from "./HoverDropdown";
import SelectionDropdown from "./Buttons/SelectionDropdown";

export const FONT_SIZES = [
  { label: "12", value: "12px" },
  { label: "16", value: "16px" },
  { label: "20", value: "20px" },
  { label: "24", value: "24px" },
  { label: "32", value: "32px" },
];

export const FONT_FAMILIES = [
  {
    label: (
      <span className="text-[10px] text-nowrap font-sans">Sans Serif</span>
    ),
    value: "sans",
  },
  {
    label: <span className="text-xs text-nowrap font-serif">Serif</span>,
    value: "serif",
  },
  {
    label: <span className="text-xs text-nowrap font-[cursive]">Cursive</span>,
    value: "cursive",
  },
];

export type PositionStatus = {
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  isAlignLeft?: boolean;
  isAlignCenter?: boolean;
  isAlignRight?: boolean;
  isUL?: boolean;
  isOL?: boolean;
  fontSize?: string;
  fontFamily?: string;
};

type ToolbarProps = {
  status: PositionStatus;
  toggleBold: Function;
  toggleItalic: Function;
  toggleUnderline: Function;
  applyIndent: Function;
  applyOutdent: Function;
  applyFontSize: Function;
  applyAlignLeft: Function;
  applyAlignCenter: Function;
  applyAlignRight: Function;
  applyUL: Function;
  applyOL: Function;
  applyFontFamily: Function;
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
  applyUL,
  applyOL,
  applyFontFamily,
  status: {
    isBold = false,
    isItalic = false,
    isUnderline = false,
    fontSize,
    fontFamily,
    isAlignLeft = false,
    isAlignCenter = false,
    isAlignRight = false,
    isUL = false,
    isOL = false,
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
      <ToggleButton
        isActive={isUL}
        icon="/images/icons/unorderedList.svg"
        onClick={applyUL}
        width={24}
        height={24}
      />
      <ToggleButton
        isActive={isOL}
        icon="/images/icons/orderedList.svg"
        onClick={applyOL}
        width={24}
        height={24}
      />
      <SelectionDropdown
        iconUrl="/images/icons/formatting.svg"
        options={FONT_SIZES.map(({ label, value }: any) => ({
          label: label,
          value,
        }))}
        onUpdate={applyFontSize}
        value={fontSize}
      />
      <SelectionDropdown
        iconUrl="/images/icons/font.svg"
        iconWidth={100}
        iconHeight={100}
        options={FONT_FAMILIES.map(({ label, value }: any) => ({
          label: label,
          value,
        }))}
        onUpdate={applyFontFamily}
        value={fontFamily}
      />
    </div>
  );
}
