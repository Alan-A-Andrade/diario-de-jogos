import styled from "styled-components";

const GridStyled = styled.div<GridStyledProps>`
  width: ${(props) => (props.isModalOpen ? `50%` : `100%`)};
  height: 100%;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  transition: width 0.5s;

  @media only screen and (max-width: 600px) {
    gap: 2em;
    padding: 1em;
  }
`;

export interface GridStyledProps {
  isModalOpen: boolean;
}

const GridItemStyled = styled.div`
  width: calc(clamp(10vw, 15vw, 30vw));

  @media only screen and (max-width: 980px) {
    width: 35vw;
  }

  @media only screen and (max-width: 600px) {
    width: 95vw;
  }
`;

const GridDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 2.5vw;

  h1 {
    font-weight: normal;
    bottom: 0.5em;
    left: -0.1em;
    font-size: clamp(0.2rem, 3.5vw, 2rem);
    z-index: 10;
    transition: 0.2s;
    transition-timing-function: ease-in-out;
    text-align: center;
    text-shadow: 2px 2px #c21f50bf;
  }

  div {
    width: 100%;
    height: 0.2em;
    background-color: white;
    opacity: 0.2;
  }
`;

export { GridItemStyled, GridStyled, GridDiv };
