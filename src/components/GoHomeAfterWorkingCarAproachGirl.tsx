import { useState } from "react";
import { GoHomeAfterWorkingCarAproachGirlChoices } from "../enums";
import Typewriter from "typewriter-effect";

type GoHomeAfterWorkingCarAproachGirlProps = {
  setOpenGoHomeAfterWorkingCarAproachGirl: (
    openGoHomeAfterWorkingCarAproachGirl: boolean
  ) => void;
  setGoHomeAfterWorkingCarAproachGirlAnswer: (
    goHomeAfterWorkingCarAproachGirlAnswer: GoHomeAfterWorkingCarAproachGirlChoices
  ) => void;
  goHomeAfterWorkingCarAproachGirlAnswer: GoHomeAfterWorkingCarAproachGirlChoices;
  setOpenBackHomeAfterWork: (openBackHomeAfterWork: boolean) => void;
  setOpenGameOver: (openGameOver: boolean) => void;
};

export const GoHomeAfterWorkingCarAproachGirl = ({
  setOpenGoHomeAfterWorkingCarAproachGirl,
  setGoHomeAfterWorkingCarAproachGirlAnswer,
  goHomeAfterWorkingCarAproachGirlAnswer,
  setOpenBackHomeAfterWork,
  setOpenGameOver,
}: GoHomeAfterWorkingCarAproachGirlProps) => {
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
                  "You're stopped on the side of the road and you're walking towards her."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "You look around and there's no one else around. What do you want to do with her?"
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
              setGoHomeAfterWorkingCarAproachGirlAnswer(
                GoHomeAfterWorkingCarAproachGirlChoices.KillHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Kill Her
          </button>
          <button
            onClick={() => {
              setGoHomeAfterWorkingCarAproachGirlAnswer(
                GoHomeAfterWorkingCarAproachGirlChoices.KillHerAndRape
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Kill Her and rape her
          </button>
          <button
            onClick={() => {
              setGoHomeAfterWorkingCarAproachGirlAnswer(
                GoHomeAfterWorkingCarAproachGirlChoices.TalkToHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Talk to her
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {goHomeAfterWorkingCarAproachGirlAnswer ===
            GoHomeAfterWorkingCarAproachGirlChoices.KillHer && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You walked up to her before she could say anything and slit her throat, hid her body in the bushes."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("You are going back home.")
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenGoHomeAfterWorkingCarAproachGirl(false);
                      setOpenBackHomeAfterWork(true);
                    });
                }}
              />
            </>
          )}
          {goHomeAfterWorkingCarAproachGirlAnswer ===
            GoHomeAfterWorkingCarAproachGirlChoices.KillHerAndRape && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You walked up to her and started doing your job."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "The whole thing took too long, someone spotted you and immediately called the police on you."
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
                      setOpenGoHomeAfterWorkingCarAproachGirl(false);
                      setOpenGameOver(true);
                    });
                }}
              />
            </>
          )}
          {goHomeAfterWorkingCarAproachGirlAnswer ===
            GoHomeAfterWorkingCarAproachGirlChoices.TalkToHer && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You walked up to her and had a nice conversation with each other."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "After talking for a while, you get back in the car and drive home."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenGoHomeAfterWorkingCarAproachGirl(false);
                      setOpenBackHomeAfterWork(true);
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
