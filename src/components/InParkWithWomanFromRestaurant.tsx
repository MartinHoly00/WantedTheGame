import { useState } from "react";
import Typewriter from "typewriter-effect";
import { InParkWithWomanFromRestaurantChoices } from "../enums";

type InParkWithWomanFromRestaurantProps = {
  setOpenInParkWithWomanFromRestaurant: (
    openInParkWithWomanFromRestaurant: boolean
  ) => void;
  setInParkWithWomanFromRestaurantAnswer: (
    inParkWithWomanFromRestaurantAnswer: InParkWithWomanFromRestaurantChoices
  ) => void;
  inParkWithWomanFromRestaurantAnswer: InParkWithWomanFromRestaurantChoices;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  setOpenGameOver: (openGameOver: boolean) => void;
};

export const InParkWithWomanFromRestaurant = ({
  setOpenInParkWithWomanFromRestaurant,
  setInParkWithWomanFromRestaurantAnswer,
  inParkWithWomanFromRestaurantAnswer,
  setOpenHomeAtEvening,
  setOpenGameOver,
}: InParkWithWomanFromRestaurantProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You're alone together in the park talking to each other, what are you going to do with her?"
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
              setInParkWithWomanFromRestaurantAnswer(
                InParkWithWomanFromRestaurantChoices.KillHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Kill Her
          </button>
          <button
            onClick={() => {
              setInParkWithWomanFromRestaurantAnswer(
                InParkWithWomanFromRestaurantChoices.RapeHerAndKill
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Rape Her and then kill her
          </button>
          <button
            onClick={() => {
              setInParkWithWomanFromRestaurantAnswer(
                InParkWithWomanFromRestaurantChoices.RapeHer
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Rape Her
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {inParkWithWomanFromRestaurantAnswer ===
            InParkWithWomanFromRestaurantChoices.KillHer && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "The whole thing happened pretty quickly, nobody noticed anything and managed to cover their tracks. She's dead, and you're going home peacefully."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenInParkWithWomanFromRestaurant(false);
                      setOpenHomeAtEvening(true);
                    });
                }}
              />
            </>
          )}
          {inParkWithWomanFromRestaurantAnswer ===
            InParkWithWomanFromRestaurantChoices.RapeHerAndKill && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "The whole thing took too long, someone called the cops on you, and before you were done, the police arrived"
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "They took you to jail. They found out you were involved in two other murders this year. You've been sentenced for life."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenInParkWithWomanFromRestaurant(false);
                      setOpenGameOver(true);
                    });
                }}
              />
            </>
          )}
          {inParkWithWomanFromRestaurantAnswer ===
            InParkWithWomanFromRestaurantChoices.RapeHer && (
            <>
              {" "}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You were too rough and careless and your rape victim died, someone heard her screaming and immediately called the police."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "They took you to jail. They found out you were involved in two other murders this year. You've been sentenced for life."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenInParkWithWomanFromRestaurant(false);
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
