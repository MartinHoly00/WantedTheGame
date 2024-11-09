import { useState } from "react";
import Typewriter from "typewriter-effect";
import { AfterRestaurantWithWomanChoices } from "../enums";

type AfterRestaurantWithWomanProps = {
  setOpenAfterRestaurantWithWoman: (
    openAfterRestaurantWithWoman: boolean
  ) => void;
  setAfterRestaurantWithWomanAnswer: (
    afterRestaurantWithWomanAnswer: AfterRestaurantWithWomanChoices
  ) => void;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  setOpenInCarWithWomanFromRestaurant: (
    openInCarWithWomanFromRestaurant: boolean
  ) => void;
  setOpenInParkWithWomanFromRestaurant: (
    openInParkWithWomanFromRestaurant: boolean
  ) => void;
  afterRestaurantWithWomanAnswer: AfterRestaurantWithWomanChoices;
};

export const AfterRestaurantWithWoman = ({
  setOpenAfterRestaurantWithWoman,
  setAfterRestaurantWithWomanAnswer,
  setOpenHomeAtEvening,
  setOpenInCarWithWomanFromRestaurant,
  setOpenInParkWithWomanFromRestaurant,
  afterRestaurantWithWomanAnswer,
}: AfterRestaurantWithWomanProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You are after a great meal in the restaurant. You are standing with Catie in front of the restaurant."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString("What do you want to do with her now?")
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
              setAfterRestaurantWithWomanAnswer(
                AfterRestaurantWithWomanChoices.GoHome
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Go home
          </button>
          <button
            onClick={() => {
              setAfterRestaurantWithWomanAnswer(
                AfterRestaurantWithWomanChoices.InviteHerToBar
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Invite her to bar at evening
          </button>
          <button
            onClick={() => {
              setAfterRestaurantWithWomanAnswer(
                AfterRestaurantWithWomanChoices.InviteHerToCar
              );
              setOpenAfterRestaurantWithWoman(false);
              setOpenInCarWithWomanFromRestaurant(true);
            }}
          >
            Take Her to car and kill her
          </button>
          <button
            onClick={() => {
              setAfterRestaurantWithWomanAnswer(
                AfterRestaurantWithWomanChoices.InviteHerToPark
              );
              setOpenAfterRestaurantWithWoman(false);
              setOpenInParkWithWomanFromRestaurant(true);
            }}
          >
            Take her to park and kill her
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {afterRestaurantWithWomanAnswer ===
            AfterRestaurantWithWomanChoices.GoHome && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("You said goodbye to Catie and went home.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenAfterRestaurantWithWoman(false);
                    setOpenHomeAtEvening(true);
                  });
              }}
            />
          )}
          {afterRestaurantWithWomanAnswer ===
            AfterRestaurantWithWomanChoices.InviteHerToBar && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You invited Catie to the bar. She agreed and you went to the bar. You are going back home."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenAfterRestaurantWithWoman(false);
                    setOpenHomeAtEvening(true);
                  });
              }}
            />
          )}
        </>
      )}
    </>
  );
};
