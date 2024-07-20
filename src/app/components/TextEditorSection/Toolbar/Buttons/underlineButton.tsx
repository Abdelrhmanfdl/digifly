import React from "react";
import "./styles.css";
import Image from "next/image";
import { actionButtonProps } from "./types";

export default function UnderlineButton({
  isActive,
  onClick,
}: actionButtonProps) {
  return (
    <div
      className={`toolbar-btn ${isActive ? "active" : ""}`}
      onMouseDown={(e) => onClick()}
    >
      <Image
        alt="Underline"
        src="/images/icons/underline.svg"
        width={24}
        height={24}
        className="icon fill-white"
      />
    </div>
  );
}
