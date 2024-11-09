import { useState } from "react";
import { TalkToWomanInFrontOfRestaurantResult } from "../enums";
import Typewriter from "typewriter-effect";

type TalkToWomanInFrontOfRestaurantProps = {
  setOpenTalkToWomanInFrontOfRestaurant: (
    openTalkToWomanInFrontOfRestaurant: boolean
  ) => void;
  setTalkToWomanInFrontOfRestaurantResult: (
    talkToWomanInFrontOfRestaurantResult: TalkToWomanInFrontOfRestaurantResult
  ) => void;
  setOpenBackFromRestaurant: (openBackFromRestaurant: boolean) => void;
  talkToWomanInFrontOfRestaurantResult: TalkToWomanInFrontOfRestaurantResult;
  setOpenAfterRestaurantWithWoman: (
    openAfterRestaurantWithWoman: boolean
  ) => void;
};

export const TalkToWomanInFrontOfRestaurant = ({
  setOpenTalkToWomanInFrontOfRestaurant,
  setTalkToWomanInFrontOfRestaurantResult,
  setOpenBackFromRestaurant,
  talkToWomanInFrontOfRestaurantResult,
  setOpenAfterRestaurantWithWoman,
}: TalkToWomanInFrontOfRestaurantProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You: Afternoon. You look like you’re deciding whether to go in or not."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "Catie: Yeah, I was just passing by and thought it looked nice. I wasn’t really planning on stopping."
            )
            .start()
            .pauseFor(1000)
            .typeString(
              "You: You should. I’m actually headed in myself. It’s a great spot, not too crowded around this time. Just the way I like it."
            )
            .start()
            .pauseFor(1000)
            .typeString("Catie: It does seem cozy. Maybe another time, though.")
            .start()
            .pauseFor(1000)
            .typeString(
              "You: Come on. I don’t often meet interesting people by chance. It’s just lunch, and it’d be my treat."
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
              setTalkToWomanInFrontOfRestaurantResult(
                TalkToWomanInFrontOfRestaurantResult.Accept
              );
              setShowButtons(false);
            }}
          >
            I know a few dishes here that are fantastic. I think you’ll really
            enjoy it. Why not give it a shot?
          </button>
          <button
            onClick={() => {
              setTalkToWomanInFrontOfRestaurantResult(
                TalkToWomanInFrontOfRestaurantResult.Reject
              );
              setShowButtons(false);
            }}
          >
            You know, it’s rare to get a chance to slow down, meet someone, and
            enjoy a meal. How about joining me? No pressure, just good food and
            conversation.
          </button>
          <button
            onClick={() => {
              setTalkToWomanInFrontOfRestaurantResult(
                TalkToWomanInFrontOfRestaurantResult.Report
              );
              setShowButtons(false);
            }}
          >
            It’s not often I get the chance to meet someone alone like this.
          </button>
        </div>
      )}
      {talkToWomanInFrontOfRestaurantResult ===
        TalkToWomanInFrontOfRestaurantResult.Accept && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: I know a few dishes here that are fantastic. I think you’ll really enjoy it. Why not give it a shot?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Catie: I suppose it wouldn’t hurt. I’ll take you up on that."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Good choice. Sometimes the best meals come from unplanned moments."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanInFrontOfRestaurant(false);
                setOpenAfterRestaurantWithWoman(true);
              });
          }}
        />
      )}
      {talkToWomanInFrontOfRestaurantResult ===
        TalkToWomanInFrontOfRestaurantResult.Reject && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: You know, it’s rare to get a chance to slow down, meet someone, and enjoy a meal. How about joining me? No pressure, just good food and conversation."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Catie: That’s nice of you, but I really should get going. I just stopped here on my way somewhere else."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Come on, it’s only lunch. What’s a few minutes out of your day?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Catie: Thanks, but I’ll have to pass. Enjoy your meal, though."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanInFrontOfRestaurant(false);
                setOpenBackFromRestaurant(true);
              });
          }}
        />
      )}
      {talkToWomanInFrontOfRestaurantResult ===
        TalkToWomanInFrontOfRestaurantResult.Report && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You: It’s not often I get the chance to meet someone alone like this."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Catie: Um… I was just passing by. Didn’t mean to intrude."
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Oh, no intrusion. I’m actually about to have lunch, and it seems like a rare chance to enjoy some company. Why don’t you join me?"
              )
              .start()
              .pauseFor(1000)
              .typeString("Catie: I don’t think so. I… didn’t plan on staying.")
              .start()
              .pauseFor(1000)
              .typeString(
                "You: Come on, it’s just a meal. You seem like someone who could handle a bit of spontaneity. Or… are you nervous?"
              )
              .start()
              .pauseFor(1000)
              .typeString(
                "Catie: I think I’ll have to pass. Please, excuse me."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenTalkToWomanInFrontOfRestaurant(false);
                setOpenBackFromRestaurant(true);
              });
          }}
        />
      )}
    </>
  );
};
