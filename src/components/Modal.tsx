import React, { ReactElement } from "react";
import PlanetTexture from "./PlanetTexture";
import "./Modal.scss";

interface PlanetProps {
  speed: number;
  radius: number;
  size: number;
  color1: string;
  color2: string;
}

interface Props {
  newPlanet: PlanetProps;
  setNewPlanet: React.Dispatch<React.SetStateAction<PlanetProps>>;
  setPlanets: React.Dispatch<React.SetStateAction<PlanetProps[]>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({
  newPlanet,
  setNewPlanet,
  setModal,
  setPlanets,
}: Props): ReactElement {
  return (
    <div className="modal__create-planet-modal">
      <div>
        <div className="modal__new-planet">
          <PlanetTexture
            size={newPlanet.size}
            color1={newPlanet.color1}
            color2={newPlanet.color2}
          />
        </div>
        <div className="modal__new-planet__inputs">
          <div className="modal__range">
            <span>
              Size <span>{newPlanet.size}</span>
            </span>
            <input
              type="range"
              min={10}
              max={100}
              onChange={(e) =>
                setNewPlanet((prev) => ({
                  ...prev,
                  size: parseInt(e.target.value),
                }))
              }
              value={newPlanet.size}
            />
          </div>
          <div className="modal__range">
            <span>
              Radius size <span>{newPlanet.radius}</span>
            </span>
            <input
              type="range"
              min={200}
              max={800}
              onChange={(e) =>
                setNewPlanet((prev) => ({
                  ...prev,
                  radius: parseInt(e.target.value),
                }))
              }
              value={newPlanet.radius}
            />
          </div>
          <div className="modal__range">
            <span>
              Speed <span>{newPlanet.speed}</span>
            </span>
            <input
              type="range"
              min={1}
              max={10}
              onChange={(e) =>
                setNewPlanet((prev) => ({
                  ...prev,
                  speed: parseInt(e.target.value),
                }))
              }
              value={newPlanet.speed}
            />
          </div>
          <div className="modal__colors">
            <input
              type="color"
              value={newPlanet.color2}
              onChange={(e) =>
                setNewPlanet((prev) => ({
                  ...prev,
                  color2: e.target.value,
                }))
              }
            />

            <input
              type="color"
              value={newPlanet.color1}
              onChange={(e) =>
                setNewPlanet((prev) => ({
                  ...prev,
                  color1: e.target.value,
                }))
              }
            />
          </div>
          <button
            onClick={() => {
              setPlanets((prev) => [...prev, newPlanet]);
              setModal(false);
            }}
          >
            🚀
          </button>
        </div>
      </div>
    </div>
  );
}
