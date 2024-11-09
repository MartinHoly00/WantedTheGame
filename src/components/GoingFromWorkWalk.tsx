import { useState } from "react";
import Typewriter from "typewriter-effect";
import { GoingFromWorkWalkChoices } from "../enums";

type GoingFromWorkWalkProps = {
  setOpenGoingFromWorkWalk: (openGoingFromWorkWalk: boolean) => void;
  setGoingFromWorkWalkAnswer: (
    goingFromWorkWalkAnswer: GoingFromWorkWalkChoices
  ) => void;
  setOpenGameOver: (openGameOver: boolean) => void;
  setOpenBackHomeAgain: (openBackHomeAgain: boolean) => void;
  goingFromWorkWalkAnswer: GoingFromWorkWalkChoices;
};

export const GoingFromWorkWalk = ({
  setOpenGoingFromWorkWalk,
  setGoingFromWorkWalkAnswer,
  setOpenGameOver,
  setOpenBackHomeAgain,
  goingFromWorkWalkAnswer,
}: GoingFromWorkWalkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [caughtIfHiding, setCaughtIfHiding] = useState(null as boolean | null);
  const getRandomBoolean = () => Math.random() < 0.5;
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
              setGoingFromWorkWalkAnswer(GoingFromWorkWalkChoices.DoNothing);
              setShowButtons(false);
              setShowFirstMessage(false);
            }}
          >
            Do nothing
          </button>
          <button
            onClick={() => {
              setGoingFromWorkWalkAnswer(GoingFromWorkWalkChoices.Run);
              setShowButtons(false);
              setShowFirstMessage(false);
            }}
          >
            Run Away
          </button>
          <button
            onClick={() => {
              const caught = getRandomBoolean();
              setCaughtIfHiding(caught);
              setGoingFromWorkWalkAnswer(GoingFromWorkWalkChoices.Hide);
              setShowButtons(false);
              setShowFirstMessage(false);
            }}
          >
            Try to hide
          </button>
        </div>
      )}
      {goingFromWorkWalkAnswer === GoingFromWorkWalkChoices.DoNothing && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You decided to do nothing, the cops just passed by and didn't notice you."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString("You are going back home.")
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenGoingFromWorkWalk(false);
                setOpenBackHomeAgain(true);
              });
          }}
        />
      )}
      {goingFromWorkWalkAnswer === GoingFromWorkWalkChoices.Run && (
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
                setOpenGoingFromWorkWalk(false);
                setOpenGameOver(true);
              });
          }}
        />
      )}
      {goingFromWorkWalkAnswer === GoingFromWorkWalkChoices.Hide &&
        caughtIfHiding && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You tried to hide, but the cops noticed that and you seemed suspicious. They come to you and you started running."
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
                  "They take you to the police station and they realize that you're the serial killer they've been looking for."
                )
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setOpenGoingFromWorkWalk(false);
                  setOpenGameOver(true);
                });
            }}
          />
        )}
      {goingFromWorkWalkAnswer === GoingFromWorkWalkChoices.Hide &&
        !caughtIfHiding && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You tried to hide, the cops didn't notice you. They just passed by."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("You are going back home.")
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setOpenGoingFromWorkWalk(false);
                  setOpenBackHomeAgain(true);
                });
            }}
          />
        )}
    </>
  );
};
