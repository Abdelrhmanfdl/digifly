import React from "react";
import "./styles.css";
import Image from "next/image";
import { ACTION_BUTTON } from "./types";

export default function BoldButton({ isActive, onClick }: ACTION_BUTTON) {
  return (
    <div
      className={`toolbar-btn ${isActive ? "active" : ""}`}
      onMouseDown={(e) => onClick()}
    >
      <Image
        alt="Bold"
        src="/images/icons/bold.svg"
        width={12}
        height={12}
        className="icon fill-white"
      />
    </div>
  );
}
