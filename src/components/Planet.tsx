import React, { ReactElement, useLayoutEffect, useState } from "react";
import "./Planet.scss";
import PlanetTexture from "./PlanetTexture";

interface Props {
  size: number;
  speed: number;
  radius: number;
  color1?: string;
  color2?: string;
  dimension: "2d" | "3d";
}

export default function Planet({
  size,
  speed,
  radius,
  color1 = "#F5F749",
  color2 = "#F24236",
  dimension,
}: Props): ReactElement {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
    global: 0,
    index: 0,
  });
  const [coords] = useState(generateElipseCoords);

  function generateElipseCoords() {
    const centerX = 0;
    const centerY = -size;
    const points = [];

    for (let degree = 0; degree < 361; degree++) {
      const radians = (degree * Math.PI) / 180;
      const x = centerX + radius * Math.cos(radians);
      const y =
        centerY + (radius * Math.sin(radians)) / (dimension === "3d" ? 4 : 1);
      points.push({ x, y });
    }

    return points;
  }

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => ({
        x: coords[prev.global].x,
        y: coords[prev.global].y + speed,
        global: prev.global === 360 ? 0 : prev.global + 1,
        index: prev.global >= 180 || prev.global < 0 ? 0 : 10,
      }));
    }, speed);
    return () => {
      clearInterval(interval);
    };
  }, [coords, speed]);
  return (
    <div
      className="planet__container"
      style={{
        transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
        transformOrigin: "center",
        transition: "transform 0.1s linear",
        height: size + "px",
        width: size + "px",
        zIndex: pos.index,
        boxShadow: `0px 0px 10px ${color1}65`,
      }}
    >
      <PlanetTexture size={size} color1={color1} color2={color2} />
    </div>
  );
}
