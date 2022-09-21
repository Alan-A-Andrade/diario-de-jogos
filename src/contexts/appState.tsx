import * as React from "react";

import { ThumbnailProps } from "../features/frontpage/components/thumbnail/thumbnail";

export interface GridState {
  [k: string]: ThumbnailProps;
}
export type AppContextType = {
  gridState: GridState;
  loadGrid: (data: any[]) => void;
  handleFocusItem: (gameId: number) => void;
};

type game = Omit<ThumbnailProps, "position" | "isFocus">;

export const AppContext = React.createContext<AppContextType | null>(null);

interface ContextProviderProps {
  children?: JSX.Element | JSX.Element[];
}

const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => {
  const [gridState, setGridState] = React.useState<GridState>({});
  const [itemFocus, setItemFocus] = React.useState<number | null>(null);

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
  return (
    <AppContext.Provider value={{ gridState, loadGrid, handleFocusItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
