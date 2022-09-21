import { useContext } from "react";
import { AppContext, AppContextType } from "../contexts/appState";

const useAppState = () => {
  return useContext(AppContext) as AppContextType;
};

export default useAppState;
