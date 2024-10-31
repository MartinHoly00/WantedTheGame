import { useState } from "react";
import {
  GetUpChoices,
  SomethingToEatHomeChoices,
  TransportChoices,
} from "../enums";
import { Clock } from "./Clock";
import Typewriter from "typewriter-effect";

type TypeOfTransportProps = {
  setOpenTypeOfTransport: (openTypeOfTransport: boolean) => void;
  getUpAnswer: GetUpChoices;
  somethingToEatHomeAnswer: SomethingToEatHomeChoices;
  setTransportAnswer: (transportAnswer: TransportChoices) => void;
  setOpenTakeTheBus: (openTakeTheBus: boolean) => void;
  setOpenInJob: (openInJob: boolean) => void;
  setOpenGasStation: (setOpenGasStation: boolean) => void;
  //neco cim otevreme dalsi juchu
};

export const TypeOfTransport = ({
  setOpenTypeOfTransport,
  getUpAnswer,
  somethingToEatHomeAnswer,
  setTransportAnswer,
  setOpenTakeTheBus,
  setOpenInJob,
  setOpenGasStation,
}: TypeOfTransportProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {getUpAnswer === GetUpChoices.GetUp &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.Yes && (
          <Clock hour="6" minute="30" />
        )}
      {getUpAnswer === GetUpChoices.GetUp &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.No && (
          <Clock hour="6" minute="15" />
        )}
      {getUpAnswer === GetUpChoices.GoBackToSleep &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.Yes && (
          <Clock hour="10" minute="30" />
        )}
      {getUpAnswer === GetUpChoices.GoBackToSleep &&
        somethingToEatHomeAnswer === SomethingToEatHomeChoices.No && (
          <Clock hour="10" minute="15" />
        )}

      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              somethingToEatHomeAnswer === SomethingToEatHomeChoices.Yes
                ? "You made a breakfast and you are going in front of your house."
                : "You are going in front of your house."
            )
            .start()
            .pauseFor(1000)
            .deleteAll()
            .typeString("How do you want to go to work?")
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
              setTransportAnswer(TransportChoices.Car);
              setOpenTypeOfTransport(false);
              {
                getUpAnswer === GetUpChoices.GetUp && setOpenGasStation(true);
              }
              {
                getUpAnswer === GetUpChoices.GoBackToSleep &&
                  setOpenInJob(true);
              }
            }}
          >
            Drive by car
          </button>
          <button
            onClick={() => {
              setTransportAnswer(TransportChoices.Bus);
              setOpenTypeOfTransport(false);
              setOpenTakeTheBus(true);
            }}
          >
            Take the bus
          </button>
        </div>
      )}
    </>
  );
};
