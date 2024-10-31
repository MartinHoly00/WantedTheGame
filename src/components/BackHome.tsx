import { useState } from "react";
import Typewriter from "typewriter-effect";
import { StayHomeChoices } from "../enums";

type BackHomeProps = {
  setOpenBackHome: (openBackHome: boolean) => void;
  setStayHomeAnswer: (stayHomeAnswer: StayHomeChoices) => void;
  setOpenGoByWalk: (openGoByWalk: boolean) => void;
};

export const BackHome = ({
  setOpenBackHome,
  setStayHomeAnswer,
  setOpenGoByWalk,
}: BackHomeProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You decided to go back home. You called your boss that you are ill."
            )
            .start()
            .pauseFor(1000)
            .deleteAll()
            .typeString("You are back home. What do you want to do now?")
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setOpenBackHome(false);
              setStayHomeAnswer(StayHomeChoices.GoToSleep);
            }}
          >
            Go to sleep
          </button>
          <button
            onClick={() => {
              setOpenBackHome(false);
              setStayHomeAnswer(StayHomeChoices.GoToCafe);
              setOpenGoByWalk(true);
            }}
          >
            Go to the cafe
          </button>
        </div>
      )}
    </>
  );
};
