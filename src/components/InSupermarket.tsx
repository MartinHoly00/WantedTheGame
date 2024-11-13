import { useState } from "react";
import {
  InSupermarketChoices,
  LateOnBusChoices,
  TransportChoices,
} from "../enums";
import Typewriter from "typewriter-effect";

type InSupermarketProps = {
  setOpenInSupermarket: (openInSupermarket: boolean) => void;
  setInSupermarketAnswer: (inSupermarketAnswer: InSupermarketChoices) => void;
  transportAnswer: TransportChoices;
  lateOnBusAnswer: LateOnBusChoices;
  setOpenLunchTimeAtHome: (openLunchTimeAtHome: boolean) => void;
  setOpenTalkToWomanInFrontOfSupermarket: (
    openTalkToWomanInFrontOfSupermarket: boolean
  ) => void;
};

export const InSupermarket = ({
  setOpenInSupermarket,
  setInSupermarketAnswer,
  transportAnswer,
  lateOnBusAnswer,
  setOpenLunchTimeAtHome,
  setOpenTalkToWomanInFrontOfSupermarket,
}: InSupermarketProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {lateOnBusAnswer === LateOnBusChoices.Car && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You've arrived at the store, you've done your shopping and you're walking towards your car."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You meet a young girl there, do you want to approach her?"
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setShowButtons(true);
              });
          }}
        />
      )}
      {transportAnswer === TransportChoices.Car && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You've arrived at the store, you've done your shopping and you're walking towards your car."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You meet a young girl there, do you want to approach her?"
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setShowButtons(true);
              });
          }}
        />
      )}

      {transportAnswer !== TransportChoices.Car &&
        lateOnBusAnswer !== LateOnBusChoices.Car && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You decided to go to the store by foot. You've done your shopping and you're walking back home."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "You meet a young girl there, do you want to approach her?"
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
              setInSupermarketAnswer(InSupermarketChoices.Yes);
              setOpenInSupermarket(false);
              setOpenTalkToWomanInFrontOfSupermarket(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setInSupermarketAnswer(InSupermarketChoices.No);
              setOpenInSupermarket(false);
              setOpenLunchTimeAtHome(true);
            }}
          >
            No
          </button>
        </div>
      )}
    </>
  );
};
