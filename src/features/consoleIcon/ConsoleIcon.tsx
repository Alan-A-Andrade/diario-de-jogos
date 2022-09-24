import React from "react";
import gamecube from "../../assets/01.svg";
import nes from "../../assets/02.svg";
import snes from "../../assets/03.svg";
import ps2 from "../../assets/04.svg";
import n64 from "../../assets/05.svg";
import xbox from "../../assets/06.svg";
import xbox360 from "../../assets/07.svg";
import ps3 from "../../assets/08.svg";
import wii from "../../assets/09.svg";
import xone from "../../assets/10.svg";
import ps4 from "../../assets/11.svg";
import wiiu from "../../assets/12.svg";
import pc from "../../assets/13.svg";
import ps5 from "../../assets/14.svg";

export type GameInfoProps = {
  console: consoles;
};

export type consoles =
  | "gamecube"
  | "nes"
  | "snes"
  | "ps2"
  | "n64"
  | "xbox"
  | "xbox360"
  | "ps3"
  | "wii"
  | "xone"
  | "ps4"
  | "wiiu"
  | "ps5"
  | "pc";

export type consoleImgType = {
  [k in consoles]: string;
};

export const consoleImg: consoleImgType = {
  gamecube,
  nes,
  snes,
  ps2,
  n64,
  xbox,
  xbox360,
  ps3,
  wii,
  xone,
  ps4,
  wiiu,
  ps5,
  pc,
};

const ConsoleIcon: React.FC<GameInfoProps> = ({ console }) => {
  return <img src={consoleImg[console]} />;
};
export default ConsoleIcon;
