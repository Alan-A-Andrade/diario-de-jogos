import React, { useEffect, useMemo } from "react";
import Thumbnail, { ThumbnailProps } from "./components/thumbnail/thumbnail";
import "./frontpage.css";

import useAppState from "../../hooks/useContext";

import { testArray } from "../../mockData";
import Grid from "./components/grid/grid";

export type game = Omit<ThumbnailProps, "position" | "isFocus">;

const FrontPage: React.FC = () => {
  const { loadGrid, gridState, handleFocusItem } = useAppState();

  useEffect(() => {
    loadGrid(testArray);
  }, []);

  const generateItems = (array: game[]): JSX.Element[] => {
    if (!gridState[0]) return [<div key={0}></div>];

    return array.map((game, idx) => {
      const { title, imageURL } = game;
      return (
        <div onClick={() => handleFocusItem(idx)}>
          <Thumbnail
            title={title}
            imageURL={imageURL}
            isFocus={gridState[idx].isFocus}
            position={gridState[idx].position}
          />
        </div>
      );
    });
  };

  const memoItems = useMemo(() => generateItems(testArray), [gridState]);

  return <Grid>{memoItems}</Grid>;
};

export default FrontPage;
