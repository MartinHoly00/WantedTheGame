import { useState } from "react";
import {
  BackHomeAgainChoices,
  InJobChoices,
  LunchTimeAtHomeChoices,
} from "../enums";
import Typewriter from "typewriter-effect";

type LunchTimeAtHomeProps = {
  setOpenLunchTimeAtHome: (openLunchTimeAtHome: boolean) => void;
  backHomeAgainAnswer: BackHomeAgainChoices;
  inJobAnswer: InJobChoices;
  setLunchTimeAtHomeAnswer: (
    lunchTimeAtHomeAnswer: LunchTimeAtHomeChoices
  ) => void;
  lunchTimeAtHomeAnswer: LunchTimeAtHomeChoices;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
};

export const LunchTimeAtHome = ({
  setOpenLunchTimeAtHome,
  backHomeAgainAnswer,
  inJobAnswer,
  setLunchTimeAtHomeAnswer,
  lunchTimeAtHomeAnswer,
  setOpenHomeAtEvening,
}: LunchTimeAtHomeProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  return (
    <>
      {showFirstMessage && (
        <>
          {backHomeAgainAnswer === BackHomeAgainChoices.DontEat && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You decide not to eat and go to your room. What do you want to do now?"
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setShowButtons(true);
                  });
              }}
            />
          )}
          {inJobAnswer === InJobChoices.GoToSupermarket && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You came home all hungry and you are going to cook a meal."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "You cooked a meal and you are bored, what do you want to do now?"
                  )
                  .callFunction(() => {
                    setShowButtons(true);
                  });
              }}
            />
          )}
          {backHomeAgainAnswer !== BackHomeAgainChoices.DontEat &&
            inJobAnswer !== InJobChoices.GoToSupermarket && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("You cooked a meal and eated it.")
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "Now you are bored, what do you want to do now?"
                    )
                    .callFunction(() => {
                      setShowButtons(true);
                    });
                }}
              />
            )}
        </>
      )}
      {showButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setLunchTimeAtHomeAnswer(LunchTimeAtHomeChoices.ReadABook);
              setShowFirstMessage(false);
              setShowButtons(false);
            }}
          >
            Read a book
          </button>
          <button
            onClick={() => {
              setLunchTimeAtHomeAnswer(LunchTimeAtHomeChoices.WatchTv);
              setShowFirstMessage(false);
              setShowButtons(false);
            }}
          >
            Watch Television
          </button>
        </div>
      )}
      {!showFirstMessage && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                lunchTimeAtHomeAnswer === LunchTimeAtHomeChoices.ReadABook
                  ? "You're reading a book but you fell asleep."
                  : "You are watching television and you fell asleep."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenLunchTimeAtHome(false);
                setOpenHomeAtEvening(true);
              });
          }}
        />
      )}
    </>
  );
};
