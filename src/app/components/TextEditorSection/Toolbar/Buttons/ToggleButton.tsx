import React from "react";
import "./styles.css";
import Image from "next/image";

type Props = {
  isActive: boolean;
  onClick: Function;
  icon: string;
  width: number;
  height: number;
};

export default function ToggleButton({
  onClick,
  icon,
  width,
  height,
  isActive,
}: Props) {
  return (
    <div
      className={`toolbar-btn ${isActive ? "active" : ""}`}
      onMouseDown={(e) => onClick()}
    >
      <Image
        alt="AlightLeft"
        src={icon}
        width={width}
        height={height}
        className="icon fill-white"
      />
    </div>
  );
}
