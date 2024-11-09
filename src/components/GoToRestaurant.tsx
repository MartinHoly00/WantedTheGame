import { useState } from "react";
import Typewriter from "typewriter-effect";
import { TalkToWomanInFrontOfRestaurantChoices } from "../enums";

type GoToRestaurantProps = {
  setOpenGoToRestaurant: (openGoToRestaurant: boolean) => void;
  setTalkToWomanInFrontOfRestaurantAnswer: (
    talkToWomanInFrontOfRestaurantAnswer: TalkToWomanInFrontOfRestaurantChoices
  ) => void;
  setOpenBackFromRestaurant: (openBackFromRestaurant: boolean) => void;
  setOpenTalkToWomanInFrontOfRestaurant: (
    openTalkToWomanInFrontOfRestaurant: boolean
  ) => void;
};

export const GoToRestaurant = ({
  setOpenGoToRestaurant,
  setTalkToWomanInFrontOfRestaurantAnswer,
  setOpenBackFromRestaurant,
  setOpenTalkToWomanInFrontOfRestaurant,
}: GoToRestaurantProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You decided to go to the restaurant. You went for your car and drove to the nearest restaurant."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "You parked your car and you go to it. In front of the restaurant you see seeing a young woman, do you want to aproach her?"
            )
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setOpenGoToRestaurant(false);
              setTalkToWomanInFrontOfRestaurantAnswer(
                TalkToWomanInFrontOfRestaurantChoices.Yes
              );
              setOpenTalkToWomanInFrontOfRestaurant(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setOpenGoToRestaurant(false);
              setTalkToWomanInFrontOfRestaurantAnswer(
                TalkToWomanInFrontOfRestaurantChoices.No
              );
              setOpenBackFromRestaurant(true);
            }}
          >
            No
          </button>
        </div>
      )}
    </>
  );
};
