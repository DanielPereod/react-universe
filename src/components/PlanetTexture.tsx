import React, { ReactElement } from "react";

interface Props {
  color1: string;
  color2: string;
  size: number;
}

export default function PlanetTexture({
  color1,
  color2,
  size,
}: Props): ReactElement {
  const arr = [
    { v1: 0.55, v2: 0.35 },
    { v1: 0.7, v2: 0.45 },
    { v1: 0.6, v2: 0.3 },
    { v1: 0.5, v2: 0.35 },
    { v1: 0.6, v2: 0.45 },
    { v1: 0.5, v2: 0.35 },
    { v1: 0.7, v2: 0.45 },
    { v1: 0.6, v2: 0.3 },
    { v1: 0.55, v2: 0.35 },
    { v1: 0.6, v2: 0.45 },
    { v1: 0.6, v2: 0.45 },
  ];

  return (
    <div
      className="sun__texture"
      style={{
        backgroundColor: color1,
        height: size,
        width: size,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-${size / 2}px,-${size / 2}px)`,
        overflow: "hidden",
        borderRadius: "100%",
      }}
    >
      {Object.values(arr).map(({ v1, v2 }, key) => (
        <div key={key}>
          <div
            className="sun__texture__inner"
            style={{
              width: `${size * v1}px`,
              height: `${size / 22}px`,
              borderRadius: `0 ${size / 2}px ${size / 2}px 0`,
              backgroundColor: color2,
            }}
          ></div>
          <div
            className="sun__texture__inner__invert"
            style={{ display: "flex" }}
          >
            <div
              style={{
                backgroundColor: color2,
                width: `${size * v2}px`,
                height: `${size / 22}px`,
              }}
            ></div>
            <div
              style={{
                backgroundColor: color1,
                height: `${size / 22}px`,
                width: `${size / 22}px`,
                transform: `translateX(-${size / 44}px)`,
                borderRadius: "100%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
