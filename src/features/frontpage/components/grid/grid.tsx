import React from "react";
import useAppState from "../../../../hooks/useContext";
import { GridItemStyled, GridStyled, GridDiv } from "./grid.style";

type Props = {
  children: JSX.Element[];
};

const Grid: React.FC<Props> = ({ children }) => {
  const { handleFocusItem, isModalOpen, handleModal, itemFocus } =
    useAppState();

  const opacity = itemFocus === null ? 1 : 0;

  return (
    <GridStyled isModalOpen={isModalOpen}>
      {children.map((el, idx) => {
        return (
          <>
            {idx % 5 === 0 && (
              <GridDiv>
                <h1>2021</h1>
                <div />
              </GridDiv>
            )}
            <GridItemStyled>
              <h1
                onClick={handleModal}
                style={{
                  textAlign: "center",
                  position: "fixed",
                  zIndex: 10,
                  fontWeight: "bolder",
                  transition: "0.2s",
                  textShadow: `2px 2px #c21f50bf`,
                  fontSize: "3.5vw",
                  opacity: itemFocus === idx ? 1 : 0,
                }}
              >
                +
              </h1>

              <div onClick={() => handleFocusItem(idx)} key={el.key}>
                {el}
              </div>
            </GridItemStyled>
          </>
        );
      })}
    </GridStyled>
  );
};

export default Grid;
