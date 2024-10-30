import { useState } from "react";
import { GetUpChoices, SomethingToEatHomeChoices } from "../enums";
import Typewriter from "typewriter-effect";
import { Clock } from "./Clock";

type WantToEatHomeProps = {
  setOpenWantToEatHome: (openWantToEatHome: boolean) => void;
  getUpAnswer: GetUpChoices;
  setSomethingToEatHomeAnswer: (
    somethingToEatHomeAnswer: SomethingToEatHomeChoices
  ) => void;
  setOpenTypeOfTransport: (openTypeOfTransport: boolean) => void;
  setOpenInJob: (openInJob: boolean) => void;
};

export const WantToEatHome = ({
  setOpenWantToEatHome,
  getUpAnswer,
  setSomethingToEatHomeAnswer,
  setOpenTypeOfTransport,
  setOpenInJob,
}: WantToEatHomeProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {getUpAnswer === GetUpChoices.GoBackToSleep && (
        <>
          <Clock hour="10" minute="00" />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You woke up at 10:00 AM and you are going to the kitchen."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Do you want to eat something?")
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
                  setSomethingToEatHomeAnswer(SomethingToEatHomeChoices.Yes);
                  setOpenWantToEatHome(false);
                  setOpenTypeOfTransport(true);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setSomethingToEatHomeAnswer(SomethingToEatHomeChoices.No);
                  setOpenWantToEatHome(false);
                  setOpenTypeOfTransport(true);
                }}
              >
                No
              </button>
            </>
          )}
        </>
      )}
      {getUpAnswer === GetUpChoices.GetUp && (
        <>
          <Clock hour="6" minute="05" />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You got up and you are going to the kitchen")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Do you want to eat something?")
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
                  setSomethingToEatHomeAnswer(SomethingToEatHomeChoices.Yes);
                  setOpenWantToEatHome(false);
                  setOpenInJob(true);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setSomethingToEatHomeAnswer(SomethingToEatHomeChoices.No);
                  setOpenWantToEatHome(false);
                  setOpenTypeOfTransport(true);
                }}
              >
                No, eat later
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
