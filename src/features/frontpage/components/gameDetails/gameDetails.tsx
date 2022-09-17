import React from "react";
import "./gameDetails.css";

export type GameDetailsProps = {
  gameId: number;
};
const GameDetails: React.FC<GameDetailsProps> = ({ gameId }) => {
  return (
    <div className="gameDetails">
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab error in
        fugit, pariatur neque quibusdam architecto expedita voluptate blanditiis
        praesentium vitae. Sunt, tenetur. Sapiente, illo?
      </h1>
    </div>
  );
};
export default GameDetails;
