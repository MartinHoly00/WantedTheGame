import { useState } from "react";
import { WithWomanInParkAfterSupermarketChoices } from "../enums";
import Typewriter from "typewriter-effect";

type WithWomanInParkAfterSupermarketProps = {
  setOpenWithWomanInParkAfterSupermarket: (
    openWithWomanInParkAfterSupermarket: boolean
  ) => void;
  setWithWomanInParkAfterSupermarketAnswer: (
    withWomanInParkAfterSupermarketAnswer: WithWomanInParkAfterSupermarketChoices
  ) => void;
  setOpenInParkWithWomanFromRestaurant: (
    openInParkWithWomanFromRestaurant: boolean
  ) => void;
  setOpenLunchTimeAtHome: (openLunchTimeAtHome: boolean) => void;
};

export const WithWomanInParkAfterSupermarket = ({
  setOpenWithWomanInParkAfterSupermarket,
  setWithWomanInParkAfterSupermarketAnswer,
  setOpenInParkWithWomanFromRestaurant,
  setOpenLunchTimeAtHome,
}: WithWomanInParkAfterSupermarketProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Are you planning on killing her in the park?")
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
              setWithWomanInParkAfterSupermarketAnswer(
                WithWomanInParkAfterSupermarketChoices.KillHer
              );
              setOpenWithWomanInParkAfterSupermarket(false);
              setOpenInParkWithWomanFromRestaurant(true);
            }}
          >
            Kill Her
          </button>
          <button
            onClick={() => {
              setWithWomanInParkAfterSupermarketAnswer(
                WithWomanInParkAfterSupermarketChoices.LetHerGo
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Let her go
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You had a nice conversation with her. After a while, you say goodbye and you go home to make a meal."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenWithWomanInParkAfterSupermarket(false);
                setOpenLunchTimeAtHome(true);
              });
          }}
        />
      )}
    </>
  );
};
