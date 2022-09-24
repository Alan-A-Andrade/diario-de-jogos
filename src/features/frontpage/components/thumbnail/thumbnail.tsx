import React from "react";
import useAppState from "../../../../hooks/useContext";
import {
  ThumbnailStyled,
  ThumbNailTitleStyled,
  ThumbnailDropStyled,
  ThumbnailPictureStyled,
} from "./thumbnail.style";

export type ThumbnailProps = {
  title: string;
  imageURL: string;
  position: number;
  isFocus: boolean;
};
const Thumbnail: React.FC<ThumbnailProps> = ({
  isFocus,
  title,
  imageURL,
  position,
}) => {
  const { isModalOpen } = useAppState();
  const highlight = (text: string) => {
    const number = text.length;
    const titleArray = title.split("");

    const highligh = [];
    for (let index = 0; index < number; index++) {
      if (titleArray[index] === " ") {
        highligh.push(` `);
      } else {
        highligh.push(`▄`);
      }
    }

    return highligh.join("");
  };

  return (
    <ThumbnailStyled isFocus={isFocus}>
      <ThumbnailDropStyled aria-hidden="true" isFocus={isFocus}>
        <img src={imageURL} alt={"shadow"} />
        <div></div>
      </ThumbnailDropStyled>
      <ThumbNailTitleStyled isModalOpen={isModalOpen} isFocus={isFocus}>
        <h1>{title}</h1>
        <h1 aria-hidden="true">{highlight(title)}</h1>
      </ThumbNailTitleStyled>
      <ThumbnailPictureStyled
        isFocus={isFocus}
        src={imageURL}
        alt={`${title}'s picture`}
      />
    </ThumbnailStyled>
  );
};
export default Thumbnail;
