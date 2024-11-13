import Typewriter from "typewriter-effect";
import { useState } from "react";
import { GoHomeAfterWorkingCarChoices } from "../enums";

type GoHomeAfterWorkingCarProps = {
  setOpenGoHomeAfterWorkingCar: (openGoHomeAfterWorkingCar: boolean) => void;
  setGoHomeAfterWorkingCarAnswer: (
    goHomeAfterWorkingCarAnswer: GoHomeAfterWorkingCarChoices
  ) => void;
  setOpenGoHomeAfterWorkingCarAproachGirl: (
    openGoHomeAfterWorkingCarAproachGirl: boolean
  ) => void;
  setOpenGoHomeAfterWorkCarCarCrash: (
    openGoHomeAfterWorkCarCarCrash: boolean
  ) => void;
};

export const GoHomeAfterWorkingCar = ({
  setOpenGoHomeAfterWorkingCar,
  setGoHomeAfterWorkingCarAnswer,
  setOpenGoHomeAfterWorkingCarAproachGirl,
  setOpenGoHomeAfterWorkCarCarCrash,
}: GoHomeAfterWorkingCarProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You're driving home from work. On the way you see a young lady on a bench by the side of the road, do you want to stop and approach her?"
            )
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
              setGoHomeAfterWorkingCarAnswer(GoHomeAfterWorkingCarChoices.Yes);
              setOpenGoHomeAfterWorkingCar(false);
              setOpenGoHomeAfterWorkingCarAproachGirl(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setGoHomeAfterWorkingCarAnswer(GoHomeAfterWorkingCarChoices.No);
              setOpenGoHomeAfterWorkingCar(false);
              setOpenGoHomeAfterWorkCarCarCrash(true);
            }}
          >
            No
          </button>
        </>
      )}
    </>
  );
};
