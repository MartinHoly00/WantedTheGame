import Typewriter from "typewriter-effect";
import { useState } from "react";
import { OnWayHomeByWalkAfterWorkChoices } from "../enums";

type OnWayHomeByWalkAfterWorkProps = {
  setOpenOnWayHomeByWalkAfterWork: (
    openOnWayHomeByWalkAfterWork: boolean
  ) => void;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  setOnWayHomeByWalkAfterWorkAnswer: (
    onWayHomeByWalkAfterWorkAnswer: OnWayHomeByWalkAfterWorkChoices
  ) => void;
  setOpenTalkToWomanOnWayHomeByWalkAfterWork: (
    openTalkToWomanOnWayHomeByWalkAfterWork: boolean
  ) => void;
};

export const OnWayHomeByWalkAfterWork = ({
  setOpenOnWayHomeByWalkAfterWork,
  setOpenHomeAtEvening,
  setOnWayHomeByWalkAfterWorkAnswer,
  setOpenTalkToWomanOnWayHomeByWalkAfterWork,
}: OnWayHomeByWalkAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  return (
    <>
      {showFirstMessage && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "There's a young lady walking towards you on the way home, do you want to approach her?"
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setShowButtons(true);
              });
          }}
        />
      )}

      {showButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setOnWayHomeByWalkAfterWorkAnswer(
                OnWayHomeByWalkAfterWorkChoices.No
              );
              setShowButtons(false);
              setShowFirstMessage(false);
            }}
          >
            No
          </button>
          <button
            onClick={() => {
              setOnWayHomeByWalkAfterWorkAnswer(
                OnWayHomeByWalkAfterWorkChoices.Yes
              );
              setOpenOnWayHomeByWalkAfterWork(false);
              setOpenTalkToWomanOnWayHomeByWalkAfterWork(true);
            }}
          >
            Yes
          </button>
        </div>
      )}
      {!showFirstMessage && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You just past by the young lady, you're now walking home."
                )
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setOpenHomeAtEvening(true);
                });
            }}
          />
        </>
      )}
    </>
  );
};
