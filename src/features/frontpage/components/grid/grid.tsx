import React, { useMemo, useState, useEffect, Fragment } from "react";
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
  const {
    handleFocusItem,
    isModalOpen,
    handleModal,
    itemFocus,
    gridState,
    searchBarValue,
    setFilteredItems,
    filteredItems,
  } = useAppState();

  const groupByYear = (array: game[]) => {
    const groupedByYear: groupByInterface = array.reduce(
      (acc: groupByInterface, game) => {
        const year = game.datePlayed.toString().split("-")[0];

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

  useEffect(() => {
    const newFilter = items.filter((el) => {
      const input = searchBarValue.toLowerCase();
      const title = el.title.toLowerCase();
      const year = el.datePlayed.toString().split("-")[0].toLowerCase();
      const console = el.console.toLowerCase();

      return (
        title.includes(input) || year.includes(input) || console.includes(input)
      );
    });

    setFilteredItems(newFilter);
  }, [items, searchBarValue]);

  const grouped = useMemo(() => groupByYear(filteredItems), [filteredItems]);

  return (
    <GridStyled isModalOpen={isModalOpen}>
      {Object.keys(grouped)
        .sort((a: string, b: string) => parseInt(b) - parseInt(a))
        .map((year, idx) => {
          return (
            <Fragment key={`frag_${idx}`}>
              <GridDiv key={`year_${year}`}>
                <div />
                <h1>{year}</h1>
                <div />
              </GridDiv>
              {grouped[year]
                .sort(
                  (a, b) =>
                    new Date(b.datePlayed).getTime() -
                    new Date(a.datePlayed).getTime()
                )
                .map((game) => (
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
            </Fragment>
          );
        })}
    </GridStyled>
  );
};

export default Grid;
