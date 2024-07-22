import React from "react";
import "./styles.css";
import Image from "next/image";

type Props = {
  onClick: Function;
  alt: string;
  iconUrl: string;
  width: number;
  height: number;
};

export default function ActionButton({
  alt,
  onClick,
  iconUrl,
  width,
  height,
}: Props) {
  return (
    <div className={`toolbar-btn`} onMouseDown={(e) => onClick()}>
      <Image
        alt={alt}
        src={iconUrl}
        width={width}
        height={height}
        className="icon fill-white"
      />
    </div>
  );
}
