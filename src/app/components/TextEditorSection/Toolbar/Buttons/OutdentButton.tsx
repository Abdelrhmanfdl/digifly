import React from "react";
import "./styles.css";
import Image from "next/image";

export default function OutdentButton({ onClick }: { onClick: Function }) {
  return (
    <div className={`toolbar-btn`} onMouseDown={(e) => onClick()}>
      <Image
        alt="Outdent"
        src="/images/icons/outdent.svg"
        width={24}
        height={24}
        className="icon fill-white"
      />
    </div>
  );
}
