import { useState } from "react";
import Typewriter from "typewriter-effect";
import { AfterCafeWithWomanChoices } from "../enums";

type AfterCafeWithWomanProps = {
  setOpenAfterCafeWithWoman: (openAfterCafeWithWoman: boolean) => void;
  setAfterCafeWithWomanAnswer: (
    afterCafeWithWomanAnswer: AfterCafeWithWomanChoices
  ) => void;
  setOpenBackHomeAgain: (openBackHomeAgain: boolean) => void;
  setOpenKillWomanAfterCafe: (openKillWomanAfterCafe: boolean) => void;
};

export const AfterCafeWithWoman = ({
  setOpenAfterCafeWithWoman,
  setAfterCafeWithWomanAnswer,
  setOpenBackHomeAgain,
  setOpenKillWomanAfterCafe,
}: AfterCafeWithWomanProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "After a cafe in the coffee shop, you and Elise are walking sthrough the park."
            )
            .start()
            .pauseFor(1000)
            .typeString("Nobody is around, what do you want to do?")
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
              setAfterCafeWithWomanAnswer(AfterCafeWithWomanChoices.GoHome);
              setOpenAfterCafeWithWoman(false);
              setOpenBackHomeAgain(true);
            }}
          >
            Say goodbye to her and go home
          </button>
          <button
            onClick={() => {
              setAfterCafeWithWomanAnswer(AfterCafeWithWomanChoices.KillHer);
              setOpenAfterCafeWithWoman(false);
              setOpenKillWomanAfterCafe(true);
            }}
          >
            Kill her
          </button>
        </div>
      )}
    </>
  );
};
