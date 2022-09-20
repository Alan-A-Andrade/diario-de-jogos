import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  ReactElement,
} from "react";
import Thumbnail, { ThumbnailProps } from "./components/thumbnail/thumbnail";
import GameDetails, {
  GameDetailsProps,
} from "./components/gameDetails/gameDetails";
import "./frontpage.css";

import { testArray } from "../../mockData";
import Grid from "./components/grid/grid";

export type game = Omit<ThumbnailProps, "position" | "isFocus">;

const FrontPage: React.FC = () => {
  interface GameThumbnail {
    [key: string]: ThumbnailProps;
  }
  const [data, setData] = useState<any[]>([]);
  const [gridState, setGridState] = useState<GameThumbnail>({});
  const [itemFocus, setItemFocus] = useState<number | null>(null);

  useEffect(() => {
    setData(testArray);
  }, []);

  console.log(window.innerWidth);

  useEffect(() => {
    const newState = data.reduce((acc: GameThumbnail, game: game, idx) => {
      const { title, imageURL } = game;
      return {
        ...acc,
        [idx]: { ...acc[idx], title, imageURL, position: idx, isFocus: false },
      };
    }, {});

    setGridState(newState);
  }, [data]);

  const generateItems = (array: game[]): JSX.Element[] => {
    if (!gridState[0]) return [<div key={0}></div>];

    return array.map((game, idx) => {
      const { title, imageURL } = game;
      return (
        <div onClick={() => handleModal(idx)}>
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

  const memoItems = useMemo(() => generateItems(data), [gridState]);

  const handleModal = (gameId: number) => {
    if (itemFocus === null) {
      setGridState({
        ...gridState,
        [gameId]: { ...gridState[gameId], isFocus: true },
      });
      setItemFocus(gameId);
      return;
    }

    if (gameId === itemFocus) {
      setGridState({
        ...gridState,
        [itemFocus]: { ...gridState[itemFocus], isFocus: false },
      });
      setItemFocus(null);
      return;
    }
    if (gameId !== itemFocus) {
      setGridState({
        ...gridState,
        [gameId]: { ...gridState[gameId], isFocus: true },
        [itemFocus]: { ...gridState[itemFocus], isFocus: false },
      });
      setItemFocus(gameId);
      return;
    }
  };

  return <Grid>{memoItems}</Grid>;
};

export default FrontPage;
