import styled from "styled-components";

const FrontPageStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface Props {
  isOpen: boolean;
}

const FPModal = styled.div<Props>`
  width: 45vw;
  height: 100%;
  position: fixed;
  top: 64px;
  right: ${(props) => (props.isOpen ? 0 : `-100vw`)};
  transition: 0.5s;

  @media only screen and (max-width: 600px) {
    width: 65vw;
  }
`;

const Search = styled.div`
  *:focus {
    outline: none;
  }

  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 64px;
  background-color: #1c202b;

  box-shadow: 0px 5px 10px black;

  transition: 0.2s;
  transition-timing-function: ease-in-out;

  img {
    padding: 1em;
    height: 100%;
  }

  input {
    background-color: white;
    color: white;
    height: 32px;
    border: none;
    font-size: 1.2em;
    background-color: #0d1014;
    padding: 0 0.5em;
    width: 45vw;
    box-shadow: 0px 0px #c21f50;
    transition: 0.2s;
    transition-timing-function: ease-in-out;

    ::placeholder {
      font-weight: bolder;
      color: #c21f50;
    }
    :focus {
      ::placeholder {
        opacity: 0;
      }

      box-shadow: 3px 3px #c21f50;
    }
  }

  @media only screen and (max-width: 980px) {
    padding: 0 0.1em;
    justify-content: center;
    gap: 1em;
    h1 {
      font-size: 2vw;
      width: min-content;
      min-width: 30vw;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 0.1em;
    justify-content: center;
    gap: 1em;
    h1 {
      display: none;
    }
    input {
      width: 70vw;
    }
    img {
      padding: 0em;
      height: 8.5vw;
    }
  }
`;

export { FrontPageStyled, FPModal, Search };
