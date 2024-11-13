import { useState } from "react";
import Typewriter from "typewriter-effect";
import { GoHomeAfterWorkCarCarCrashChoices } from "../enums";

type GoHomeAfterWorkCarCarCrashProps = {
  setOpenGoHomeAfterWorkCarCarCrash: (
    openGoHomeAfterWorkCarCarCrash: boolean
  ) => void;
  setGoHomeAfterWorkCarCarCrashAnswer: (
    goHomeAfterWorkCarCarCrashAnswer: GoHomeAfterWorkCarCarCrashChoices
  ) => void;
  goHomeAfterWorkCarCarCrashAnswer: GoHomeAfterWorkCarCarCrashChoices;
  setOpenGameOver: (openGameOver: boolean) => void;
  setOpenMeetWomanInForest: (openMeetWomanInForest: boolean) => void;
};

export const GoHomeAfterWorkCarCarCrash = ({
  setOpenGoHomeAfterWorkCarCarCrash,
  setGoHomeAfterWorkCarCarCrashAnswer,
  goHomeAfterWorkCarCarCrashAnswer,
  setOpenGameOver,
  setOpenMeetWomanInForest,
}: GoHomeAfterWorkCarCarCrashProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You are driving home, but suddenly a car pulls out of a side road at an intersection and hits you."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "You survived but you're shaken up, what are you gonna do?"
                )
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setShowButtons(true);
                });
            }}
          />
        </>
      )}
      {showButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setGoHomeAfterWorkCarCarCrashAnswer(
                GoHomeAfterWorkCarCarCrashChoices.RunAway
              );
              setShowFirstSentence(false);
              setShowButtons(false);
            }}
          >
            Run away
          </button>
          <button
            onClick={() => {
              setGoHomeAfterWorkCarCarCrashAnswer(
                GoHomeAfterWorkCarCarCrashChoices.CallPolice
              );
              setShowFirstSentence(false);
              setShowButtons(false);
            }}
          >
            Call the police
          </button>
          <button
            onClick={() => {
              setGoHomeAfterWorkCarCarCrashAnswer(
                GoHomeAfterWorkCarCarCrashChoices.HelpDriver
              );
              setShowFirstSentence(false);
              setShowButtons(false);
            }}
          >
            Help the driver
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {goHomeAfterWorkCarCarCrashAnswer ===
            GoHomeAfterWorkCarCarCrashChoices.RunAway && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "The accident happened not far from your house, and you were driving a stolen car, so you won't be connected to it, you're going home."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenGoHomeAfterWorkCarCarCrash(false);
                      setOpenMeetWomanInForest(true);
                    });
                }}
              />
            </>
          )}
          {goHomeAfterWorkCarCarCrashAnswer ===
            GoHomeAfterWorkCarCarCrashChoices.CallPolice && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You called the police and waited for their arrival, when they arrived they took you to the police station for questioning."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "They were gonna let you go, but a couple of officers linked you to the murders that have happened around here in the last year."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "You were arrested and sentenced to life in prison."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenGoHomeAfterWorkCarCarCrash(false);
                      setOpenGameOver(true);
                    });
                }}
              />
            </>
          )}
          {goHomeAfterWorkCarCarCrashAnswer ===
            GoHomeAfterWorkCarCarCrashChoices.HelpDriver && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You started to help the other driver, meanwhile an ambulance arrived and the police took you to the police station for questioning."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "They were gonna let you go, but a couple of officers linked you to the murders that have happened around here in the last year."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "You were arrested and sentenced to life in prison."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenGoHomeAfterWorkCarCarCrash(false);
                      setOpenGameOver(true);
                    });
                }}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
