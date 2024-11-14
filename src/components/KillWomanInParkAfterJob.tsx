import { KillWomanInParkAfterJobChoices } from "../enums";
import Typewriter from "typewriter-effect";
import { useState } from "react";

type KillWomanInParkAfterJobProps = {
  setOpenKillWomanInParkAfterJob: (
    openKillWomanInParkAfterJob: boolean
  ) => void;
  setKillWomanInParkAfterJobAnswer: (
    killWomanInParkAfterJobAnswer: KillWomanInParkAfterJobChoices
  ) => void;
  setOpenBackHomeAfterWork: (openBackHomeAfterWork: boolean) => void;
  killWomanInParkAfterJobAnswer: KillWomanInParkAfterJobChoices;
};

export const KillWomanInParkAfterJob = ({
  setOpenKillWomanInParkAfterJob,
  setKillWomanInParkAfterJobAnswer,
  killWomanInParkAfterJobAnswer,
  setOpenBackHomeAfterWork,
}: KillWomanInParkAfterJobProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You're sitting together in the park. Nobody is around. What do you want to do?"
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
              setKillWomanInParkAfterJobAnswer(
                KillWomanInParkAfterJobChoices.KillHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Kill Her
          </button>
          <button
            onClick={() => {
              setKillWomanInParkAfterJobAnswer(
                KillWomanInParkAfterJobChoices.LetHerGo
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Go Home
          </button>
        </div>
      )}

      {killWomanInParkAfterJobAnswer ===
        KillWomanInParkAfterJobChoices.KillHer && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You pulled out a knife, Georgia didn't have time to say anything, and you stabbed her."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString("You hide her body in a nearby bush and walk home.")
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenKillWomanInParkAfterJob(false);
                setOpenBackHomeAfterWork(true);
              });
          }}
        />
      )}
      {killWomanInParkAfterJobAnswer ===
        KillWomanInParkAfterJobChoices.LetHerGo && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("You said goodbye to her and you're going home.")
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenKillWomanInParkAfterJob(false);
                setOpenBackHomeAfterWork(true);
              });
          }}
        />
      )}
    </>
  );
};
