import { useState } from "react";
import { Clock } from "./Clock";
import {
  GetUpChoices,
  LateOnBusChoices,
  SomethingToEatHomeChoices,
  TalkToWomanOnBusStopChoices,
} from "../enums";
import Typewriter from "typewriter-effect";

type TakeTheBusProps = {
  setOpenTakeTheBus: (openTakeTheBus: boolean) => void;
  getUpAnswer: GetUpChoices;
  somethingToEatHomeAnswer: SomethingToEatHomeChoices;
  setLateOnBusAnswer: (lateOnBusAnswer: LateOnBusChoices) => void;
  setTalkToWomanOnBusStopAnswer: (
    talkToWomanOnBusStopAnswer: TalkToWomanOnBusStopChoices
  ) => void;
  setOpenTalkToWomanOnBusStop: (openTalkToWomanOnBusStop: boolean) => void;
  setOpenInJob: (openInJob: boolean) => void;
  setOpenBackHome: (openBackHome: boolean) => void;
  setOpenGoByWalk: (openGoByWalk: boolean) => void;
};

export const TakeTheBus = ({
  setOpenTakeTheBus,
  getUpAnswer,
  somethingToEatHomeAnswer,
  setLateOnBusAnswer,
  setTalkToWomanOnBusStopAnswer,
  setOpenTalkToWomanOnBusStop,
  setOpenInJob,
  setOpenBackHome,
  setOpenGoByWalk,
}: TakeTheBusProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {getUpAnswer === GetUpChoices.GetUp &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.Yes && (
          <Clock hour="6" minute="45" />
        )}
      {getUpAnswer === GetUpChoices.GetUp &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.No && (
          <Clock hour="6" minute="30" />
        )}
      {getUpAnswer === GetUpChoices.GoBackToSleep &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.Yes && (
          <Clock hour="10" minute="45" />
        )}
      {getUpAnswer === GetUpChoices.GoBackToSleep &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.No && (
          <Clock hour="10" minute="30" />
        )}
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("You got to the bus stop.")
            .start()
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              getUpAnswer === GetUpChoices.GoBackToSleep
                ? "You found out you missed the last bus, what are you gonna do?"
                : "You see a young lady waiting for the bus, do you want to approach her?"
            )
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && getUpAnswer === GetUpChoices.GoBackToSleep && (
        <>
          <button
            onClick={() => {
              setOpenTakeTheBus(false);
              setLateOnBusAnswer(LateOnBusChoices.BackHome);
              setOpenBackHome(true); //otevre okno pro navrat domu
            }}
          >
            Go back home and don't go to work.
          </button>
          <button
            onClick={() => {
              setOpenTakeTheBus(false);
              setLateOnBusAnswer(LateOnBusChoices.Walk);
              setOpenGoByWalk(true); //otevre okno pro prochazku do prace
            }}
          >
            Go to work by a walk.
          </button>
          <button
            onClick={() => {
              setOpenTakeTheBus(false);
              setLateOnBusAnswer(LateOnBusChoices.Car);
              setOpenInJob(true); //otevre praci
            }}
          >
            Go back for a car.
          </button>
        </>
      )}
      {showButtons && getUpAnswer === GetUpChoices.GetUp && (
        <>
          <button
            onClick={() => {
              setOpenTakeTheBus(false);
              setTalkToWomanOnBusStopAnswer(TalkToWomanOnBusStopChoices.Yes);
              setOpenTalkToWomanOnBusStop(true); //otevre konverzaci s zenou na autobusove zastavce
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setOpenTakeTheBus(false);
              setTalkToWomanOnBusStopAnswer(TalkToWomanOnBusStopChoices.No);
              setOpenInJob(true); //otevre praci
            }}
          >
            No
          </button>
        </>
      )}
    </>
  );
};
