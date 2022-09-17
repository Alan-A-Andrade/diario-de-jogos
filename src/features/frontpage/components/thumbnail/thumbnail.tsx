import React from "react";
import "./thumbnail.css";

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
  const highlight = (text: string) => {
    const number = text.length;
    const titleArray = title.split("");

    const highligh = [];
    for (let index = 0; index < number; index++) {
      if (titleArray[index] === " ") {
        highligh.push(` `);
      } else {
        highligh.push(`▃`);
      }
    }

    return highligh.join("");
  };

  const isEven = (number: number) => {
    return number % 2 === 0;
  };

  if (isFocus) {
    return (
      <div className="focus_thumbnail">
        <div className={`focus_thumbnail_drop`}>
          <img
            className={`focus_thumbnail_shadow`}
            src={imageURL}
            alt={"shadow"}
          />
          <div className={`focus_thumbnail_color_${isEven(position)}`}></div>
        </div>
        <div className="focus_thumbnail_title">
          <h1 className="focus_thumbnail_h1">{title}</h1>
          <h1 className="focus_thumbnail_highlight">{highlight(title)}</h1>
        </div>
        <img
          className="focus_thumbnail_picture"
          src={imageURL}
          alt={`${title}'s picture`}
        />
      </div>
    );
  }

  return (
    <div className="thumbnail">
      <div className={`thumbnail_drop`}>
        <img className={`thumbnail_shadow`} src={imageURL} alt={"shadow"} />
        <div className={`thumbnail_color_${isEven(position)}`}></div>
      </div>
      <div className="thumbnail_title">
        <h1 className="thumbnail_h1">{title}</h1>
        <h1 className="thumbnail_highlight">{highlight(title)}</h1>
      </div>
      <img
        className="thumbnail_picture"
        src={imageURL}
        alt={`${title}'s picture`}
      />
    </div>
  );
};
export default Thumbnail;
