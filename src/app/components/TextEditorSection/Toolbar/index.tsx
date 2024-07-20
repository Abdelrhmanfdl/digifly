import React from "react";
import BoldButton from "./Buttons/BoldButton";
import FontDropdown from "./Buttons/FontDropdown";
import ItalicButton from "./Buttons/ItalicButton";
import UnderlineButton from "./Buttons/underlineButton";
import IndentButton from "./Buttons/IndentButton";
import OutdentButton from "./Buttons/OutdentButton";

export type PositionStatus = {
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  fontSize?: string;
};

type ToolbarProps = {
  toggleBold: Function;
  toggleItalic: Function;
  toggleUnderline: Function;
  applyIndent: Function;
  applyOutdent: Function;
  applyFontSize: Function;
  status: PositionStatus;
};

export default function Toolbar({
  toggleBold,
  toggleItalic,
  toggleUnderline,
  applyIndent,
  applyOutdent,
  applyFontSize,
  status: { isBold = false, isItalic = false, isUnderline = false, fontSize },
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
      <FontDropdown value={fontSize} onUpdate={applyFontSize} />
    </div>
  );
}
