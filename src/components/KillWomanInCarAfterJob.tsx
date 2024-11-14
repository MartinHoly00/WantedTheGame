import { useState } from "react";
import { KillWomanInCarAfterJobChoices } from "../enums";
import Typewriter from "typewriter-effect";

type KillWomanInCarAfterJobProps = {
  setOpenKillWomanInCarAfterJob: (openKillWomanInCarAfterJob: boolean) => void;
  setKillWomanInCarAfterJobAnswer: (
    killWomanInCarAfterJobAnswer: KillWomanInCarAfterJobChoices
  ) => void;
  killWomanInCarAfterJobAnswer: KillWomanInCarAfterJobChoices;
  setOpenBackHomeAfterWork: (openBackHomeAfterWork: boolean) => void;
};

export const KillWomanInCarAfterJob = ({
  setOpenKillWomanInCarAfterJob,
  setKillWomanInCarAfterJobAnswer,
  killWomanInCarAfterJobAnswer,
  setOpenBackHomeAfterWork,
}: KillWomanInCarAfterJobProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You get in the car and drive towards her house. What are you gonna do?"
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
              setKillWomanInCarAfterJobAnswer(
                KillWomanInCarAfterJobChoices.KillHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Kill Her
          </button>
          <button
            onClick={() => {
              setKillWomanInCarAfterJobAnswer(
                KillWomanInCarAfterJobChoices.TakeHerHome
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Take Her Home
          </button>
        </div>
      )}
      {killWomanInCarAfterJobAnswer ===
        KillWomanInCarAfterJobChoices.KillHer && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("You pulled over to the side of the road.")
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString("You pulled out a knife and killed her.")
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You dragged her body into the woods, got in your car and drove back home."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenKillWomanInCarAfterJob(false);
                setOpenBackHomeAfterWork(true);
              });
          }}
        />
      )}
      {killWomanInCarAfterJobAnswer ===
        KillWomanInCarAfterJobChoices.TakeHerHome && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You drove her home. You said goodbye and you're going home."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenKillWomanInCarAfterJob(false);
                setOpenBackHomeAfterWork(true);
              });
          }}
        />
      )}
    </>
  );
};
