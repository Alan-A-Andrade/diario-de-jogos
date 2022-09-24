import React, { useState, createContext } from "react";
import { consoles } from "../features/consoleIcon/ConsoleIcon";

import { ThumbnailProps } from "../features/frontpage/components/thumbnail/thumbnail";

export interface game {
  id: number;
  text: string;
  title: string;
  thumbnailpicture: string;
  date: Date;
  console: consoles;
  datePlayed: Date;
}

export interface GridState {
  [k: string]: GridStateItem;
}

export interface GridStateItem extends game {
  isFocus: boolean;
  position: number;
}

export type AppContextType = {
  gridState: GridState;
  loadGrid: (data: any[]) => void;
  handleFocusItem: (gameId: number) => void;
  handOutFocus: () => void;
  isModalOpen: boolean;
  handleModal: () => void;
  itemFocus: number | null;
  dataArray: game[];
  loadData: (data: any[]) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

interface ContextProviderProps {
  children?: JSX.Element | JSX.Element[];
}

const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => {
  const [gridState, setGridState] = useState<GridState>({});
  const [itemFocus, setItemFocus] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataArray, setDataArray] = useState<game[]>([]);

  const loadGrid = (data: any[]) => {
    const newState = data.reduce((acc: GridState, game: game) => {
      const { id, text, title, thumbnailpicture, date, console, datePlayed } =
        game;

      return {
        ...acc,
        [id]: {
          ...acc[id],
          date,
          title,
          text,
          thumbnailpicture,
          position: id,
          isFocus: false,
          console,
          datePlayed,
        },
      };
    }, {});

    setGridState(newState);
  };

  const loadData = (data: any) => {
    setDataArray(data);
  };

  const handOutFocus = () => {
    if (itemFocus) {
      setGridState({
        ...gridState,
        [itemFocus]: { ...gridState[itemFocus], isFocus: false },
      });
      setItemFocus(null);
      return;
    }
  };

  const handleFocusItem = (gameId: number) => {
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

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AppContext.Provider
      value={{
        gridState,
        loadGrid,
        handleFocusItem,
        handOutFocus,
        isModalOpen,
        handleModal,
        itemFocus,
        dataArray,
        loadData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
