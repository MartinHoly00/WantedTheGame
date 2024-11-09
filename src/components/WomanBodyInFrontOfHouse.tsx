import { useState } from "react";
import { WomanBodyInFrontOfHouseResult } from "../enums";
import Typewriter from "typewriter-effect";

type WomanBodyInFrontOfHouseProps = {
  setOpenWomanBodyInFrontOfHouse: (
    openWomanBodyInFrontOfHouse: boolean
  ) => void;
  setWomanBodyInFrontOfHouseResult: (
    womanBodyInFrontOfHouseResult: WomanBodyInFrontOfHouseResult
  ) => void;
  womanBodyInFrontOfHouseResult: WomanBodyInFrontOfHouseResult;
  setOpenGameOver: (openGameOver: boolean) => void;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
};

export const WomanBodyInFrontOfHouse = ({
  setOpenWomanBodyInFrontOfHouse,
  setWomanBodyInFrontOfHouseResult,
  setOpenGameOver,
  womanBodyInFrontOfHouseResult,
  setOpenHomeAtEvening,
}: WomanBodyInFrontOfHouseProps) => {
  const [showFirstAnswerButtons, setShowFirstAnswerButtons] = useState(false);
  const [showSecondAnswerButtons, setShowSecondAnswerButtons] = useState(false);
  const [showThirdAnswerButtons, setShowThirdAnswerButtons] = useState(false);
  const [answers, setAnswers] = useState([0, 0, 0]);

  const [showSecondSentence, setShowSecondSentence] = useState(false);
  const [showThirdSentence, setShowThirdSentence] = useState(false);
  const [showFourthSentence, setShowFourthSentence] = useState(false);

  const calculateResult = () => {
    let numOfOnes = answers.filter((answer) => answer === 1).length;
    let numOfTwos = answers.filter((answer) => answer === 2).length;
    if (numOfOnes < numOfTwos) {
      setWomanBodyInFrontOfHouseResult(
        WomanBodyInFrontOfHouseResult.SavedYourself
      );
    } else {
      setWomanBodyInFrontOfHouseResult(WomanBodyInFrontOfHouseResult.Arrested);
    }
  };

  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Policeman: Afternoon. That’s quite a heavy bag you’ve got there. Everything all right?"
            )
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setShowFirstAnswerButtons(true);
            });
        }}
      />
      {showFirstAnswerButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[0] = 1;
                return newAnswers;
              });
              setShowFirstAnswerButtons(false);
              setShowSecondSentence(true);
            }}
          >
            Oh, yeah, just… clearing out some old junk. Figured I’d get rid of
            it before it starts to smell.
          </button>
          <button
            onClick={() => {
              setAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[0] = 2;
                return newAnswers;
              });
              setShowFirstAnswerButtons(false);
              setShowSecondSentence(true);
            }}
          >
            It’s just garbage from a project. Been meaning to clean out the
            trunk for a while now.
          </button>
        </div>
      )}
      {showSecondSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: Oh, yeah, just… clearing out some old junk. Figured I’d get rid of it before it starts to smell."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Policeman: It’s strange, though. That bag looks… almost like it’s got something heavy in it. Old junk, you said?"
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setShowSecondAnswerButtons(true);
              });
          }}
        />
      )}
      {showSecondAnswerButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[1] = 1;
                return newAnswers;
              });
              setShowSecondAnswerButtons(false);
              setShowThirdSentence(true);
            }}
          >
            Yeah, I had a few old tools and some other stuff I need to throw
            out.
          </button>
          <button
            onClick={() => {
              setAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[1] = 2;
                return newAnswers;
              });
              setShowSecondAnswerButtons(false);
              setShowThirdSentence(true);
            }}
          >
            Look, it’s just personal belongings. I didn’t realize cleaning out
            my own car would be a problem.
          </button>
        </div>
      )}
      {showThirdSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: Yeah, I had a few old tools and some other stuff I need to throw out."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Policeman: One last question—there’s been some trouble in the area lately. You sure there’s nothing else I should know about?"
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setShowThirdAnswerButtons(true);
              });
          }}
        />
      )}
      {showThirdAnswerButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[2] = 1;
                return newAnswers;
              });
              setShowThirdAnswerButtons(false);
              setShowFourthSentence(true);
              calculateResult();
            }}
          >
            Nothing out of the ordinary, officer. Just clearing out some
            clutter.
          </button>
          <button
            onClick={() => {
              setAnswers((prev) => {
                const newAnswers = [...prev];
                newAnswers[2] = 2;
                return newAnswers;
              });
              setShowThirdAnswerButtons(false);
              setShowFourthSentence(true);
              calculateResult();
            }}
          >
            Not at all. If I’d seen anything suspicious, you’d be the first to
            know.
          </button>
        </div>
      )}
      {showFourthSentence && (
        <>
          {womanBodyInFrontOfHouseResult ===
            WomanBodyInFrontOfHouseResult.SavedYourself && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Nothing out of the ordinary, officer. Just clearing out some clutter."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "The policeman nods and lets you go on your way. You breathe a sigh of relief as you walk back to your house."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenWomanBodyInFrontOfHouse(false);
                    setOpenHomeAtEvening(true);
                  });
              }}
            />
          )}
          {womanBodyInFrontOfHouseResult ===
            WomanBodyInFrontOfHouseResult.Arrested && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Not at all. If I’d seen anything suspicious, you’d be the first to know."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "The policeman opens the bag, revealing the body, and immediately calls for backup."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "They took you to jail. They found out you were involved in two other murders this year. You've been sentenced for life."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenWomanBodyInFrontOfHouse(false);
                    setOpenGameOver(true);
                  });
              }}
            />
          )}
        </>
      )}
    </>
  );
};
