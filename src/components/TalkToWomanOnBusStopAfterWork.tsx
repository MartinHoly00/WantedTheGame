import { useState } from "react";
import { TalkToWomanOnBusStopAfterWorkResult } from "../enums";
import Typewriter from "typewriter-effect";

type TalkToWomanOnBusStopAfterWorkProps = {
  setOpenTalkToWomanOnBusStopAfterWork: (
    openTalkToWomanOnBusStopAfterWork: boolean
  ) => void;
  setTalkToWomanOnBusStopAfterWorkResult: (
    talkToWomanOnBusStopAfterWorkResult: TalkToWomanOnBusStopAfterWorkResult
  ) => void;
  talkToWomanOnBusStopAfterWorkResult: TalkToWomanOnBusStopAfterWorkResult;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
  setOpenWalksWomanHomeAfterJob: (openWalksWomanHomeAfterJob: boolean) => void;
};

export const TalkToWomanOnBusStopAfterWork = ({
  setOpenTalkToWomanOnBusStopAfterWork,
  setTalkToWomanOnBusStopAfterWorkResult,
  talkToWomanOnBusStopAfterWorkResult,
  setOpenHomeAtEvening,
  setOpenWalksWomanHomeAfterJob,
}: TalkToWomanOnBusStopAfterWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  return (
    <>
      {showFirstMessage && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: Evening. Waiting for the next bus, or are you headed somewhere close by?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Amanda: Oh, just waiting for the next one. Shouldn’t be long, I think."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Buses can be unpredictable this time of day. I live nearby, and if you’re not too far, I’d be happy to walk with you. Just to keep you company."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Amanda: Oh, that’s kind of you, but I think I’ll be fine. The bus should be here any minute."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: It’s no trouble at all, and the fresh air’s nice after a long day. Besides, it’s always better to have someone with you, especially in the evening."
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
              setTalkToWomanOnBusStopAfterWorkResult(
                TalkToWomanOnBusStopAfterWorkResult.Accept
              );
              setShowButtons(false);
            }}
          >
            Honestly, it’s just a short walk, and I’d be happy to make sure you
            get home safe. It’s on my way, really.
          </button>
          <button
            onClick={() => {
              setTalkToWomanOnBusStopAfterWorkResult(
                TalkToWomanOnBusStopAfterWorkResult.Reject
              );
              setShowButtons(false);
            }}
          >
            Just a quick walk. You’d be home before you know it, and it’d be
            better than waiting out here alone.
          </button>
          <button
            onClick={() => {
              setTalkToWomanOnBusStopAfterWorkResult(
                TalkToWomanOnBusStopAfterWorkResult.Report
              );
              setShowButtons(false);
            }}
          >
            I get it, you don’t know me. But I’m just being friendly. I live
            nearby, and it’s always nice to have someone to talk to on the way.
          </button>
        </div>
      )}
      {talkToWomanOnBusStopAfterWorkResult ===
        TalkToWomanOnBusStopAfterWorkResult.Accept && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: Honestly, it’s just a short walk, and I’d be happy to make sure you get home safe. It’s on my way, really."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Amanda: Well… I suppose a little company wouldn’t hurt. It’s not far from here."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Great choice. It’s a nice evening for a walk, and you’ll be home in no time."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanOnBusStopAfterWork(false);
                setOpenWalksWomanHomeAfterJob(true);
              });
          }}
        />
      )}

      {showFirstMessage &&
        talkToWomanOnBusStopAfterWorkResult ===
          TalkToWomanOnBusStopAfterWorkResult.Reject && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You: Just a quick walk. You’d be home before you know it, and it’d be better than waiting out here alone."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Amanda: Thanks, but I’ll just stick with the bus. I appreciate the offer, though!"
                )
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setShowFirstMessage(false);
                });
            }}
          />
        )}
      {showFirstMessage &&
        talkToWomanOnBusStopAfterWorkResult ===
          TalkToWomanOnBusStopAfterWorkResult.Report && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You: I get it, you don’t know me. But I’m just being friendly. I live nearby, and it’s always nice to have someone to talk to on the way."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Amanda: Thanks, but I don’t think that’s necessary. I’d rather wait here."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: It’s just a walk. People can still look out for each other, can’t they?"
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Amanda: Actually, I think I’ll wait. Please leave me alone."
                )
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setShowFirstMessage(false);
                });
            }}
          />
        )}
      {!showFirstMessage && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("You are going back home.")
              .start()
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
                setOpenTalkToWomanOnBusStopAfterWork(false);
                setOpenHomeAtEvening(true);
              });
          }}
        />
      )}
    </>
  );
};
