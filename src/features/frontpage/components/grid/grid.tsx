import React from "react";
import { game } from "../../../../contexts/appState";
import useAppState from "../../../../hooks/useContext";
import Thumbnail from "../thumbnail/thumbnail";

import {
  GridItemStyled,
  GridStyled,
  GridDiv,
  GridButtonStyled,
} from "./grid.style";

type Props = {
  items: game[];
};

interface groupByInterface {
  [group: string]: game[];
}

const Grid: React.FC<Props> = ({ items }) => {
  const { handleFocusItem, isModalOpen, handleModal, itemFocus, gridState } =
    useAppState();

  const groupByYear = (array: game[]) => {
    const groupedByYear: groupByInterface = array.reduce(
      (acc: groupByInterface, game) => {
        const year = game.date.toString().split("-")[0];

        if (!acc[year]) {
          acc[year] = [game];
        } else {
          acc[year].push(game);
        }

        return acc;
      },
      {}
    );

    return groupedByYear;
  };

  const grouped = groupByYear(items);

  return (
    <GridStyled isModalOpen={isModalOpen}>
      {Object.keys(grouped)
        .sort((a: string, b: string) => parseInt(b) - parseInt(a))
        .map((year) => {
          return (
            <>
              <GridDiv>
                <div />
                <h1>{year}</h1>
                <div />
              </GridDiv>
              {grouped[year].map((game) => (
                <GridItemStyled key={`${game.id}_game`}>
                  <GridButtonStyled
                    isFocused={game.id === itemFocus}
                    onClick={handleModal}
                  >
                    {isModalOpen ? "-" : "+"}
                  </GridButtonStyled>
                  <div onClick={() => handleFocusItem(game.id)}>
                    <Thumbnail
                      title={game.title}
                      imageURL={game.thumbnailpicture}
                      isFocus={gridState[game.id].isFocus}
                      position={gridState[game.id].position}
                    />
                  </div>
                </GridItemStyled>
              ))}
            </>
          );
        })}
      {/* {items.map((el) => {
        return (
          <GridItemStyled key={`${el.id}_game`}>
            <GridButtonStyled
              isFocused={el.id === itemFocus}
              onClick={handleModal}
            >
              {isModalOpen ? "-" : "+"}
            </GridButtonStyled>
            <div onClick={() => handleFocusItem(el.id)}>
              <Thumbnail
                title={el.title}
                imageURL={el.thumbnailpicture}
                isFocus={gridState[el.id].isFocus}
                position={gridState[el.id].position}
              />
            </div>
          </GridItemStyled>
        );
      })} */}
    </GridStyled>
  );
};

/* {idx % 5 === 0 && (
              <GridDiv>
                <div />
                <h1>2021</h1>
                <div />
              </GridDiv>
            )} */

export default Grid;
