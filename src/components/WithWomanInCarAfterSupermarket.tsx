import { useState } from "react";
import { WithWomanInCarAfterSupermarketChoices } from "../enums";
import Typewriter from "typewriter-effect";

type WithWomanInCarAfterSupermarketProps = {
  setOpenWithWomanInCarAfterSupermarket: (
    openWithWomanInCarAfterSupermarket: boolean
  ) => void;
  setWithWomanInCarAfterSupermarketAnswer: (
    withWomanInCarAfterSupermarketAnswer: WithWomanInCarAfterSupermarketChoices
  ) => void;
  setOpenInCarWithWomanFromRestaurant: (
    openInCarWithWomanFromRestaurant: boolean
  ) => void;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
};

export const WithWomanInCarAfterSupermarket = ({
  setOpenWithWomanInCarAfterSupermarket,
  setWithWomanInCarAfterSupermarketAnswer,
  setOpenInCarWithWomanFromRestaurant,
  setOpenHomeAtEvening,
}: WithWomanInCarAfterSupermarketProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You are with her in a car. What do you want to do with her now?"
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
              setWithWomanInCarAfterSupermarketAnswer(
                WithWomanInCarAfterSupermarketChoices.TakeHerHome
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Take her home
          </button>
          <button
            onClick={() => {
              setWithWomanInCarAfterSupermarketAnswer(
                WithWomanInCarAfterSupermarketChoices.KillHer
              );
              setOpenWithWomanInCarAfterSupermarket(false);
              setOpenInCarWithWomanFromRestaurant(true);
            }}
          >
            Kill her
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You drove Amanda home, she thanked you, and you drove back home"
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenInCarWithWomanFromRestaurant(false);
                setOpenHomeAtEvening(true);
              });
          }}
        />
      )}
    </>
  );
};
