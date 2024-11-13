import { WaitingForBusAfterJobChoices } from "../enums";
import Typewriter from "typewriter-effect";
import { useState } from "react";

type WaitingForBusAfterJobProps = {
  setOpenWaitingForBusAfterJob: (openWaitingForBusAfterJob: boolean) => void;
  setWaitingForBusAfterJobAnswer: (
    waitingForBusAfterJobAnswer: WaitingForBusAfterJobChoices
  ) => void;
  waitingForBusAfterJobAnswer: WaitingForBusAfterJobChoices;
  setOpenGameOver: (openGameOver: boolean) => void;
  setOpenOnBusStopHomeAfterWork: (openOnBusStopHomeAfterWork: boolean) => void;
};

export const WaitingForBusAfterJob = ({
  setOpenWaitingForBusAfterJob,
  setWaitingForBusAfterJobAnswer,
  waitingForBusAfterJobAnswer,
  setOpenGameOver,
  setOpenOnBusStopHomeAfterWork,
}: WaitingForBusAfterJobProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You came to the bus stop. A police car came around the corner, what are you gonna do?"
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
              setWaitingForBusAfterJobAnswer(
                WaitingForBusAfterJobChoices.StartRunning
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Start running
          </button>
          <button
            onClick={() => {
              setWaitingForBusAfterJobAnswer(
                WaitingForBusAfterJobChoices.DoNothing
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Do nothing
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {waitingForBusAfterJobAnswer ===
            WaitingForBusAfterJobChoices.StartRunning && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You decided to run away, the cops noticed you and started chasing you."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "After a few minutes of running, you got caught. They started asking you questions and you couldn't answer them."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "They said that they started chasing you only because you started running, they didn't know hwo you are."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "They take you to the police station and they realize that you're the serial killer they've been looking for."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenWaitingForBusAfterJob(false);
                      setOpenGameOver(true);
                    });
                }}
              />
            </>
          )}
          {waitingForBusAfterJobAnswer ===
            WaitingForBusAfterJobChoices.DoNothing && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You decided to do nothing, a police car drove by and didn't see you, you got on a bus and arrived at the bus stop by your house."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    setOpenWaitingForBusAfterJob(false);
                    setOpenOnBusStopHomeAfterWork(true);
                  });
              }}
            />
          )}
        </>
      )}
    </>
  );
};
