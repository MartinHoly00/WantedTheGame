import { useState } from "react";
import { GasStationChoices } from "../enums";
import Typewriter from "typewriter-effect";

type GasStationProps = {
  setOpenGasStation: (openGasStation: boolean) => void;
  setOpenInJob: (openInJob: boolean) => void;
  setOpenTalkWithWomanGasStation: (
    openTalkWithWomanGasStation: boolean
  ) => void;
  setGasStationAnswer: (gasStationAnswer: GasStationChoices) => void;
};

export const GasStation = ({
  setOpenGasStation,
  setGasStationAnswer,
  setOpenInJob,
  setOpenTalkWithWomanGasStation,
}: GasStationProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You are driving your car but you are hungry. You see a gas station and you decide to stop there."
            )
            .start()
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              "In the gas station you see pretty young woman, do you want to approach her?"
            )
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setShowButtons(true);
            });
        }}
      />
      {showButtons && (
        <>
          <button
            onClick={() => {
              setGasStationAnswer(GasStationChoices.TalkToWoman);
              setOpenGasStation(false);
              setOpenTalkWithWomanGasStation(true);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setGasStationAnswer(GasStationChoices.IgnoreWoman);
              setOpenGasStation(false);
              setOpenInJob(true);
            }}
          >
            No
          </button>
        </>
      )}
    </>
  );
};
