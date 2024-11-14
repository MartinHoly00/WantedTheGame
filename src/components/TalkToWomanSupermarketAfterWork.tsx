import { useState } from "react";
import {
  TalkToWomanSupermarketAfterWorkResult,
  TransportChoices,
} from "../enums";
import Typewriter from "typewriter-effect";
import { KillWomanInCarAfterJob } from "./KillWomanInCarAfterJob";
import { KillWomanInParkAfterJob } from "./KillWomanInParkAfterJob";

type TalkToWomanSupermarketAfterWorkProps = {
  setOpenTalkToWomanSupermarketAfterWork: (
    openTalkToWomanSupermarketAfterWork: boolean
  ) => void;
  setTalkToWomanSupermarketAfterWorkResult: (
    talkToWomanSupermarketAfterWorkResult: TalkToWomanSupermarketAfterWorkResult
  ) => void;
  transportAnswer: TransportChoices;
  talkToWomanSupermarketAfterWorkResult: TalkToWomanSupermarketAfterWorkResult;
  setOpenBackHomeAfterWork: (openBackHomeAfterWork: boolean) => void;
  setOpenKillWomanInParkAfterJob: (
    openKillWomanInParkAfterJob: boolean
  ) => void;
  setOpenKillWomanInCarAfterJob: (openKillWomanInCarAfterJob: boolean) => void;
};

