import React, { ReactElement, useLayoutEffect, useState } from "react";
import Modal from "./components/Modal";
import Planet from "./components/Planet";
import Sun from "./components/Sun";
import "./Universe.scss";

export default function Universe(): ReactElement {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newPlanet, setNewPlanet] = useState({
    speed: 10,
    radius: 200,
    size: 60,
    color1: "#ae4c4c",
    color2: "#f38549",
  });
  const [planets, setPlanets] = useState([
    { speed: 10, radius: 200, size: 40, color1: "pink", color2: "red" },
    { speed: 12, radius: 200, size: 40, color1: "pink", color2: "red" },
  ]);
  const [dimension, setDimension] = useState<"2d" | "3d">("2d");
  const starSize = 200;

  const changeDimension = () => {
    setLoading(() => true);
    setDimension((prev) => (prev === "2d" ? "3d" : "2d"));
  };

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(() => false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-04"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="hud">
        <button
          className="universe__dimension-btn"
          onClick={() => setModal((prev) => !prev)}
        >
          🪐
        </button>
        <button className="universe__dimension-btn" onClick={changeDimension}>
          {dimension}
        </button>

        {modal && (
          <Modal
            newPlanet={newPlanet}
            setModal={setModal}
            setNewPlanet={setNewPlanet}
            setPlanets={setPlanets}
          />
        )}
      </div>

      <Sun size={starSize} />
      {planets.map(({ speed, radius, size, color1, color2 }) => (
        <Planet
          speed={speed}
          radius={radius}
          size={size}
          color1={color1}
          color2={color2}
          dimension={dimension}
        />
      ))}
      {/*  <Planet speed={10} radius={200} size={size} dimension={dimension} />

      <Planet speed={20} radius={250} size={40} dimension={dimension} />

      <Planet
        speed={15}
        radius={150}
        size={10}
        color1="pink"
        color2="red"
        dimension={dimension}
      />

      <Planet
        speed={12}
        radius={150}
        size={10}
        color1="orange"
        color2="brown"
        dimension={dimension}
      />
      <Planet
        speed={35}
        radius={220}
        size={20}
        color1="white"
        color2="blue"
        dimension={dimension}
      />
      <Planet
        speed={5}
        radius={150}
        size={30}
        color1="brown"
        color2="white"
        dimension={dimension}
      />
      <Planet
        speed={45}
        radius={350}
        size={40}
        color1="blue"
        color2="orange"
        dimension={dimension}
      />
      <Planet
        speed={25}
        radius={450}
        size={50}
        color1="yellow"
        color2="orange"
        dimension={dimension}
      /> */}
    </div>
  );
}
