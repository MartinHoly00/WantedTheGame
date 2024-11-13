import { MeetWomanInForestChoices } from "../enums";
import Typewriter from "typewriter-effect";
import { useState } from "react";

type MeetWomanInForestProps = {
  setOpenMeetWomanInForest: (openMeetWomanInForest: boolean) => void;
  setMeetWomanInForestAnswer: (
    meetWomanInForestAnswer: MeetWomanInForestChoices
  ) => void;
  meetWomanInForestAnswer: MeetWomanInForestChoices;
  setOpenBackHomeAfterWork: (openBackHomeAfterWork: boolean) => void;
};

export const MeetWomanInForest = ({
  setOpenMeetWomanInForest,
  setMeetWomanInForestAnswer,
  meetWomanInForestAnswer,
  setOpenBackHomeAfterWork,
}: MeetWomanInForestProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstSentence, setShowFirstSentence] = useState(true);
  return (
    <>
      {showFirstSentence && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "On your way home through the secluded woods you met a young girl, what are your plans?"
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
              setMeetWomanInForestAnswer(MeetWomanInForestChoices.IgnoreHer);
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Ignore Her
          </button>
          <button
            onClick={() => {
              setMeetWomanInForestAnswer(MeetWomanInForestChoices.KillHer);
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Kill Her
          </button>
          <button
            onClick={() => {
              setMeetWomanInForestAnswer(
                MeetWomanInForestChoices.KillHerAndRape
              );
              setShowButtons(false);
              setShowFirstSentence(false);
            }}
          >
            Kill Her and rape
          </button>
        </div>
      )}
      {!showFirstSentence && (
        <>
          {meetWomanInForestAnswer === MeetWomanInForestChoices.IgnoreHer && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("You move on, go around her and go home.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenMeetWomanInForest(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
          {meetWomanInForestAnswer === MeetWomanInForestChoices.KillHer && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You came to her. Before she could say anything, you pulled out a knife and slit her throat."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "You've covered all your tracks and you're going home."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenMeetWomanInForest(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
          {meetWomanInForestAnswer ===
            MeetWomanInForestChoices.KillHerAndRape && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You walked up to her, she didn't have time to do anything, and you started doing your job."
                  )
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "You've covered all your tracks and you're going home."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenMeetWomanInForest(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
        </>
      )}
    </>
  );
};
