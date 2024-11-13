import { useState } from "react";
import {
  LateOnBusChoices,
  TalkToWomanInFrontOfSupermarketResult,
  TransportChoices,
} from "../enums";
import Typewriter from "typewriter-effect";

type TalkToWomanInFrontOfSupermarketProps = {
  setOpenTalkToWomanInFrontOfSupermarket: (
    openTalkToWomanInFrontOfSupermarket: boolean
  ) => void;
  setTalkToWomanInFrontOfSupermarketResult: (
    talkToWomanInFrontOfSupermarketResult: TalkToWomanInFrontOfSupermarketResult
  ) => void;
  talkToWomanInFrontOfSupermarketResult: TalkToWomanInFrontOfSupermarketResult;
  setOpenLunchAtHome: (openLunchAtHome: boolean) => void;
  transportAnswer: TransportChoices;
  lateOnBusAnswer: LateOnBusChoices;
  setOpenWithWomanInCarAfterSupermarket: (
    openWithWomanInCarAfterSupermarket: boolean
  ) => void;
  setOpenWithWomanInParkAfterSupermarket: (
    openWithWomanInParkAfterSupermarket: boolean
  ) => void;
};

export const TalkToWomanInFrontOfSupermarket = ({
  setOpenTalkToWomanInFrontOfSupermarket,
  setTalkToWomanInFrontOfSupermarketResult,
  talkToWomanInFrontOfSupermarketResult,
  setOpenLunchAtHome,
  transportAnswer,
  lateOnBusAnswer,
  setOpenWithWomanInCarAfterSupermarket,
  setOpenWithWomanInParkAfterSupermarket,
}: TalkToWomanInFrontOfSupermarketProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {lateOnBusAnswer === LateOnBusChoices.Car && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You: Need an extra hand with those bags? Looks like you’ve got more than you bargained for."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Amanda: Oh, thanks! I didn’t realize how much I bought until now. But I’ll manage—just need to get to the bus stop."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: No need to wait for the bus. I’m parked right here. I could drop you off—save you the trouble of carrying all that. It’s on my way."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Amanda: Oh, that’s nice of you, but I don’t live far. I can manage, really."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: Come on, I’d be happy to help. Why struggle with all this? It’s just a quick ride, and it’d save you some hassle."
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
                  setTalkToWomanInFrontOfSupermarketResult(
                    TalkToWomanInFrontOfSupermarketResult.Accept
                  );
                  setShowButtons(false);
                }}
              >
                Hey, it’s just a friendly gesture. Sometimes strangers can be a
                big help. I’d hate to see you struggling to the bus with all
                that.
              </button>

              <button
                onClick={() => {
                  setTalkToWomanInFrontOfSupermarketResult(
                    TalkToWomanInFrontOfSupermarketResult.Reject
                  );
                  setShowButtons(false);
                }}
              >
                Seriously, it’d be no trouble. Just a short drive, and you’ll be
                home with everything in one go. It’s rare to find someone to
                help out these days, you know?
              </button>

              <button
                onClick={() => {
                  setTalkToWomanInFrontOfSupermarketResult(
                    TalkToWomanInFrontOfSupermarketResult.Report
                  );
                  setShowButtons(false);
                }}
              >
                It’d be faster and easier for you. Just a neighborly gesture. No
                need to worry.
              </button>
            </div>
          )}
          {talkToWomanInFrontOfSupermarketResult ===
            TalkToWomanInFrontOfSupermarketResult.Accept && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Hey, it’s just a friendly gesture. Sometimes strangers can be a big help. I’d hate to see you struggling to the bus with all that."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: Well… I suppose that would be easier. I do have a lot here."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: Perfect. Let’s make it easy for you today. I’ll have you home in no time."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanInFrontOfSupermarket(false);
                    setOpenWithWomanInCarAfterSupermarket(true);
                  });
              }}
            />
          )}
          {talkToWomanInFrontOfSupermarketResult ===
            TalkToWomanInFrontOfSupermarketResult.Reject && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Seriously, it’d be no trouble. Just a short drive, and you’ll be home with everything in one go. It’s rare to find someone to help out these days, you know?"
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: That’s kind of you, but I really don’t want to inconvenience you. I’ll be fine. Thanks, though!"
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanInFrontOfSupermarket(false);
                    setOpenLunchAtHome(true);
                  });
              }}
            />
          )}
          {talkToWomanInFrontOfSupermarketResult ===
            TalkToWomanInFrontOfSupermarketResult.Report && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: It’d be faster and easier for you. Just a neighborly gesture. No need to worry."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: I appreciate it, but I’m not comfortable getting in a car with someone I don’t know."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: You’re acting like I’m some kind of threat. I’m just offering to help—it’s a shame people can’t trust others these days."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: I’m sorry, but I need to go. Please leave me alone."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanInFrontOfSupermarket(false);
                    setOpenLunchAtHome(true);
                  });
              }}
            />
          )}
        </>
      )}
      {transportAnswer === TransportChoices.Car && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You: Need an extra hand with those bags? Looks like you’ve got more than you bargained for."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Amanda: Oh, thanks! I didn’t realize how much I bought until now. But I’ll manage—just need to get to the bus stop."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: No need to wait for the bus. I’m parked right here. I could drop you off—save you the trouble of carrying all that. It’s on my way."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "Amanda: Oh, that’s nice of you, but I don’t live far. I can manage, really."
                )
                .start()
                .pauseFor(1000)
                .typeString(
                  "You: Come on, I’d be happy to help. Why struggle with all this? It’s just a quick ride, and it’d save you some hassle."
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
                  setTalkToWomanInFrontOfSupermarketResult(
                    TalkToWomanInFrontOfSupermarketResult.Accept
                  );
                  setShowButtons(false);
                }}
              >
                Hey, it’s just a friendly gesture. Sometimes strangers can be a
                big help. I’d hate to see you struggling to the bus with all
                that.
              </button>

              <button
                onClick={() => {
                  setTalkToWomanInFrontOfSupermarketResult(
                    TalkToWomanInFrontOfSupermarketResult.Reject
                  );
                  setShowButtons(false);
                }}
              >
                Seriously, it’d be no trouble. Just a short drive, and you’ll be
                home with everything in one go. It’s rare to find someone to
                help out these days, you know?
              </button>

              <button
                onClick={() => {
                  setTalkToWomanInFrontOfSupermarketResult(
                    TalkToWomanInFrontOfSupermarketResult.Report
                  );
                  setShowButtons(false);
                }}
              >
                It’d be faster and easier for you. Just a neighborly gesture. No
                need to worry.
              </button>
            </div>
          )}
          {talkToWomanInFrontOfSupermarketResult ===
            TalkToWomanInFrontOfSupermarketResult.Accept && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Hey, it’s just a friendly gesture. Sometimes strangers can be a big help. I’d hate to see you struggling to the bus with all that."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: Well… I suppose that would be easier. I do have a lot here."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: Perfect. Let’s make it easy for you today. I’ll have you home in no time."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanInFrontOfSupermarket(false);
                    setOpenWithWomanInCarAfterSupermarket(true);
                  });
              }}
            />
          )}
          {talkToWomanInFrontOfSupermarketResult ===
            TalkToWomanInFrontOfSupermarketResult.Reject && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Seriously, it’d be no trouble. Just a short drive, and you’ll be home with everything in one go. It’s rare to find someone to help out these days, you know?"
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: That’s kind of you, but I really don’t want to inconvenience you. I’ll be fine. Thanks, though!"
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanInFrontOfSupermarket(false);
                    setOpenLunchAtHome(true);
                  });
              }}
            />
          )}
          {talkToWomanInFrontOfSupermarketResult ===
            TalkToWomanInFrontOfSupermarketResult.Report && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: It’d be faster and easier for you. Just a neighborly gesture. No need to worry."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: I appreciate it, but I’m not comfortable getting in a car with someone I don’t know."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: You’re acting like I’m some kind of threat. I’m just offering to help—it’s a shame people can’t trust others these days."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: I’m sorry, but I need to go. Please leave me alone."
                  )
                  .start()
                  .pauseFor(1000)
                  .callFunction(() => {
                    setOpenTalkToWomanInFrontOfSupermarket(false);
                    setOpenLunchAtHome(true);
                  });
              }}
            />
          )}
        </>
      )}
      {lateOnBusAnswer !== LateOnBusChoices.Car &&
        transportAnswer !== TransportChoices.Car && (
          <>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You: Hey there. Those bags look heavy—do you need a hand?"
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: Oh, thanks, but I’ve got it. Just picking up a few things."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: I know a nice park just around the corner. It’s peaceful, and the weather’s great. Why don’t we take a little walk over there? You could set those bags down for a bit and relax."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "Amanda: That’s nice of you, but I was actually planning to head straight home."
                  )
                  .start()
                  .pauseFor(1000)
                  .typeString(
                    "You: Come on, just a short break. Fresh air and a nice park bench—I’ll even carry your bags for you. It’s not every day you get to unwind with good company."
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
                    setTalkToWomanInFrontOfSupermarketResult(
                      TalkToWomanInFrontOfSupermarketResult.Accept
                    );
                    setShowButtons(false);
                  }}
                >
                  Honestly, it’s just a simple walk. You’d be back before you
                  know it, and I think you’ll enjoy it. It’s the perfect day for
                  it..
                </button>

                <button
                  onClick={() => {
                    setTalkToWomanInFrontOfSupermarketResult(
                      TalkToWomanInFrontOfSupermarketResult.Reject
                    );
                    setShowButtons(false);
                  }}
                >
                  Really, it’s just a few minutes away. You’d be back on your
                  way before you know it.
                </button>

                <button
                  onClick={() => {
                    setTalkToWomanInFrontOfSupermarketResult(
                      TalkToWomanInFrontOfSupermarketResult.Report
                    );
                    setShowButtons(false);
                  }}
                >
                  I promise it’s just a friendly stroll. Just a few minutes to
                  relax. You seem like someone who could use a break.
                </button>
              </div>
            )}
            {talkToWomanInFrontOfSupermarketResult ===
              TalkToWomanInFrontOfSupermarketResult.Accept && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You: Honestly, it’s just a simple walk. You’d be back before you know it, and I think you’ll enjoy it. It’s the perfect day for it."
                    )
                    .start()
                    .pauseFor(1000)
                    .typeString(
                      "Amanda: Well… I suppose a short break wouldn’t hurt. I guess I could use a few minutes to rest."
                    )
                    .start()
                    .pauseFor(1000)
                    .typeString(
                      "You: Perfect. You won’t regret it. Sometimes the best moments are the unexpected ones."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenTalkToWomanInFrontOfSupermarket(false);
                      setOpenWithWomanInParkAfterSupermarket(true);
                    });
                }}
              />
            )}
            {talkToWomanInFrontOfSupermarketResult ===
              TalkToWomanInFrontOfSupermarketResult.Reject && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You: Really, it’s just a few minutes away. You’d be back on your way before you know it."
                    )
                    .start()
                    .pauseFor(1000)
                    .typeString(
                      "Amanda: I appreciate it, but I really need to get home. Thanks, though!"
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenTalkToWomanInFrontOfSupermarket(false);
                      setOpenLunchAtHome(true);
                    });
                }}
              />
            )}
            {talkToWomanInFrontOfSupermarketResult ===
              TalkToWomanInFrontOfSupermarketResult.Report && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "You: I promise it’s just a friendly stroll. Just a few minutes to relax. You seem like someone who could use a break."
                    )
                    .start()
                    .pauseFor(1000)
                    .typeString(
                      "Amanda: I appreciate the offer, but I don’t really know you, so I think I’ll pass."
                    )
                    .start()
                    .pauseFor(1000)
                    .typeString(
                      "You: Don’t be so guarded. I’m just being friendly—nothing to worry about. People can still be decent, right?"
                    )
                    .start()
                    .pauseFor(1000)
                    .typeString(
                      "Amanda: Thanks, but I think I’ll just head home."
                    )
                    .start()
                    .pauseFor(1000)
                    .callFunction(() => {
                      setOpenTalkToWomanInFrontOfSupermarket(false);
                      setOpenLunchAtHome(true);
                    });
                }}
              />
            )}
          </>
        )}
    </>
  );
};
