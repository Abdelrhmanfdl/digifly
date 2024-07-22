import React from "react";
import "./styles.css";
import Image from "next/image";

type Props = {
  isActive: boolean;
  onClick: Function;
  icon: string;
  width: number;
  height: number;
  alt: string;
};

export default function ToggleButton({
  onClick,
  icon,
  width,
  height,
  isActive,
  alt,
}: Props) {
  return (
    <div
      className={`group toolbar-btn ${isActive ? "active" : ""}`}
      onMouseDown={(e) => onClick()}
    >
      <Image
        alt={alt}
        src={icon}
        width={width}
        height={height}
        className="icon fill-white group-hover:invert"
      />
    </div>
  );
}
