import React from "react";
import "./grid.css";

type Props = {
  children: JSX.Element[];
};

const Grid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid">
      {children.map((el) => (
        <div className="grid_item">{el}</div>
      ))}
    </div>
  );
};

export default Grid;
