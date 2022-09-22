import React from "react";
import useAppState from "../../../../hooks/useContext";
import "./gameDetails.css";

export type GameDetailsProps = {
  gameId: number;
};
const GameDetails: React.FC<GameDetailsProps> = () => {
  const { itemFocus, gridState } = useAppState();

  if (itemFocus !== null) {
    return (
      <div className="gameDetails">
        <h1>{gridState[itemFocus].title}</h1>
      </div>
    );
  }

  return (
    <div className="gameDetails">
      <h1>Selecione um jogo</h1>
    </div>
  );
};
export default GameDetails;
