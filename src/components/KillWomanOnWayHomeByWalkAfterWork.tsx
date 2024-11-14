import { useState } from "react";
import { KillWomanOnWayHomeByWalkAfterWorkChoices } from "../enums";
import Typewriter from "typewriter-effect";

type KillWomanOnWayHomeByWalkAfterWorkProps = {
  setOpenKillWomanOnWayHomeByWalkAfterWork: (
    openKillWomanOnWayHomeByWalkAfterWork: boolean
  ) => void;
  setKillWomanOnWayHomeByWalkAfterWorkAnswer: (
    killWomanOnWayHomeByWalkAfterWorkAnswer: KillWomanOnWayHomeByWalkAfterWorkChoices
  ) => void;
  setOpenGameOver: (openGameOver: boolean) => void;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  killWomanOnWayHomeByWalkAfterWorkAnswer: KillWomanOnWayHomeByWalkAfterWorkChoices;
};

export const KillWomanOnWayHomeByWalkAfterWork = ({
  setOpenKillWomanOnWayHomeByWalkAfterWork,
  setKillWomanOnWayHomeByWalkAfterWorkAnswer,
  setOpenGameOver,
  setOpenHomeAtEvening,
  killWomanOnWayHomeByWalkAfterWorkAnswer,
}: KillWomanOnWayHomeByWalkAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  return (
    <>
      {showFirstMessage && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You waited until you were on a deserted road and you killed her. What are you gonna do with the body?"
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
              setKillWomanOnWayHomeByWalkAfterWorkAnswer(
                KillWomanOnWayHomeByWalkAfterWorkChoices.HideHerBodyInBush
              );
              setShowButtons(false);
              setShowFirstMessage(false);
            }}
          >
            Hide her body in bush
          </button>
          <button
            onClick={() => {
              setKillWomanOnWayHomeByWalkAfterWorkAnswer(
                KillWomanOnWayHomeByWalkAfterWorkChoices.LetHerBodyRoadside
              );
              setShowButtons(false);
              setShowFirstMessage(false);
            }}
          >
            Let her body on roadside
          </button>
        </div>
      )}
      {!showFirstMessage && (
        <>
          {killWomanOnWayHomeByWalkAfterWorkAnswer ===
            KillWomanOnWayHomeByWalkAfterWorkChoices.HideHerBodyInBush && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You decided to hide her body in the bush. After that you are going back home and you see cops driving by."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("You are lucky you hid the body well.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenKillWomanOnWayHomeByWalkAfterWork(false);
                    setOpenHomeAtEvening(true);
                  });
              }}
            />
          )}
          {killWomanOnWayHomeByWalkAfterWorkAnswer ===
            KillWomanOnWayHomeByWalkAfterWorkChoices.LetHerBodyRoadside && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You decided to let her body on the roadside. After that you are going back home and you see cops driving by."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "The police arrested you and immediately took you to the police station."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("You got sentenced to life in prison.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenKillWomanOnWayHomeByWalkAfterWork(false);
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
