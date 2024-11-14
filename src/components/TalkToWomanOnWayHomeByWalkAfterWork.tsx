import { useState } from "react";
import { TalkToWomanOnWayHomeByWalkAfterWorkResult } from "../enums";
import Typewriter from "typewriter-effect";

type TalkToWomanOnWayHomeByWalkAfterWorkProps = {
  setOpenTalkToWomanOnWayHomeByWalkAfterWork: (
    openTalkToWomanOnWayHomeByWalkAfterWork: boolean
  ) => void;
  setTalkToWomanOnWayHomeByWalkAfterWorkResult: (
    talkToWomanOnWayHomeByWalkAfterWorkResult: TalkToWomanOnWayHomeByWalkAfterWorkResult
  ) => void;
  talkToWomanOnWayHomeByWalkAfterWorkResult: TalkToWomanOnWayHomeByWalkAfterWorkResult;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  setOpenKillWomanOnWayHomeByWalkAfterWork: (
    openKillWomanOnWayHomeByWalkAfterWork: boolean
  ) => void;
};

export const TalkToWomanOnWayHomeByWalkAfterWork = ({
  setOpenTalkToWomanOnWayHomeByWalkAfterWork,
  setTalkToWomanOnWayHomeByWalkAfterWorkResult,
  talkToWomanOnWayHomeByWalkAfterWorkResult,
  setOpenHomeAtEvening,
  setOpenKillWomanOnWayHomeByWalkAfterWork,
}: TalkToWomanOnWayHomeByWalkAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  return (
    <>
      {showFirstMessage && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You: Hey there. Walking home alone? It’s getting a bit late for that."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Mia: Oh, yeah, I usually just walk. I don’t live too far."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: I’m headed that way too. Mind if I walk with you? It’s always safer with someone else."
                )
                .start()
                .pauseFor(1000)
                .typeString("Mia: I’m alright, but… thanks for offering.")
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: No problem. Just thought I’d keep you company. You never know who you might run into alone out here."
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
                  setTalkToWomanOnWayHomeByWalkAfterWorkResult(
                    TalkToWomanOnWayHomeByWalkAfterWorkResult.Accept
                  );
                  setShowButtons(false);
                }}
              >
                It’s really no trouble. Just thought it’d be a bit safer, and
                I’m headed in that direction anyway.
              </button>
              <button
                onClick={() => {
                  setTalkToWomanOnWayHomeByWalkAfterWorkResult(
                    TalkToWomanOnWayHomeByWalkAfterWorkResult.Reject
                  );
                  setShowButtons(false);
                }}
              >
                It’s just a quick walk, and you’d be home safe and sound. Can’t
                be too careful these days, right?
              </button>
              <button
                onClick={() => {
                  setTalkToWomanOnWayHomeByWalkAfterWorkResult(
                    TalkToWomanOnWayHomeByWalkAfterWorkResult.Report
                  );
                  setShowButtons(false);
                }}
              >
                Look, I get it—you don’t know me. But I’m just being friendly.
                It’s nice to have someone to talk to, right?
              </button>
            </div>
          )}
          {talkToWomanOnWayHomeByWalkAfterWorkResult ===
            TalkToWomanOnWayHomeByWalkAfterWorkResult.Accept && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: It’s really no trouble. Just thought it’d be a bit safer, and I’m headed in that direction anyway."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Mia: Alright, I guess it wouldn’t hurt to have some company. I’m just a few blocks away."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: Perfect. Nothing like a nice evening walk, right? You’ll be home in no time."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanOnWayHomeByWalkAfterWork(false);
                    setOpenKillWomanOnWayHomeByWalkAfterWork(true);
                  });
              }}
            />
          )}
          {talkToWomanOnWayHomeByWalkAfterWorkResult ===
            TalkToWomanOnWayHomeByWalkAfterWorkResult.Reject && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: It’s just a quick walk, and you’d be home safe and sound. Can’t be too careful these days, right?"
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Mia: That’s thoughtful, but I’m really fine. I’m used to walking alone. Thanks, though!"
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setShowFirstMessage(false);
                  });
              }}
            />
          )}
          {talkToWomanOnWayHomeByWalkAfterWorkResult ===
            TalkToWomanOnWayHomeByWalkAfterWorkResult.Report && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Look, I get it—you don’t know me. But I’m just being friendly. It’s nice to have someone to talk to, right?"
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Mia: I don’t usually let people walk with me, especially strangers. I’d rather be alone, thanks."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: It’s just a friendly offer. No need to be on guard all the time. People can still be decent, can’t they?"
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Mia: I’d prefer you didn’t. Please, just let me walk on my own."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setShowFirstMessage(false);
                  });
              }}
            />
          )}
        </>
      )}
      {!showFirstMessage && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You've said goodbye to her and you're going home.")
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setOpenTalkToWomanOnWayHomeByWalkAfterWork(false);
                  setOpenHomeAtEvening(true);
                });
            }}
          />
        </>
      )}
    </>
  );
};
