import React, { useEffect, useMemo } from "react";
import Thumbnail, { ThumbnailProps } from "./components/thumbnail/thumbnail";
import GameDetails from "./components/gameDetails/gameDetails";
import useAppState from "../../hooks/useContext";
import { testArray } from "../../mockData";
import Grid from "./components/grid/grid";
import { FrontPageStyled, FPModal } from "./frontpage.style";

export type game = Omit<ThumbnailProps, "position" | "isFocus">;

const FrontPage: React.FC = () => {
  const { loadGrid, gridState, handleModal, isModalOpen } = useAppState();

  useEffect(() => {
    loadGrid(testArray);
  }, []);

  const generateItems = (array: game[]): JSX.Element[] => {
    if (!gridState[0]) return [<div key={0}></div>];

    return array.map((game, idx) => {
      const { title, imageURL } = game;
      return (
        <Thumbnail
          title={title}
          imageURL={imageURL}
          isFocus={gridState[idx].isFocus}
          position={gridState[idx].position}
        />
      );
    });
  };

  const memoItems = useMemo(() => generateItems(testArray), [gridState]);

  return (
    <>
      <FrontPageStyled>
        <Grid>{memoItems}</Grid>
        <FPModal isOpen={isModalOpen}>
          <GameDetails gameId={0} />
        </FPModal>
      </FrontPageStyled>
    </>
  );
};

export default FrontPage;
