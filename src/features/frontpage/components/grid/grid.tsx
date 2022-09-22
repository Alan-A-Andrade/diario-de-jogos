import React from "react";
import useAppState from "../../../../hooks/useContext";
import {
  GridItemStyled,
  GridStyled,
  GridDiv,
  GridButtonStyled,
} from "./grid.style";

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
              <GridButtonStyled
                isFocused={idx === itemFocus}
                onClick={handleModal}
              >
                {isModalOpen ? "-" : "+"}
              </GridButtonStyled>

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
