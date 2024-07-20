import React from "react";
import "./styles.css";
import Image from "next/image";

export default function IndentButton({ onClick }: { onClick: Function }) {
  return (
    <div className={`toolbar-btn`} onMouseDown={(e) => onClick()}>
      <Image
        alt="Indent"
        src="/images/icons/indent.svg"
        width={24}
        height={24}
        className="icon fill-white"
      />
    </div>
  );
}
