import { useState } from "react";
import { WalksWomanHomeAfterJobChoices } from "../enums";
import Typewriter from "typewriter-effect";

type WalksWomanHomeAfterJobProps = {
  setOpenWalksWomanHomeAfterJob: (openWalksWomanHomeAfterJob: boolean) => void;
  setWalksWomanHomeAfterJobAnswer: (
    walksWomanHomeAfterJobAnswer: WalksWomanHomeAfterJobChoices
  ) => void;
  walksWomanHomeAfterJobAnswer: WalksWomanHomeAfterJobChoices;
  setOpenGameOver: (openGameOver: boolean) => void;
  setOpenBackHomeAfterWork: (openBackHomeAfterJob: boolean) => void;
};

export const WalksWomanHomeAfterJob = ({
  setOpenWalksWomanHomeAfterJob,
  setWalksWomanHomeAfterJobAnswer,
  setOpenGameOver,
  setOpenBackHomeAfterWork,
  walksWomanHomeAfterJobAnswer,
}: WalksWomanHomeAfterJobProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You walk her home down a secluded street, no one's around... What are you gonna do?"
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
              setWalksWomanHomeAfterJobAnswer(
                WalksWomanHomeAfterJobChoices.LetHerGo
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Walk her home, then leave
          </button>
          <button
            onClick={() => {
              setWalksWomanHomeAfterJobAnswer(
                WalksWomanHomeAfterJobChoices.KillHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Pull her aside and kill her
          </button>
          <button
            onClick={() => {
              setWalksWomanHomeAfterJobAnswer(
                WalksWomanHomeAfterJobChoices.RapeHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Pull her aside and rape her
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {walksWomanHomeAfterJobAnswer ===
            WalksWomanHomeAfterJobChoices.LetHerGo && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You brought her home. You said goodbye and you're going back to your place."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    setOpenWalksWomanHomeAfterJob(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
          {walksWomanHomeAfterJobAnswer ===
            WalksWomanHomeAfterJobChoices.KillHer && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("You pulled her aside and you killed her.")
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "You hid her body in the bushes and covered all the tracks."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("You're going back home.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenWalksWomanHomeAfterJob(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
          {walksWomanHomeAfterJobAnswer ===
            WalksWomanHomeAfterJobChoices.RapeHer && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You pulled her aside and started to rape her but you were too rough and careless and your victim died after the rape, someone heard her screaming and immediately called the police. "
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("The police took you to the station immediately.")
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "You were identified and linked to other murders you've committed. You got life in prison."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenWalksWomanHomeAfterJob(false);
                    setOpenGameOver(true);
                  });
              }}
            />
          )}
        </>
      )}
    </>
  );
};
