import React from "react";
import "./styles.css";
import Image from "next/image";
import { actionButtonProps } from "./types";

export default function ItalicButton({ isActive, onClick }: actionButtonProps) {
  return (
    <div
      className={`toolbar-btn ${isActive ? "active" : ""}`}
      onMouseDown={(e) => onClick()}
    >
      <Image
        alt="Bold"
        src="/images/icons/italic.svg"
        width={24}
        height={24}
        className="icon fill-white"
      />
    </div>
  );
}
