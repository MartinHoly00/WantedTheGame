import { useState } from "react";
import {
  GetUpChoices,
  InJobChoices,
  LateOnBusChoices,
  TalkToWomanOnBusStopResult,
  TalkToWomanOnWayToWorkByWalkResult,
  TalkWithWomanGasStationResult,
  TransportChoices,
} from "../enums";
import Typewriter from "typewriter-effect";

type InJobProps = {
  talkToWomanOnBusStopResult: TalkToWomanOnBusStopResult;
  talkToWomanOnGasStationResult: TalkWithWomanGasStationResult;
  talkToWomanOnWayToWorkByWalkResult: TalkToWomanOnWayToWorkByWalkResult;
  setOpenInJob: (openInJob: boolean) => void;
  setOpenGameOver: (openGameOver: boolean) => void;
  getUpAnswer: GetUpChoices;
  setOpenGoingFromWorkWalk: (openGoingFromWork: boolean) => void;
  lateOnBusAnswer: LateOnBusChoices;
  transportAnswer: TransportChoices;
  setOpenBackHomeAfterWork: (openBackHomeAfterWork: boolean) => void;
  setOpenInSupermarket: (openInSupermarket: boolean) => void;
  setInJobAnswer: (inJobAnswer: InJobChoices) => void;
  setOpenWaitingForBusAfterJob: (openWaitingForBusAfterJob: boolean) => void;
  setOpenGoToRestaurant: (openGoToRestaurant: boolean) => void;
  setOpenBackHomeAgain: (openBackHomeAgain: boolean) => void;
  setOpenGoHomeAfterWorkingCar: (openGoHomeAfterWorkingCar: boolean) => void;
  setOpenGoToSupermarketAfterWork: (
    openGoToSupermarketAfterWork: boolean
  ) => void;
  setOpenGoHomeByWalkAfterWork: (openGoHomeByWalkAfterWork: boolean) => void;
};

export const InJob = ({
  talkToWomanOnBusStopResult,
  talkToWomanOnGasStationResult,
  talkToWomanOnWayToWorkByWalkResult,
  setOpenInJob,
  setOpenGameOver,
  getUpAnswer,
  setOpenGoingFromWorkWalk,
  lateOnBusAnswer,
  transportAnswer,
  setOpenBackHomeAfterWork,
  setOpenInSupermarket,
  setInJobAnswer,
  setOpenWaitingForBusAfterJob,
  setOpenGoToRestaurant,
  setOpenBackHomeAgain,
  setOpenGoHomeAfterWorkingCar,
  setOpenGoToSupermarketAfterWork,
  setOpenGoHomeByWalkAfterWork,
}: InJobProps) => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <>
      {/* end of the game */}
      {talkToWomanOnBusStopResult === TalkToWomanOnBusStopResult.Report && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "You are in the job and you are working on your computer. In the middle of the day, the police came to you and took you to the police station."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "Elise reported you and you are giving your statement about the situation."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "Police wanted to release you but the police have linked you to two homicides in the area this year."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You are arrested and you are going to the court. You are sentenced to life in prison."
              )
              .start()
              .pauseFor(1000)
              .callFunction(() => {
                setOpenInJob(false);
                setOpenGameOver(true);
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
                "You are in job. While you're working at your desk, the police arrive unexpectedly and escort you to the station."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "Amalia has filed a report against you, and now you're explaining your side of the story."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "Though the police consider letting you go, they uncover connections between you and two recent homicides."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You're taken to court and ultimately sentenced to life in prison."
              )
              .callFunction(() => {
                setOpenInJob(false);
                setOpenGameOver(true);
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
                "You're at work, focused on your tasks, when suddenly the police arrive and bring you to the station."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "Nina has reported you, and now you're giving your side of the story."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "The police consider releasing you but have connected you to two recent homicides in the area."
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "You're taken to court and sentenced to life imprisonment."
              )
              .callFunction(() => {
                setOpenInJob(false);
                setOpenGameOver(true);
              });
          }}
        />
      )}
      {/* continue play */}
      {getUpAnswer === GetUpChoices.GetUp && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You made it to work. You've worked your eight-hour shift and you're about to leave."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Do you want to stop somewhere on your way home?")
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setShowButtons(true);
                });
            }}
          />
          {showButtons && transportAnswer !== TransportChoices.Bus && (
            <div className="buttons__container">
              <button
                onClick={() => {
                  setOpenInJob(false);
                  setInJobAnswer(InJobChoices.GoBackHome);
                  setOpenGoHomeAfterWorkingCar(true);
                }}
              >
                Go Home
              </button>
              <button
                onClick={() => {
                  setOpenInJob(false);
                  setInJobAnswer(InJobChoices.GoToSupermarket);
                  setOpenGoToSupermarketAfterWork(true);
                }}
              >
                Go To Supermarket
              </button>
            </div>
          )}
          {showButtons && transportAnswer === TransportChoices.Bus && (
            <div className="buttons__container">
              <button
                onClick={() => {
                  setOpenInJob(false);
                  setInJobAnswer(InJobChoices.GoToSupermarket);
                  setOpenGoToSupermarketAfterWork(true);
                }}
              >
                Go To Supermarket
              </button>
              <button
                onClick={() => {
                  setOpenInJob(false);
                  setInJobAnswer(InJobChoices.WaitForBus);
                  setOpenWaitingForBusAfterJob(true);
                }}
              >
                Wait for bus
              </button>
              <button
                onClick={() => {
                  setOpenInJob(false);
                  setInJobAnswer(InJobChoices.GoHomeByWalk);
                  setOpenGoHomeByWalkAfterWork(true);
                }}
              >
                Go Home by walk
              </button>
            </div>
          )}
        </>
      )}
      {getUpAnswer === GetUpChoices.GoBackToSleep && (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "You came to the job. Your boss is angry with you because you are late. He approaches you."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "Boss: You are late again. You are fired. Get out of here."
                )
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("What do you want to do now?")
                .start()
                .pauseFor(1000)
                .callFunction(() => {
                  setShowButtons(true);
                });
            }}
          />
          {(showButtons && lateOnBusAnswer === LateOnBusChoices.Car) ||
            (showButtons && transportAnswer === TransportChoices.Car && (
              <div className="buttons__container">
                <button
                  onClick={() => {
                    setOpenInJob(false);
                    setInJobAnswer(InJobChoices.GoBackHome);
                    setOpenBackHomeAgain(true);
                  }}
                >
                  Go Home
                </button>
                <button
                  onClick={() => {
                    setOpenInJob(false);
                    setInJobAnswer(InJobChoices.GoToRestaurant);
                    setOpenGoToRestaurant(true);
                  }}
                >
                  Go To Restaurant
                </button>
                <button
                  onClick={() => {
                    setOpenInJob(false);
                    setInJobAnswer(InJobChoices.GoToSupermarket);
                    setOpenInSupermarket(true);
                  }}
                >
                  Go To Supermarket
                </button>
              </div>
            ))}
          {showButtons && lateOnBusAnswer === LateOnBusChoices.Walk && (
            <div className="buttons__container">
              <button
                onClick={() => {
                  setOpenInJob(false);
                  setInJobAnswer(InJobChoices.GoHomeByWalk);
                  setOpenGoingFromWorkWalk(true);
                }}
              >
                Go Home by a walk
              </button>
              <button
                onClick={() => {
                  setOpenInJob(false);
                  setInJobAnswer(InJobChoices.GoToSupermarket);
                  setOpenInSupermarket(true);
                }}
              >
                Go To Supermarket
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
