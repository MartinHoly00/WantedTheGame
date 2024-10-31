import { useState } from "react";
import {
  LateOnBusChoices,
  StayHomeChoices,
  TalkToWomanInFrontOfCafeChoices,
  TalkToWomanOnWayToWorkByWalkChoices,
} from "../enums";
import Typewriter from "typewriter-effect";

type GoByWalkProps = {
  setOpenGoByWalk: (openGoByWalk: boolean) => void;
  stayHomeAnswer: StayHomeChoices;
  lateOnBusAnswer: LateOnBusChoices;
  setTalkToWomanInFrontOfCafeAnswer: (
    talkToWomanInFrontOfCafeAnswer: TalkToWomanInFrontOfCafeChoices
  ) => void;
  setOpenTalkToWomanInFrontOfCafe: (
    openTalkToWomanInFrontOfCafe: boolean
  ) => void;
  setTalkToWomanOnWayToWorkByWalkAnswer: (
    talkToWomanOnWayToWorkByWalkAnswer: TalkToWomanOnWayToWorkByWalkChoices
  ) => void;
  setOpenTalkToWomanOnWayToWorkByWalk: (
    openTalkToWomanOnWayToWorkByWalk: boolean
  ) => void;
  setOpenInJob: (openInJob: boolean) => void;
  setOpenBackHomeAgain: (openBackHomeAgain: boolean) => void;
};

export const GoByWalk = ({
  setOpenGoByWalk,
  stayHomeAnswer,
  lateOnBusAnswer,
  setTalkToWomanInFrontOfCafeAnswer,
  setOpenTalkToWomanInFrontOfCafe,
  setTalkToWomanOnWayToWorkByWalkAnswer,
  setOpenTalkToWomanOnWayToWorkByWalk,
  setOpenInJob,
  setOpenBackHomeAgain,
}: GoByWalkProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {/* //pokud se rozhodl jít do kavárny po tom, co se vrátil domů */}
      {stayHomeAnswer === StayHomeChoices.GoToCafe && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You decided to go to the cafe.")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "On the way to the cafe, you see young woman. Do you want to talk to her?"
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
                  setTalkToWomanInFrontOfCafeAnswer(
                    TalkToWomanInFrontOfCafeChoices.Yes
                  );
                  setOpenGoByWalk(false);
                  setOpenTalkToWomanInFrontOfCafe(true);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setTalkToWomanInFrontOfCafeAnswer(
                    TalkToWomanInFrontOfCafeChoices.No
                  );
                  setOpenGoByWalk(false);
                  setOpenBackHomeAgain(true);
                }}
              >
                No
              </button>
            </div>
          )}
        </>
      )}

      {/* //pokud se rozhodl jít pěšky do práce po tom, co mu ujel autobus */}
      {lateOnBusAnswer === LateOnBusChoices.Walk && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("You decided to walk to work.")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "On the way to work, you met a pretty young woman, do you want to talk to her?"
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
                  setTalkToWomanOnWayToWorkByWalkAnswer(
                    TalkToWomanOnWayToWorkByWalkChoices.Yes
                  );
                  setOpenGoByWalk(false);
                  setOpenTalkToWomanOnWayToWorkByWalk(true);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setTalkToWomanOnWayToWorkByWalkAnswer(
                    TalkToWomanOnWayToWorkByWalkChoices.No
                  );
                  setOpenGoByWalk(false);
                  setOpenInJob(true);
                }}
              >
                No
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
