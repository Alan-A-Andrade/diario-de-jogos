import React, { useState, useRef, useEffect, useMemo } from "react";
import Thumbnail, { ThumbnailProps } from "./components/thumbnail/thumbnail";
import GameDetails, {
  GameDetailsProps,
} from "./components/gameDetails/gameDetails";
import "./frontpage.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

type game = Omit<ThumbnailProps, "position" | "isFocus">;

const testArray: game[] = [
  {
    title: "Final Fantasy 7 Remake",
    imageURL:
      "https://files.tecnoblog.net/wp-content/uploads/2021/12/final-fantasy-7-remake-2.jpg",
  },
  {
    title: "Control",
    imageURL:
      "https://s2.glbimg.com/Ka8ZcSudrNCCjN57a-365Q6vZpQ=/0x0:896x504/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/u/O/9MpEP2RUiBBmobBBwyfg/control-1.jpg",
  },
  {
    title: "Gravity Rush",
    imageURL:
      "https://stevivor.com/wp-content/uploads/2012/07/gravityrush-1.jpg",
  },
  {
    title: "Ghost of Tsushima",
    imageURL:
      "https://asset.vg247.com/ghost_of_tsushima.jpg/BROK/thumbnail/1200x1200/quality/100/ghost_of_tsushima.jpg",
  },
  {
    title: "Factorio",
    imageURL:
      "https://i1.wp.com/images.gameswfu.net/factorio-anuncia-grande-marco-de-vendas-e-proxima-expansao-625ac90f21fb0.jpeg?w=614",
  },
];

const FrontPage: React.FC = () => {
  const [modalState, setModalState] = useState({
    gameId: 0,
    isModalOpen: false,
  });

  const memoArray = useMemo(() => {
    return testArray.map((game, idx) => {
      return (
        <div key={`game_${idx + 1}`} onClick={() => handleModal(idx + 1)}>
          <Thumbnail
            {...game}
            position={idx}
            isFocus={modalState.gameId === idx + 1 && modalState.isModalOpen}
          />
        </div>
      );
    });
  }, [modalState.gameId]);

  //https://strml.github.io/react-grid-layout/examples/6-dynamic-add-remove.html
  //check link above, trying to change this page to a memo one, try to reacte a "pseudo state store in this component"

  const handleModal = (gameId: number) => {
    if (!modalState.isModalOpen) {
      setModalState({ gameId, isModalOpen: true });
      return;
    } else {
      if (gameId === modalState.gameId || modalState.gameId === 0) {
        setModalState({
          isModalOpen: false,
          gameId: 0,
        });
        return;
      }
      if (gameId !== modalState.gameId && modalState.gameId !== 0) {
        setModalState({ ...modalState, gameId });
        return;
      }
    }
  };

  return (
    <div className="frontpage">
      {/* <div
        className={
          modalState.isModalOpen
            ? "frontpage_modal_open"
            : "frontpage_modal_close"
        }
      >
        <GameDetails gameId={modalState.gameId} />
      </div> */}
      <div
        className={
          modalState.isModalOpen ? "frontpage_list" : "frontpage_list_modal"
        }
      >
        {testArray.map((game, idx) => {
          return (
            <div key={`game_${idx + 1}`} onClick={() => handleModal(idx + 1)}>
              <Thumbnail
                {...game}
                position={idx}
                isFocus={
                  modalState.gameId === idx + 1 && modalState.isModalOpen
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrontPage;
