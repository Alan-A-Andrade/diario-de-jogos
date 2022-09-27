import React, { useEffect, useState } from "react";
import GameDetails from "./components/gameDetails/gameDetails";
import useAppState from "../../hooks/useContext";
import Grid from "./components/grid/grid";
import { FrontPageStyled, FPModal, Search } from "./frontpage.style";
import * as api from "../../api/api";
import { game } from "../../contexts/appState";
import logo from "../../assets/LogoEn_1SVG.svg";
import Footer from "../footer/Footer";

const FrontPage: React.FC = () => {
  const {
    loadGrid,
    gridState,
    handleModal,
    isModalOpen,
    loadData,
    dataArray,
    searchBarValue,
    setSearchBarValue,
  } = useAppState();
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
        <Search>
          <img src={logo} alt="Logo"></img>
          <input
            placeholder="Search"
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
          ></input>
          <h1>Meu curtos pensamentos sobre jogos</h1>
        </Search>
        <Grid items={dataArray} />
        <FPModal isOpen={isModalOpen}>
          <GameDetails gameId={0} />
        </FPModal>
        <Footer></Footer>
      </FrontPageStyled>
    </>
  );
};

export default FrontPage;
