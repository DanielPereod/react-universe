import React, { ReactElement } from "react";
import PlanetTexture from "./PlanetTexture";
import "./Sun.scss";

interface Props {
  size: number;
}

export default function Sun({ size }: Props): ReactElement {
  return (
    <div
      style={{
        height: size,
        width: size,
        backgroundColor: "#d2ba1f",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-${size / 2}px,-${size / 2}px)`,
      }}
      className="sun__container"
    >
      <PlanetTexture size={size} color1="#F5F749" color2="#F24236" />
    </div>
  );
}
