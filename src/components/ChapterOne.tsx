import { useState } from "react";
import "./ChapterOne.css";
import Typewriter from "typewriter-effect";
import { GetUpChoices, SomethingForBreakfastChoices } from "../enums";

type ChapterOneProps = {
  setGetUpAnswer: (getUpAnswer: GetUpChoices) => void;
  getUpAnswer: GetUpChoices;
  setSomethingForBreakfastAnswer: (
    somethingForBreakfastAnswer: SomethingForBreakfastChoices
  ) => void;
  somethingForBreakfastAnswer: SomethingForBreakfastChoices;
};

export const ChapterOne = ({
  getUpAnswer,
  setGetUpAnswer,
  setSomethingForBreakfastAnswer,
}: ChapterOneProps) => {
  const [openGetupButtons, setOpenGetupButtons] = useState(false);
  const [getUpOne, setGetUpOne] = useState(true);
  const [
    openSomethingForBreakfastButtons,
    setOpenSomethingForBreakfastButtons,
  ] = useState(false);
  return (
    <div className="inside">
      {getUpOne && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You are exhausted, do you want to go back to sleep or get up?"
                )
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setOpenGetupButtons(true);
                });
            }}
          />
          {openGetupButtons && (
            <div className="getup-buttons">
              <button
                onClick={() => {
                  setGetUpAnswer(GetUpChoices.GoBackToSleep);
                  setGetUpOne(false);
                }}
              >
                {GetUpChoices.GoBackToSleep}
              </button>
              <button
                onClick={() => {
                  setGetUpAnswer(GetUpChoices.GetUp);
                  setGetUpOne(false);
                }}
              >
                {GetUpChoices.GetUp}
              </button>
            </div>
          )}
        </>
      )}
      {getUpAnswer === GetUpChoices.GoBackToSleep && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("You went back to sleep...")
              .start()
              .pauseFor(1000);
          }}
        />
      )}
      {getUpAnswer === GetUpChoices.GetUp && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You got up and you are going to the kitchen.")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "You are in the kitchen, do you want to make something for breakfast?"
                )
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setOpenSomethingForBreakfastButtons(true);
                });
            }}
          />
          {openSomethingForBreakfastButtons && (
            <>
              <button
                onClick={() => {
                  setOpenSomethingForBreakfastButtons(false);
                  setSomethingForBreakfastAnswer(
                    SomethingForBreakfastChoices.Yes
                  );
                  setGetUpOne(false);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setOpenSomethingForBreakfastButtons(false);
                  setSomethingForBreakfastAnswer(
                    SomethingForBreakfastChoices.No
                  );
                  setGetUpOne(false);
                }}
              >
                No
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};
