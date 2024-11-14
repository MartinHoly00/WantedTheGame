import { useState } from "react";
import { GoToSupermarketAfterWorkChoices, TransportChoices } from "../enums";
import Typewriter from "typewriter-effect";

type GoToSupermarketAfterWorkProps = {
  setOpenGoToSupermarketAfterWork: (
    openGoToSupermarketAfterWork: boolean
  ) => void;
  transportAnswer: TransportChoices;
  setOpenBackHomeAfterWork: (openBackHomeAfterWork: boolean) => void;
  setGoToSupermarketAfterWorkAnswer: (
    goToSupermarketAfterWorkAnswer: GoToSupermarketAfterWorkChoices
  ) => void;
  setOpenTalkToWomanSupermarketAfterWork: (
    openTalkToWomanSupermarketAfterWork: boolean
  ) => void;
};

export const GoToSupermarketAfterWork = ({
  setOpenGoToSupermarketAfterWork,
  transportAnswer,
  setOpenBackHomeAfterWork,
  setGoToSupermarketAfterWorkAnswer,
  setOpenTalkToWomanSupermarketAfterWork,
}: GoToSupermarketAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <>
          {transportAnswer === TransportChoices.Car && (
            <>
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
                      "You meet a young girl here, do you want to approach her?"
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
          {transportAnswer === TransportChoices.Bus && (
            <>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You've arrived at the store, you've done your shopping and you're walking towards home."
                    )
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "You meet a young girl here, do you want to approach her?"
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
        </>
      )}
      {showButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setGoToSupermarketAfterWorkAnswer(
                GoToSupermarketAfterWorkChoices.Yes
              );
              setOpenGoToSupermarketAfterWork(false);
              setOpenTalkToWomanSupermarketAfterWork(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setGoToSupermarketAfterWorkAnswer(
                GoToSupermarketAfterWorkChoices.No
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            No
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You ignored her and you are going home.")
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setOpenGoToSupermarketAfterWork(false);
                  setOpenBackHomeAfterWork(true);
                });
            }}
          />
        </>
      )}
    </>
  );
};
