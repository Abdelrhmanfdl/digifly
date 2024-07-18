import React from "react";
import "./styles.css";

export default function BackgroundLightSpot({
  className,
}: {
  className: string;
}) {
  return (
    <div className={`${className} absolute rounded-full bg-spot-light`}></div>
  );
}
