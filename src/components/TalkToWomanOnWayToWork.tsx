import { useState } from "react";
import Typewriter from "typewriter-effect";
import { TalkToWomanOnWayToWorkByWalkResult } from "../enums";

type TalkToWomanOnWayToWorkProps = {
  setTalkToWomanOnWayToWorkByWalkResult: (
    talkToWomanOnWayToWorkByWalkResult: TalkToWomanOnWayToWorkByWalkResult
  ) => void;
  talkToWomanOnWayToWorkByWalkResult: TalkToWomanOnWayToWorkByWalkResult;
  setOpenTalkToWomanOnWayToWorkByWalk: (
    openTalkToWomanOnWayToWorkByWalk: boolean
  ) => void;
  setOpenInJob: (openInJob: boolean) => void;
};

export const TalkToWomanOnWayToWork = ({
  setTalkToWomanOnWayToWorkByWalkResult,
  talkToWomanOnWayToWorkByWalkResult,
  setOpenTalkToWomanOnWayToWorkByWalk,
  setOpenInJob,
}: TalkToWomanOnWayToWorkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You: Morning. Nice to see someone else who’s up early. Not many people around this time of day."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "Nina: Yeah, it’s peaceful here in the morning. Just me and my coffee before the day starts."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "You: I’m heading to work, but I’m glad I decided to walk through the park. Kind of refreshing to run into someone… interesting."
            )
            .start()
            .pauseFor(1000)
            .typeString("Nina: I suppose so. It’s a nice change of pace.")
            .start()
            .pauseFor(1000)
            .typeString(
              "You: Say, I know a nice restaurant nearby. What do you think about meeting up later? Dinner, just you and me."
            )
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && (
        <>
          <button
            onClick={() => {
              setTalkToWomanOnWayToWorkByWalkResult(
                TalkToWomanOnWayToWorkByWalkResult.Accept
              );
              setShowButtons(false);
            }}
          >
            You know, there aren’t many people who start their mornings like
            this—calm and collected. I’d enjoy getting to know you better over
            dinner.
          </button>
          <button
            onClick={() => {
              setTalkToWomanOnWayToWorkByWalkResult(
                TalkToWomanOnWayToWorkByWalkResult.Reject
              );
              setShowButtons(false);
            }}
          >
            It’s rare to see someone who appreciates the quiet like this. We
            should take advantage of that. How about dinner tonight?
          </button>
          <button
            onClick={() => {
              setTalkToWomanOnWayToWorkByWalkResult(
                TalkToWomanOnWayToWorkByWalkResult.Report
              );
              setShowButtons(false);
            }}
          >
            You know, it’s a rare thing to meet someone like you. It’s almost…
            meant to be.
          </button>
        </>
      )}
      {talkToWomanOnWayToWorkByWalkResult ===
        TalkToWomanOnWayToWorkByWalkResult.Accept && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, there aren’t many people who start their mornings like this—calm and collected. I’d enjoy getting to know you better over dinner."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Nina: I don’t usually agree to things like this, but… okay, maybe dinner wouldn’t hurt."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Perfect. We’ll meet at this restaurant down there in the evening, then. I think you’ll enjoy it."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanOnWayToWorkByWalk(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
      {talkToWomanOnWayToWorkByWalkResult ===
        TalkToWomanOnWayToWorkByWalkResult.Reject && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: It’s rare to see someone who appreciates the quiet like this. We should take advantage of that. How about dinner tonight?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Nina: That’s nice of you, but I have other plans tonight. I just like to keep my mornings quiet."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Come on, it’s just one meal. What’s the harm in that?"
              )
              .start()
              .pauseFor(1000)
              .typeString("Nina: Thanks, but no. I really have to go.")
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanOnWayToWorkByWalk(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
      {talkToWomanOnWayToWorkByWalkResult ===
        TalkToWomanOnWayToWorkByWalkResult.Report && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, it’s a rare thing to meet someone like you. It’s almost… meant to be."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Nina: That’s… kind of intense. I really don’t know you."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: True, but sometimes a stranger knows you better than anyone else. I can tell you’re… different."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Nina: I think I’d better go now. This is a bit much."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Just dinner. Don’t make me regret asking nicely."
              )
              .start()
              .pauseFor(1000)
              .typeString("Nina: I don’t think so. Goodbye.")
              .callFunction(() => {
                setOpenTalkToWomanOnWayToWorkByWalk(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
    </>
  );
};