export const TalkToWomanSupermarketAfterWork = ({
  setOpenTalkToWomanSupermarketAfterWork,
  setTalkToWomanSupermarketAfterWorkResult,
  transportAnswer,
  talkToWomanSupermarketAfterWorkResult,
  setOpenBackHomeAfterWork,
  setOpenKillWomanInCarAfterJob,
  setOpenKillWomanInParkAfterJob,
}: TalkToWomanSupermarketAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {transportAnswer === TransportChoices.Car && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You: Hey there. Got a lot to carry. Need a lift home?"
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Georgia: Oh, thanks, but I’m okay. It’s not too far."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: It’s no trouble at all. I just finished shopping too, so I’m headed out anyway. You’d be home in a few minutes instead of lugging all that down the street."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Georgia: I appreciate it, but I usually just walk. It’s nice out, so I don’t mind."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: I get it—stranger danger and all that. But I’m just trying to be neighborly. A quick lift home, no strings attached."
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
                  setTalkToWomanSupermarketAfterWorkResult(
                    TalkToWomanSupermarketAfterWorkResult.Accept
                  );
                  setShowButtons(false);
                }}
              >
                Honestly, it’s just a quick drive. You’d be home in no time, and
                I’d be glad to help.
              </button>
              <button
                onClick={() => {
                  setTalkToWomanSupermarketAfterWorkResult(
                    TalkToWomanSupermarketAfterWorkResult.Reject
                  );
                  setShowButtons(false);
                }}
              >
                I promise, just a friendly ride home. Sometimes a little
                kindness goes a long way.
              </button>
              <button
                onClick={() => {
                  setTalkToWomanSupermarketAfterWorkResult(
                    TalkToWomanSupermarketAfterWorkResult.Report
                  );
                  setShowButtons(false);
                }}
              >
                Look, I’m just being friendly. You seem like you could use a
                little help. It’s just a ride—nothing to worry about.
              </button>
            </div>
          )}
          {talkToWomanSupermarketAfterWorkResult ===
            TalkToWomanSupermarketAfterWorkResult.Accept && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Honestly, it’s just a quick drive. You’d be home in no time, and I’d be glad to help."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Georgia: Well… I suppose it would be nice to get home faster. Okay, thanks for the offer."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: Great choice. Sometimes it’s nice to save a few steps after a long day."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanSupermarketAfterWork(false);
                    setOpenKillWomanInCarAfterJob(true);
                  });
              }}
            />
          )}
          {talkToWomanSupermarketAfterWorkResult ===
            TalkToWomanSupermarketAfterWorkResult.Reject && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: I promise, just a friendly ride home. Sometimes a little kindness goes a long way."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Georgia: That’s nice of you, but I think I’ll just stick to walking. Thanks, though!"
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanSupermarketAfterWork(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
          {talkToWomanSupermarketAfterWorkResult ===
            TalkToWomanSupermarketAfterWorkResult.Report && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Look, I’m just being friendly. You seem like you could use a little help. It’s just a ride—nothing to worry about."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Georgia: I appreciate the offer, but I don’t really know you, so I think I’ll pass."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: It’s just a quick ride. People can still be decent, can’t they?"
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Georgia: I’d rather not, thanks. Please let me go."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanSupermarketAfterWork(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
        </>
      )}
      {transportAnswer === TransportChoices.Bus && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You: Hey, looks like you’ve got a lot to carry there. How about a little break? There’s a park nearby—perfect spot to relax a bit before heading home."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Georgia: Oh, thanks, but I was actually planning to just go straight home. It’s been a long day."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: It’s a beautiful spot, not far at all. You could unwind for a bit—let me show you around. You’d be surprised how peaceful it is this time of day."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Georgia: That’s kind of you, but I’m not sure. I just wanted to get home and put these bags down."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: I get it. But a little time in the fresh air can make all the difference. Just a quick detour to clear your mind—it’s really worth it."
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
                  setTalkToWomanSupermarketAfterWorkResult(
                    TalkToWomanSupermarketAfterWorkResult.Accept
                  );
                  setShowButtons(false);
                }}
              >
                Trust me, it’s just a quick detour, and I think you’ll love it.
                A bit of fresh air and a nice view—it’s the best way to end the
                day.
              </button>
              <button
                onClick={() => {
                  setTalkToWomanSupermarketAfterWorkResult(
                    TalkToWomanSupermarketAfterWorkResult.Reject
                  );
                  setShowButtons(false);
                }}
              >
                Trust me, it’s a nice spot. Just a few minutes in the park to
                unwind, and you’ll feel refreshed. I’d be happy to show you.
              </button>
              <button
                onClick={() => {
                  setTalkToWomanSupermarketAfterWorkResult(
                    TalkToWomanSupermarketAfterWorkResult.Report
                  );
                  setShowButtons(false);
                }}
              >
                Trust me, it’s just a quick detour, and I think you’ll love it.
                A bit of fresh air and a nice view—it’s the best way to end the
                day.
              </button>
            </div>
          )}
          {talkToWomanSupermarketAfterWorkResult ===
            TalkToWomanSupermarketAfterWorkResult.Accept && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Trust me, it’s just a quick detour, and I think you’ll love it. A bit of fresh air and a nice view—it’s the best way to end the day."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Georgia: Well… maybe a few minutes wouldn’t hurt. It does sound nice."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString("You: Perfect choice. You won’t regret it.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanSupermarketAfterWork(false);
                    setOpenKillWomanInParkAfterJob(true);
                  });
              }}
            />
          )}
          {talkToWomanSupermarketAfterWorkResult ===
            TalkToWomanSupermarketAfterWorkResult.Reject && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Trust me, it’s a nice spot. Just a few minutes in the park to unwind, and you’ll feel refreshed. I’d be happy to show you. "
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Georgia: Thanks, but I really just want to get home. I’ve had a long day."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanSupermarketAfterWork(false);
                    setOpenBackHomeAfterWork(true);
                  });
              }}
            />
          )}
          {talkToWomanSupermarketAfterWorkResult ===
            TalkToWomanSupermarketAfterWorkResult.Report && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: I get it—you don’t know me. But it’s just a friendly offer, you know? I’m just suggesting a quick stop to relax."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Georgia: I don’t usually go to parks with strangers. I’d rather just get home, honestly."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: It’s really no big deal. People don’t always have to be on guard. Just a quiet walk in the park."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString("Georgia: No, thanks. Please let me go.")
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanSupermarketAfterWork(false);
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
