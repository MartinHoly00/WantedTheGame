import { useState } from "react";
import Typewriter from "typewriter-effect";
import { GoHomeByWalkAfterWorkChoices } from "../enums";

type GoHomeByWalkAfterWorkProps = {
  setOpenGoHomeByWalkAfterWork: (openGoHomeByWalkAfterWork: boolean) => void;
  setGoHomeByWalkAfterWorkAnswer: (
    goHomeByWalkAfterWorkAnswer: GoHomeByWalkAfterWorkChoices
  ) => void;
  goHomeByWalkAfterWorkAnswer: GoHomeByWalkAfterWorkChoices;
  setOpenGameOver: (openGameOver: boolean) => void;
  setOpenOnWayHomeByWalkAfterWork: (
    openOnWayHomeByWalkAfterWork: boolean
  ) => void;
};

export const GoHomeByWalkAfterWork = ({
  setOpenGoHomeByWalkAfterWork,
  setGoHomeByWalkAfterWorkAnswer,
  goHomeByWalkAfterWorkAnswer,
  setOpenGameOver,
  setOpenOnWayHomeByWalkAfterWork,
}: GoHomeByWalkAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  return (
    <>
      {showFirstMessage && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You're walking home from work and you see the cops driving by, since you've killed two victims in the last month you're afraid they're coming here because of you, what do you do?"
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
              setGoHomeByWalkAfterWorkAnswer(
                GoHomeByWalkAfterWorkChoices.RunAway
              );
              setShowFirstMessage(false);
              setShowButtons(false);
            }}
          >
            Run away
          </button>
          <button
            onClick={() => {
              setGoHomeByWalkAfterWorkAnswer(
                GoHomeByWalkAfterWorkChoices.DoNothing
              );
              setShowFirstMessage(false);
              setShowButtons(false);
            }}
          >
            Do Nohting
          </button>
        </div>
      )}
      {!showFirstMessage && (
        <>
          {goHomeByWalkAfterWorkAnswer ===
            GoHomeByWalkAfterWorkChoices.RunAway && (
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
                      setOpenGoHomeByWalkAfterWork(false);
                      setOpenGameOver(true);
                    });
                }}
              />
            </>
          )}
          {goHomeByWalkAfterWorkAnswer ===
            GoHomeByWalkAfterWorkChoices.DoNothing && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You decide to do nothing, a police car drives by and doesn't notice you, you're still going home."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenGoHomeByWalkAfterWork(false);
                      setOpenOnWayHomeByWalkAfterWork(true);
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
