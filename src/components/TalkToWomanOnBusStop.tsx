import { useState } from "react";
import Typewriter from "typewriter-effect";
import { TalkToWomanOnBusStopResult } from "../enums";

type TalkWithWomanOnBusStopProps = {
  setOpenTalkWithWomanOnBusStop: (openTalkWithWomanOnBusStop: boolean) => void;
  setTalkToWomanOnBusStopResult: (
    talkToWomanOnBusStopResult: TalkToWomanOnBusStopResult
  ) => void;
  talkToWomanOnBusStopResult: TalkToWomanOnBusStopResult;
  setOpenInJob: (openInJob: boolean) => void;
};

export const TalkWithWomanOnBusStop = ({
  setOpenTalkWithWomanOnBusStop, //zavreni teto komponenty
  setTalkToWomanOnBusStopResult, //vysledek konverzace(nastaveni)
  talkToWomanOnBusStopResult, //vysledek konverzace
  setOpenInJob, //otevreni dalsi komponenty
}: TalkWithWomanOnBusStopProps) => {
  const [showButtons, setShowButtons] = useState(false);
  //tady udelat celou konverzaci

  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You: Hey there, I don’t usually do this, but I saw you here alone and thought maybe you’d like some company?"
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "Elise: Oh, thank you, but I was just about to leave, actually."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "You: Just for a moment? I promise I’m harmless. Besides, maybe you’ll enjoy a good story or two over a nice dinner?"
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "Elise: That’s... unexpected. It’s not every day a stranger asks me to dinner."
            )
            .start()
            .pauseFor(1000)
            .typeString("Elise: What makes you think we’d even get along?")
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && (
        <div className="buttons__container">
          {/* She Agrees to Go to Dinner */}
          <button
            onClick={() => {
              setTalkToWomanOnBusStopResult(TalkToWomanOnBusStopResult.Accept);
              setShowButtons(false);
            }}
          >
            Well, I have a knack for making people laugh. Plus, who doesn’t like
            to be treated to a nice meal?
          </button>
          {/* She Declines the Dinner Invitation */}
          <button
            onClick={() => {
              setTalkToWomanOnBusStopResult(TalkToWomanOnBusStopResult.Reject);
              setShowButtons(false);
            }}
          >
            I just thought it would be a nice break from the usual. You know, to
            meet someone new.
          </button>
          {/*  She Decides to Report Him to the Police */}
          <button
            onClick={() => {
              setTalkToWomanOnBusStopResult(TalkToWomanOnBusStopResult.Report);
              setShowButtons(false);
            }}
          >
            It’s rare to meet someone who’s... let’s say, so interesting. I
            think we could have an unforgettable evening together
          </button>
        </div>
      )}
      {talkToWomanOnBusStopResult === TalkToWomanOnBusStopResult.Accept && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: Well, I have a knack for making people laugh. Plus, who doesn’t like to be treated to a nice meal?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: Alright, fair point. I suppose dinner can’t hurt. When were you thinking?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: How about today at 8 PM at the LocaCaffe ? We can keep it low-key"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: Alright, fine. Here at 7, but I’ll hold you to that low-key promise."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkWithWomanOnBusStop(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
      {talkToWomanOnBusStopResult === TalkToWomanOnBusStopResult.Reject && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: I just thought it would be a nice break from the usual. You know, to meet someone new."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: Maybe, but I don’t know you at all. I mean, why the sudden interest?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Life’s short. We should grab chances when they come along."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: I appreciate it, really, but I think I’ll pass on the dinner. Maybe some other time."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkWithWomanOnBusStop(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
      {talkToWomanOnBusStopResult === TalkToWomanOnBusStopResult.Report && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: It’s rare to meet someone who’s... let’s say, so interesting. I think we could have an unforgettable evening together."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: That’s a strong way to put it. Unforgettable?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Well, let’s just say I like people who are... different. Not everyone stands out to me, you know? But you... you have something special."
              )
              .start()
              .pauseFor(1000)
              .typeString("Elise: I’m... not sure what you mean by that.")
              .start()
              .pauseFor(1000)
              .typeString(
                "You: You’d be surprised what I notice about people. I can read them... like you, for instance."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: I’d say you have this... cautious streak, yet you’re curious too"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: Um, okay... That’s a bit much, don’t you think?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Maybe. But I don’t like wasting time. I know what I want."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: Look, I think it’s best I head home. This is... feeling strange."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: It’s a dangerous world out there. Better to be in the company of someone who understands it, wouldn’t you say?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: You know, actually, I’m not comfortable with this conversation at all. I think I’ll just go."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Oh, come on. Don’t play hard to get. It could be fun."
              )
              .callFunction(() => {
                setOpenTalkWithWomanOnBusStop(false);
                setOpenInJob(true);
              });
          }}
        />
      )}
    </>
  );
};
