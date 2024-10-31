import { useState } from "react";
import { TalkToWomanInFrontOfCafeResult } from "../enums";
import Typewriter from "typewriter-effect";

type TalkToWomanInFrontOfCafeProps = {
  setTalkToWomanInFrontOfCafeResult: (
    talkToWomanInFrontOfCafeResult: TalkToWomanInFrontOfCafeResult
  ) => void;
  setOpenTalkToWomanInFrontOfCafe: (
    openTalkToWomanInFrontOfCafe: boolean
  ) => void;
  talkToWomanInFrontOfCafeResult: TalkToWomanInFrontOfCafeResult;
  setOpenBackHomeAgain: (openBackHomeAgain: boolean) => void;
  setOpenAfterCafeWithWoman: (openAfterCafeWithWoman: boolean) => void;
};
export const TalkToWomanInFrontOfCafe = ({
  setTalkToWomanInFrontOfCafeResult,
  setOpenTalkToWomanInFrontOfCafe,
  talkToWomanInFrontOfCafeResult,
  setOpenBackHomeAgain,
  setOpenAfterCafeWithWoman,
}: TalkToWomanInFrontOfCafeProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You: Good morning. Not many people out this early, huh?"
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "Elise: Yeah, it’s nice to have a quiet start to the day."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "You: I’m actually heading to this great café down the street. Best coffee in town, if you’re up for it."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "Elise: Oh, I already have my coffee, but thanks. I actually come out here a lot. I like how calm it is in the morning."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "You: Same. It’s rare to find someone else who appreciates it too. Why don’t you join me anyway? We can talk a bit, get to know each other."
            )
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && (
        <div className="buttons__container">
          <button
            onClick={() => {
              setTalkToWomanInFrontOfCafeResult(
                TalkToWomanInFrontOfCafeResult.Accept
              );
              setShowButtons(false);
            }}
          >
            Sometimes the best mornings are the ones that are... unplanned.
            Let’s just take a little time to enjoy it together.
          </button>
          <button
            onClick={() => {
              setTalkToWomanInFrontOfCafeResult(
                TalkToWomanInFrontOfCafeResult.Reject
              );
              setShowButtons(false);
            }}
          >
            You know, it’s not often you meet someone out here. This café could
            be a nice place to start the day. What do you say? Just some coffee
            and conversation.
          </button>
          <button
            onClick={() => {
              setTalkToWomanInFrontOfCafeResult(
                TalkToWomanInFrontOfCafeResult.Report
              );
              setShowButtons(false);
            }}
          >
            You know, it’s a rare thing to meet someone like this. It’s almost
            like it was meant to be.
          </button>
        </div>
      )}
      {talkToWomanInFrontOfCafeResult ===
        TalkToWomanInFrontOfCafeResult.Accept && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: Sometimes the best mornings are the ones that are... unplanned. Let’s just take a little time to enjoy it together."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: I suppose I could. It’s not every day you just bump into someone like this."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Exactly. You won’t regret it. They’ve got great pastries too—perfect with that coffee."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanInFrontOfCafe(false);
                setOpenAfterCafeWithWoman(true);
              });
          }}
        />
      )}
      {talkToWomanInFrontOfCafeResult ===
        TalkToWomanInFrontOfCafeResult.Reject && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, it’s not often you meet someone out here. This café could be a nice place to start the day. What do you say? Just some coffee and conversation."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: That’s nice of you, but I should be on my way. I have a few things to get done before work."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Come on, it’s just coffee. A little break won’t hurt. Life’s too short, right?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: I appreciate the offer, but I’ll pass. I have a lot on my schedule today."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanInFrontOfCafe(false);
                setOpenBackHomeAgain(true);
              });
          }}
        />
      )}
      {talkToWomanInFrontOfCafeResult ===
        TalkToWomanInFrontOfCafeResult.Report && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, it’s a rare thing to meet someone like this. It’s almost like it was meant to be."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: That’s... an intense way to put it. We just met."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Maybe, but I have a good instinct about people. And you—there’s just something about you that’s... unique."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Elise: I don’t know what you mean by that, but I really have to go"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Oh, come on. It’s just a coffee. Don’t make me regret being nice."
              )
              .start()
              .pauseFor(1000)
              .typeString("Elise: I think I’ve heard enough. Goodbye.")
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanInFrontOfCafe(false);
                setOpenBackHomeAgain(true);
              });
          }}
        />
      )}
    </>
  );
};
