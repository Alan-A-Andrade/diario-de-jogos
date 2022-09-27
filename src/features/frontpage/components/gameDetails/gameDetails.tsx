import React, { useEffect, useState } from "react";
import useAppState from "../../../../hooks/useContext";
import {
  GameDetailsConsoleIcon,
  GameDetailsStyled,
  GameDetailsTitleStyled,
  GameDetailsPicture,
  GameDetailsText,
} from "./gameDetails.style";
import ConsoleIcon from "../../../consoleIcon/ConsoleIcon";

export type GameDetailsProps = {
  gameId: number;
};
const GameDetails: React.FC<GameDetailsProps> = () => {
  const { itemFocus, gridState } = useAppState();
  const [lastItem, setLastItem] = useState<number | null>(null);

  useEffect(() => {
    if (itemFocus === null && lastItem === null) {
      setLastItem(null);
      return;
    }
    if (itemFocus === null && lastItem !== null) {
      return;
    }
    setLastItem(itemFocus);
  }, [itemFocus]);

  if (lastItem === null)
    return <GameDetailsStyled>Selecione um jogo</GameDetailsStyled>;

  const { title, thumbnailpicture, text, date, console, datePlayed } =
    gridState[lastItem];

  const highlight = (text: string) => {
    const number = text.length;
    const titleArray = title.split("");

    const highligh = [];
    for (let index = 0; index < number; index++) {
      if (titleArray[index] === " ") {
        highligh.push(" ");
      } else {
        highligh.push(`▄`);
      }
    }

    return highligh.join("");
  };

  return (
    <GameDetailsStyled>
      <GameDetailsPicture>
        <img src={thumbnailpicture} alt={`${title}'s picture`} />
      </GameDetailsPicture>
      <GameDetailsTitleStyled>
        <h1>{title}</h1>
        <h1>{highlight(title)}</h1>
      </GameDetailsTitleStyled>
      <GameDetailsConsoleIcon>
        <ConsoleIcon console={console} />
        <h1>{console}</h1>
        <h1>|</h1>
        <h1>{date.toString().split("-")[0]}</h1>
      </GameDetailsConsoleIcon>
      <GameDetailsText>{text}</GameDetailsText>
    </GameDetailsStyled>
  );
};
export default GameDetails;
