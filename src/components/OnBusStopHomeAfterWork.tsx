import { useState } from "react";
import Typewriter from "typewriter-effect";
import { OnBusStopHomeAfterWorkChoices } from "../enums";

type OnBusStopHomeAfterWorkProps = {
  setOpenOnBusStopHomeAfterWork: (openOnBusStopHomeAfterWork: boolean) => void;
  setOnBusStopHomeAfterWorkAnswer: (
    onBusStopHomeAfterWorkAnswer: OnBusStopHomeAfterWorkChoices
  ) => void;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  setOpenTalkToWomanOnBusStopAfterWork: (
    openTalkToWomanOnBusStopAfterWork: boolean
  ) => void;
};

export const OnBusStopHomeAfterWork = ({
  setOpenOnBusStopHomeAfterWork,
  setOnBusStopHomeAfterWorkAnswer,
  setOpenHomeAtEvening,
  setOpenTalkToWomanOnBusStopAfterWork,
}: OnBusStopHomeAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "At the bus stop you see a lonely girl who has just got off the bus. Do you want to approach her?"
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
              setOnBusStopHomeAfterWorkAnswer(
                OnBusStopHomeAfterWorkChoices.Yes
              );
              setOpenOnBusStopHomeAfterWork(false);
              setOpenTalkToWomanOnBusStopAfterWork(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setOnBusStopHomeAfterWorkAnswer(OnBusStopHomeAfterWorkChoices.No);
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            No
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("You are going back home.")
              .start()
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
                setOpenHomeAtEvening(true);
              });
          }}
        />
      )}
    </>
  );
};
