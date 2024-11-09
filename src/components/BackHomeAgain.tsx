import Typewriter from "typewriter-effect";
import { BackHomeAgainChoices, TalkToWomanInFrontOfCafeResult } from "../enums";
import { useState } from "react";

type BackHomeAgainProps = {
  setOpenBackHomeAgain: (openBackHomeAgain: boolean) => void;
  setOpenGameOver: (openGameOver: boolean) => void;
  talkToWomanInFrontOfCafeResult: TalkToWomanInFrontOfCafeResult;
  setBackHomeAgainAnswer: (backHomeAgainAnswer: BackHomeAgainChoices) => void;
  setOpenLunchTimeAtHome: (openLunchTimeAtHome: boolean) => void;
  setOpenGoToRestaurant: (openGoToRestaurant: boolean) => void;
};

export const BackHomeAgain = ({
  setOpenBackHomeAgain,
  talkToWomanInFrontOfCafeResult,
  setOpenGameOver,
  setBackHomeAgainAnswer,
  setOpenLunchTimeAtHome,
  setOpenGoToRestaurant,
}: BackHomeAgainProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {talkToWomanInFrontOfCafeResult ===
        TalkToWomanInFrontOfCafeResult.Report && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You are at home and you are reading a book, you hear a knock on the door."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You open the door and see the police. You are confused what is happening."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "They told you that Elise reported you for harassment and they want to hear your side of the story."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "Police wanted to release you but the police have linked you to two homicides in the area this year."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You are arrested and you are going to the court. You are sentenced to life in prison."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenBackHomeAgain(false);
                setOpenGameOver(true);
              });
          }}
        />
      )}
      {talkToWomanInFrontOfCafeResult !==
        TalkToWomanInFrontOfCafeResult.Report && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You got back home and you are hungry.")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Do you want to eat something?")
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
                  setBackHomeAgainAnswer(BackHomeAgainChoices.DontEat);
                  setOpenBackHomeAgain(false);
                  setOpenLunchTimeAtHome(true);
                }}
              >
                Dont Eat
              </button>
              <button
                onClick={() => {
                  setBackHomeAgainAnswer(BackHomeAgainChoices.MakeMealAtHome);
                  setOpenBackHomeAgain(false);
                  setOpenLunchTimeAtHome(true);
                }}
              >
                Make meal at home
              </button>
              <button
                onClick={() => {
                  setBackHomeAgainAnswer(BackHomeAgainChoices.GoToRestaurant);
                  setOpenBackHomeAgain(false);
                  setOpenGoToRestaurant(true);
                }}
              >
                Go to restaurant
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
