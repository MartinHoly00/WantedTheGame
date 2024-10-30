import { useState } from "react";
import Typewriter from "typewriter-effect";
import { GetUpChoices } from "../enums";
import { Clock } from "./Clock";

type BackToSleepProps = {
  setOpenBackToSleep: (openBackToSleep: boolean) => void;
  setGetUpAnswer: (getUpAnswer: GetUpChoices) => void;
  setOpenWantToEatHome: (openWantToEatHome: boolean) => void;
};

export const BackToSleep = ({
  setOpenBackToSleep,
  setGetUpAnswer,
  setOpenWantToEatHome,
}: BackToSleepProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Clock hour={"6"} minute={"00"} />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("You are exhausted, do you want to go back to sleep?")
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && (
        <>
          <button
            onClick={() => {
              setGetUpAnswer(GetUpChoices.GoBackToSleep); //odpověď na otázku zda vstát nebo ne.
              setOpenBackToSleep(false);
              setOpenWantToEatHome(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setGetUpAnswer(GetUpChoices.GetUp); //odpověď na otázku zda vstát nebo ne.
              setOpenBackToSleep(false);
              setOpenWantToEatHome(true);
            }}
          >
            No
          </button>
        </>
      )}
    </>
  );
};
