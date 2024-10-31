import { useState } from "react";
import Typewriter from "typewriter-effect";
import { TalkWithWomanGasStationResult } from "../enums";

type TalkWithWomanGasStationProps = {
  setOpenTalkWithWomanGasStation: (
    openTalkWithWomanGasStation: boolean
  ) => void;
  setTalkToWomanOnGasStationResult: (
    talkToWomanOnBusStopResult: TalkWithWomanGasStationResult
  ) => void;
  talkToWomanOnGasStationResult: TalkWithWomanGasStationResult;
  setOpenInJob: (openInJob: boolean) => void;
};

export const TalkWithWomanGasStation = ({
  setOpenTalkWithWomanGasStation,
  setTalkToWomanOnGasStationResult,
  talkToWomanOnGasStationResult,
  setOpenInJob,
}: TalkWithWomanGasStationProps) => {
  const [showButtons, setShowButtons] = useState(false);
  //tady udelat celou konverzaci

  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You: Morning. Not a lot of people out this early, huh? Just you and me."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "Amalia: Yeah, I guess it’s quiet. I’m just filling up before heading to work."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "You: Good idea. Getting things done early. I bet you’re the kind of person who keeps a full schedule."
            )
            .start()
            .pauseFor(1000)
            .typeString("Elise: Something like that.")
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
              setTalkToWomanOnGasStationResult(
                TalkWithWomanGasStationResult.Accept
              );
              setShowButtons(false);
            }}
          >
            You know, we could both use a break. I know this place that makes an
            amazing dinner. How about joining me later? Say, tonight?
          </button>
          <button
            onClick={() => {
              setTalkToWomanOnGasStationResult(
                TalkWithWomanGasStationResult.Reject
              );
              setShowButtons(false);
            }}
          >
            You know, I think we’d have a great conversation over dinner. No
            rush, just something easygoing tonight. What do you say?
          </button>
          <button
            onClick={() => {
              setTalkToWomanOnGasStationResult(
                TalkWithWomanGasStationResult.Report
              );
              setShowButtons(false);
            }}
          >
            You know, I think we’d have a memorable night. Just dinner, but a
            night you’d never forget.
          </button>
        </div>
      )}
      {talkToWomanOnGasStationResult ===
        TalkWithWomanGasStationResult.Accept && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, we could both use a break. I know this place that makes an amazing dinner. How about joining me later? Say, tonight?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Amalia: I mean… I don’t usually say yes to things like this. But... alright, I could meet for dinner. Just something casual."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Perfect. Tonight, then. We’ll meet here, say, 7?"
              )
              .start()
              .pauseFor(1000)
              .typeString("Elise: Sure. I’ll see you then.")
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkWithWomanGasStation(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
      {talkToWomanOnGasStationResult ===
        TalkWithWomanGasStationResult.Reject && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, I think we’d have a great conversation over dinner. No rush, just something easygoing tonight. What do you say?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Amalia: Thanks, but I have plans already. Besides, I don’t usually meet people this way."
              )
              .start()
              .pauseFor(1000)
              .typeString("You: Come on, it’s just dinner. What’s the harm?")
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: I’m flattered, but no, thanks. Really. I have to go."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkWithWomanGasStation(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
      {talkToWomanOnGasStationResult ===
        TalkWithWomanGasStationResult.Report && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, I think we’d have a memorable night. Just dinner, but a night you’d never forget."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Amalia: That’s... kind of an intense way to put it. Why would you say that?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Because not everyone gets a chance like this. You have something... special. And I’m not one to let that go."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: Okay... that’s more than I bargained for. I think I’ll pass on dinner."
              )
              .start()
              .pauseFor(1000)
              .typeString("You: Oh, don’t make me regret asking nicely.")
              .start()
              .pauseFor(1000)
              .typeString("Elise: Excuse me. I really have to go now.")
              .callFunction(() => {
                setOpenTalkWithWomanGasStation(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
    </>
  );
};
