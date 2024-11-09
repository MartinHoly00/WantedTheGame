import { useState } from "react";
import Typewriter from "typewriter-effect";
import { InCarWithWomanFromRestaurantChoices } from "../enums";

type InCarWithWomanFromRestaurantProps = {
  setOpenInCarWithWomanFromRestaurant: (
    openInCarWithWomanFromRestaurant: boolean
  ) => void;
  setInCarWithWomanFromRestaurantAnswer: (
    inCarWithWomanFromRestaurantAnswer: InCarWithWomanFromRestaurantChoices
  ) => void;
  inCarWithWomanFromRestaurantAnswer: InCarWithWomanFromRestaurantChoices;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  setOpenWomanBodyInFrontOfHouse: (
    openWomanBodyInFrontOfHouse: boolean
  ) => void;
};

export const InCarWithWomanFromRestaurant = ({
  setOpenInCarWithWomanFromRestaurant,
  setInCarWithWomanFromRestaurantAnswer,
  inCarWithWomanFromRestaurantAnswer,
  setOpenHomeAtEvening,
  setOpenWomanBodyInFrontOfHouse,
}: InCarWithWomanFromRestaurantProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You offered to drive her home, pulled over to the side of the road on a secluded road and killed her."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You threw the body in the trunk, but what are you going to do with it?"
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
              setInCarWithWomanFromRestaurantAnswer(
                InCarWithWomanFromRestaurantChoices.TakeBodyHome
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Take her body home
          </button>
          <button
            onClick={() => {
              setInCarWithWomanFromRestaurantAnswer(
                InCarWithWomanFromRestaurantChoices.ThrowBodyInRiver
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Throw her body to river
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {inCarWithWomanFromRestaurantAnswer ===
            InCarWithWomanFromRestaurantChoices.ThrowBodyInRiver && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "On the way home, you stopped by the river and threw her body in."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("You drive home like nothing happened.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenInCarWithWomanFromRestaurant(false);
                    setOpenHomeAtEvening(true);
                  });
              }}
            />
          )}
          {inCarWithWomanFromRestaurantAnswer ===
            InCarWithWomanFromRestaurantChoices.TakeBodyHome && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You drove the body all the way home, but when you were unloading it from the car into the garage, a cop car drove by."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("He stopped and come to you.")
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    setOpenInCarWithWomanFromRestaurant(false);
                    setOpenWomanBodyInFrontOfHouse(true);
                  });
              }}
            />
          )}
        </>
      )}
    </>
  );
};
