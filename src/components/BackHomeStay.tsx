import { useState } from "react";
import { BackHomeStayChoices, StayHomeChoices } from "../enums";
import Typewriter from "typewriter-effect";

type BackHomeStayProps = {
  setOpenBackHomeStay: (openBackHomeStay: boolean) => void;
  stayHomeAnswer: StayHomeChoices;
  setBackHomeStayAnswer: (backHomeStayAnswer: BackHomeStayChoices) => void;
  setOpenGoToRestaurant: (openGoToRestaurant: boolean) => void;
  setOpenLunchTimeAtHome: (openLunchTimeAtHome: boolean) => void;
};

export const BackHomeStay = ({
  setOpenBackHomeStay,
  stayHomeAnswer,
  setBackHomeStayAnswer,
  setOpenGoToRestaurant,
  setOpenLunchTimeAtHome,
}: BackHomeStayProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `You decided to stay at home. ${
                stayHomeAnswer === StayHomeChoices.ReadABook
                  ? "You are reading a book."
                  : "You are exhaused and you are going to sleep"
              }`
            )
            .start()
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              `${
                stayHomeAnswer === StayHomeChoices.ReadABook
                  ? "After 2 hours of reading you are very hungry, how do you want to eat?"
                  : "You got up and you are very hungry, how do you want to eat?"
              }`
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
              setOpenBackHomeStay(false);
              setBackHomeStayAnswer(BackHomeStayChoices.GoToRestaurant);
              setOpenGoToRestaurant(true);
            }}
          >
            Go to restaurant
          </button>
          <button
            onClick={() => {
              setOpenBackHomeStay(false);
              setBackHomeStayAnswer(BackHomeStayChoices.CookAtHome);
              setOpenLunchTimeAtHome(true);
            }}
          >
            Cook at home
          </button>
        </div>
      )}
    </>
  );
};
