import React, { useEffect, useState } from "react";
import GameDetails from "./components/gameDetails/gameDetails";
import useAppState from "../../hooks/useContext";
import Grid from "./components/grid/grid";
import { FrontPageStyled, FPModal } from "./frontpage.style";
import * as api from "../../api/api";
import { game } from "../../contexts/appState";

const FrontPage: React.FC = () => {
  const { loadGrid, gridState, handleModal, isModalOpen, loadData, dataArray } =
    useAppState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { games, error } = await api.fetch();

    if (error) {
      console.log(error);
      return;
    }

    if (games === null) {
      console.log(error);
      return;
    }

    console.log(games);

    const array: game[] = games.map((el) => {
      return { ...el };
    });

    loadGrid(array);
    loadData(array);
    return;
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <FrontPageStyled>
        <h1>Carregando</h1>
      </FrontPageStyled>
    );
  }

  return (
    <>
      <FrontPageStyled>
        <Grid items={dataArray} />
        <FPModal isOpen={isModalOpen}>
          <GameDetails gameId={0} />
        </FPModal>
      </FrontPageStyled>
    </>
  );
};

export default FrontPage;
