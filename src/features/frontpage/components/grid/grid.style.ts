import styled from "styled-components";

export interface GridStyledProps {
  isModalOpen: boolean;
}

const GridStyled = styled.div<GridStyledProps>`
  width: ${(props) => (props.isModalOpen ? `50%` : `100%`)};
  height: 100%;
  padding: 6em 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  transition: width 0.5s;

  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.isModalOpen ? `35%` : `100%`)};
    gap: 2em;
    padding: 6em 1em;
  }
`;

const GridButtonStyled = styled.h1<{ isFocused: boolean }>`
  text-align: center;
  position: absolute;
  padding: 0em 0.2em;
  margin: 0.1em;
  z-index: 10;
  font-weight: "bolder";
  font-size: clamp(0.2rem, 3.5vw, 2rem);
  transition: "0.2s";
  text-shadow: 2px 2px #c21f50bf;
  font-size: 3.5vw;
  opacity: ${(props) => (props.isFocused ? `100%` : `0%`)};
  pointer-events: ${(props) => (props.isFocused ? "initial" : `none`)};
  cursor: default;
  background-color: #0d1014b3;

  @media only screen and (max-width: 980px) {
    font-size: 10vw;
  }
`;

const GridItemStyled = styled.div`
  display: flex;
  position: relative;
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
  justify-content: space-between;

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
    margin: 0 0.4em 0 0.4em;
  }

  div {
    width: 80%;
    height: 0.2em;
    background-color: white;
    opacity: 0.2;
    position: relative;
  }

  @media only screen and (max-width: 980px) {
    h1 {
      font-size: 6vw;
    }
  }
`;

export { GridItemStyled, GridStyled, GridDiv, GridButtonStyled };
