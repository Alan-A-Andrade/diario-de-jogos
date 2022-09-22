import React, { useState, createContext } from "react";

import { ThumbnailProps } from "../features/frontpage/components/thumbnail/thumbnail";

export interface GridState {
  [k: string]: ThumbnailProps;
}
export type AppContextType = {
  gridState: GridState;
  loadGrid: (data: any[]) => void;
  handleFocusItem: (gameId: number) => void;
  handOutFocus: () => void;
  isModalOpen: boolean;
  handleModal: () => void;
  itemFocus: number | null;
};

type game = Omit<ThumbnailProps, "position" | "isFocus">;

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

  const loadGrid = (data: any[]) => {
    const newState = data.reduce((acc: GridState, game: game, idx) => {
      const { title, imageURL } = game;
      return {
        ...acc,
        [idx]: { ...acc[idx], title, imageURL, position: idx, isFocus: false },
      };
    }, {});

    setGridState(newState);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
