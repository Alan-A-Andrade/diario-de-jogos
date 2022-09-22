import styled from "styled-components";

export interface ThumbnailStyledProps {
  isFocus: boolean;
}

const ThumbnailStyled = styled.section<ThumbnailStyledProps>`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  aspect-ratio: 1/1;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const ThumbnailPictureStyled = styled.img<ThumbnailStyledProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${(props) => (props.isFocus ? `grayscale(0)` : `grayscale(1)`)};
  transition: 0.3s;
  transition-timing-function: ease-in-out;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const ThumbnailDropStyled = styled.div<ThumbnailStyledProps>`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.4s;
  bottom: ${(props) => (props.isFocus ? `0em` : `-0.5em`)};
  right: ${(props) => (props.isFocus ? `0em` : `-0.5em`)};
  opacity: 0.9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    transition-timing-function: ease-in-out;
    position: absolute;
    filter: ${(props) => (props.isFocus ? `blur(0em)` : `blur(0.1em)`)};
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #c21f50;
    mix-blend-mode: color;
  }
`;

const ThumbNailTitleStyled = styled.div<ThumbnailStyledProps>`
  display: flex;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  position: absolute;

  h1:first-of-type {
    width: 100%;
    position: absolute;
    font-weight: bolder;
    bottom: 0.5em;
    left: -0.1em;
    font-size: clamp(0.2rem, 3.5vw, 2rem);
    z-index: 10;
    transition: 0.2s;
    opacity: ${(props) => (props.isFocus ? `1` : `0`)};
    transition-timing-function: ease-in-out;
    text-align: center;
    text-shadow: ${(props) => (props.isFocus ? `2px 2px #c21f50bf` : `none`)};
  }

  h1:last-of-type {
    width: 100%;
    position: absolute;
    bottom: 0.75em;
    left: -0.1em;
    color: #c21f50bf;
    text-align: center;
    opacity: 0.75;
    font-size: clamp(0.2rem, 3.5vw, 2rem);
    z-index: 5;
    transition: 0.4s;
    transform: ${(props) => (props.isFocus ? `scaleX(1)` : `scaleX(0)`)};
    transition-timing-function: ease-in-out;
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

export {
  ThumbnailStyled,
  ThumbNailTitleStyled,
  ThumbnailDropStyled,
  ThumbnailPictureStyled,
};
