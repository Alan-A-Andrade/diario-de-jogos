import styled from "styled-components";

const GameDetailsStyled = styled.div`
  display: flex;
  background-color: #1c202b;
  transition: 0.4s;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const GameDetailsPicture = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

const GameDetailsConsoleIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
  gap: 1em;
  width: 100%;
  height: 4vw;
  padding: 0.5em;
  h1 {
    font-weight: bolder;
    font-size: 2vw;
  }
  img {
    width: 4vw;
  }

  @media (max-width: 980px) {
    height: 6vw;
    h1 {
      font-size: 3vw;
    }
    img {
      width: 6vw;
    }
  }

  @media (max-width: 600px) {
    height: 12vw;

    h1 {
      font-size: 6vw;
    }
    img {
      width: 12vw;
    }
  }
`;

const GameDetailsTitleStyled = styled.div`
  padding: 0.2em;
  width: 100%;
  position: absolute;
  transition: 0.2s;
  transition-timing-function: ease-in-out;
  display: flex;
  flex-wrap: wrap;
  mix-blend-mode: initial;

  h1 {
    position: absolute;
    font-weight: bolder;
    top: 0.4em;
    font-size: 4vw;
    z-index: 10;
    transition: 0.2s;
    transition-timing-function: ease-in-out;
    text-align: left;
  }

  h1:first-of-type {
    text-shadow: 2px 2px #c21f50bf;
  }

  h1:last-of-type {
    position: absolute;
    color: #c21f50;
    text-align: left;
    font-size: 4vw;
    top: 0.1em;
    z-index: 5;
    transition: 0.4s;
    transition-timing-function: ease-in-out;
  }

  @media (max-width: 980px) {
    h1:first-of-type {
      font-size: 3vw;
    }

    h1:last-of-type {
      font-size: 3vw;
    }
  }

  @media (max-width: 600px) {
    h1:first-of-type {
      font-size: 6vw;
    }

    h1:last-of-type {
      font-size: 6vw;
    }
  }
`;

const GameDetailsText = styled.p`
  padding: 0em 0.5em;
  margin: 0em 0.5em;
  text-align: justify;
  font-size: clamp(1em, 1.25em, 1.5em);
  border-left: 0.2em solid #c21f50bf;

  @media (max-width: 980px) {
    font-size: 1em;
  }

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export {
  GameDetailsTitleStyled,
  GameDetailsStyled,
  GameDetailsPicture,
  GameDetailsConsoleIcon,
  GameDetailsText,
};
