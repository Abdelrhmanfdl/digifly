import React from "react";
import "./styles.css";
import Image from "next/image";

type Props = {
  onClick: Function;
  icon: string;
  width: number;
  height: number;
};

export default function ActionButton({ onClick, icon, width, height }: Props) {
  return (
    <div className={`toolbar-btn`} onMouseDown={(e) => onClick()}>
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
