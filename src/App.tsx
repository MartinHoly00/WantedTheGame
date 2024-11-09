import { useState } from "react";
import "./App.css";
import { Intro } from "./components/Intro";
import { StartMenu } from "./components/StartMenu";
import { BackToSleep } from "./components/BackToSleep";
import {
  AfterCafeWithWomanChoices,
  AfterRestaurantWithWomanChoices,
  BackHomeAgainChoices,
  BackHomeStayChoices,
  GasStationChoices,
  GetUpChoices,
  GoingFromWorkWalkChoices,
  InCarWithWomanFromRestaurantChoices,
  InJobChoices,
  InParkWithWomanFromRestaurantChoices,
  LateOnBusChoices,
  LunchTimeAtHomeChoices,
  SomethingToEatHomeChoices,
  StayHomeChoices,
  TalkToWomanInFrontOfCafeChoices,
  TalkToWomanInFrontOfCafeResult,
  TalkToWomanInFrontOfRestaurantChoices,
  TalkToWomanInFrontOfRestaurantResult,
  TalkToWomanOnBusStopChoices,
  TalkToWomanOnBusStopResult,
  TalkToWomanOnWayToWorkByWalkChoices,
  TalkToWomanOnWayToWorkByWalkResult,
  TalkWithWomanGasStationResult,
  TransportChoices,
  WomanBodyInFrontOfHouseResult,
} from "./enums";
import { WantToEatHome } from "./components/WantToEatHome";
import { TypeOfTransport } from "./components/TypeOfTransport";
import { TakeTheBus } from "./components/TakeTheBus";
import { InJob } from "./components/InJob";
import { TalkWithWomanOnBusStop } from "./components/TalkToWomanOnBusStop";
import { GasStation } from "./components/GasStation";
import { TalkWithWomanGasStation } from "./components/TalkWithWomanGasStation";
import { BackHome } from "./components/BackHome";
import { GoByWalk } from "./components/GoByWalk";
import { TalkToWomanInFrontOfCafe } from "./components/TalkToWomanInFrontOfCafe";
import { TalkToWomanOnWayToWork } from "./components/TalkToWomanOnWayToWork";
import { BackHomeAgain } from "./components/BackHomeAgain";
import { AfterCafeWithWoman } from "./components/AfterCafeWithWoman";
import { KillWomanAfterCafe } from "./components/KillWomanAfterCafe";
import { GameOver } from "./components/GameOver";
import { GoingFromWorkWalk } from "./components/GoingFromWorkWalk";
import { InSupermarket } from "./components/InSupermarket";
import { WaitingForBusAfterJob } from "./components/WaitingForBusAfterJob";
import { BackHomeStay } from "./components/BackHomeStay";
import { GoToRestaurant } from "./components/GoToRestaurant";
import { BackFromRestaurant } from "./components/BackFromRestaurant";
import { HomeAtEvening } from "./components/HomeAtEvening";
import { TalkToWomanInFrontOfRestaurant } from "./components/TalkToWomanInFrontOfRestaurant";
import { AfterRestaurantWithWoman } from "./components/AfterRestaurantWithWoman";
import { LunchTimeAtHome } from "./components/LunchTimeAtHome";
import { InCarWithWomanFromRestaurant } from "./components/InCarWithWomanFromRestaurant";
import { InParkWithWomanFromRestaurant } from "./components/InParkWithWomanFromRestaurant";
import { WomanBodyInFrontOfHouse } from "./components/WomanBodyInFrontOfHouse";

function App() {
  //variables for the game flow
  const [openStartMenu, setOpenStartMenu] = useState(false); //true
  const [openIntro, setOpenIntro] = useState(false);
  const [openBackToSleep, setOpenBackToSleep] = useState(false);
  const [openWantToEatHome, setOpenWantToEatHome] = useState(false);
  const [openTypeOfTransport, setOpenTypeOfTransport] = useState(false);
  //možnosti pokračování po vybrání transportu
  const [openTakeTheBus, setOpenTakeTheBus] = useState(false);
  const [openInJob, setOpenInJob] = useState(false);
  const [openGasStation, setOpenGasStation] = useState(false);

  const [openTalkWithWomanGasStation, setOpenTalkWithWomanGasStation] =
    useState(false);

  const [openTalkToWomanOnBusStop, setOpenTalkToWomanOnBusStop] =
    useState(false);
  const [openBackHome, setOpenBackHome] = useState(false);
  const [openGoByWalk, setOpenGoByWalk] = useState(false);
  const [openTalkToWomanInFrontOfCafe, setOpenTalkToWomanInFrontOfCafe] =
    useState(false);
  const [
    openTalkToWomanOnWayToWorkByWalk,
    setOpenTalkToWomanOnWayToWorkByWalk,
  ] = useState(false);
  const [openBackHomeAgain, setOpenBackHomeAgain] = useState(false);
  const [openAfterCafeWithWoman, setOpenAfterCafeWithWoman] = useState(false);
  const [openKillWomanAfterCafe, setOpenKillWomanAfterCafe] = useState(false);
  const [openGameOver, setOpenGameOver] = useState(false);
  const [openGoingFromWorkWalk, setOpenGoingFromWorkWalk] = useState(false);
  const [openBackHomeAfterWork, setOpenBackHomeAfterWork] = useState(false);
  const [openInSupermarket, setOpenInSupermarket] = useState(false);
  const [openWaitingForBusAfterJob, setOpenWaitingForBusAfterJob] =
    useState(false);
  const [openBackHomeStay, setOpenBackHomeStay] = useState(false);
  const [openLunchTimeAtHome, setOpenLunchTimeAtHome] = useState(false);
  const [openGoToRestaurant, setOpenGoToRestaurant] = useState(false);
  const [openBackFromRestaurant, setOpenBackFromRestaurant] = useState(false);
  const [
    openInCarWithWomanFromRestaurant,
    setOpenInCarWithWomanFromRestaurant,
  ] = useState(false);
  const [
    openInParkWithWomanFromRestaurant,
    setOpenInParkWithWomanFromRestaurant,
  ] = useState(false);
  const [
    openTalkToWomanInFrontOfRestaurant,
    setOpenTalkToWomanInFrontOfRestaurant,
  ] = useState(false);
  const [openAfterRestaurantWithWoman, setOpenAfterRestaurantWithWoman] =
    useState(false);
  const [openHomeAtEvening, setOpenHomeAtEvening] = useState(false);
  const [openWomanBodyInFrontOfHouse, setOpenWomanBodyInFrontOfHouse] =
    useState(true); //false

  //variables answers and choices for the game
  const [getUpAnswer, setGetUpAnswer] = useState<GetUpChoices>(null as any); //odpověď na otázku zda vstát nebo ne.
  const [somethingToEatHomeAnswer, setSomethingToEatHomeAnswer] =
    useState<SomethingToEatHomeChoices>(null as any); //odpověď na otázku zda chceš něco doma jíst.
  const [transportAnswer, setTransportAnswer] = useState<TransportChoices>(
    null as any
  ); //odpověď na otázku jak se dostaneš do práce.
  const [lateOnBusAnswer, setLateOnBusAnswer] = useState<LateOnBusChoices>(
    null as any
  ); //odpověď na otázku co budeš dělat když jsi přišel pozdě na autobus.
  const [talkToWomanOnBusStopAnswer, setTalkToWomanOnBusStopAnswer] =
    useState<TalkToWomanOnBusStopChoices>(null as any); //odpověď na otázku zda oslovit ženu na autobusové zastávce.
  const [talkToWomanOnBusStopResult, setTalkToWomanOnBusStopResult] =
    useState<TalkToWomanOnBusStopResult>(null as any); //výsledek oslovování ženy na autobusové zastávce.
  const [gasStationAnswer, setGasStationAnswer] = useState<GasStationChoices>(
    null as any
  ); //odpověď na otázku co uděláš na benzínce.
  const [talkToWomanOnGasStationResult, setTalkToWomanOnGasStationResult] =
    useState<TalkWithWomanGasStationResult>(null as any); //odpověď na otázku zda oslovit ženu na benzínce.
  const [stayHomeAnswer, setStayHomeAnswer] = useState<StayHomeChoices>(
    null as any
  ); //odpověď na otázku zda zůstat doma.

  const [talkToWomanInFrontOfCafeAnswer, setTalkToWomanInFrontOfCafeAnswer] =
    useState<TalkToWomanInFrontOfCafeChoices>(null as any); //odpověď na otázku zda oslovit ženu před kavárnou.
  const [talkToWomanInFrontOfCafeResult, setTalkToWomanInFrontOfCafeResult] =
    useState<TalkToWomanInFrontOfCafeResult>(null as any); //výsledek oslovování ženy před kavárnou.

  const [
    talkToWomanOnWayToWorkByWalkAnswer,
    setTalkToWomanOnWayToWorkByWalkAnswer,
  ] = useState<TalkToWomanOnWayToWorkByWalkChoices>(null as any); //odpověď na otázku zda oslovit ženu na cestě do práce pěšky.¨
  const [
    talkToWomanOnWayToWorkByWalkResult,
    setTalkToWomanOnWayToWorkByWalkResult,
  ] = useState<TalkToWomanOnWayToWorkByWalkResult>(null as any); //výsledek oslovování ženy na cestě do práce pěšky.
  const [afterCafeWithWomanAnswer, setAfterCafeWithWomanAnswer] =
    useState<AfterCafeWithWomanChoices>(null as any); //odpověď na otázku co uděláš po kav
  const [inJobAnswer, setInJobAnswer] = useState<InJobChoices>(null as any); //odpověď na otázku co uděláš po kav
  const [backHomeStayAnswer, setBackHomeStayAnswer] =
    useState<BackHomeStayChoices>(null as any); //odpověď na otázku co uděláš po tom co jsi zůstal doma a nešel do kavárny
  const [
    talkToWomanInFrontOfRestaurantAnswer,
    setTalkToWomanInFrontOfRestaurantAnswer,
  ] = useState<TalkToWomanInFrontOfRestaurantChoices>(null as any); //odpověď na otázku zda oslovit ženu před restaurací
  const [
    talkToWomanInFrontOfRestaurantResult,
    setTalkToWomanInFrontOfRestaurantResult,
  ] = useState<TalkToWomanInFrontOfRestaurantResult>(null as any); //výsledek oslovování ženy před restaurací
  const [afterRestaurantWithWomanAnswer, setAfterRestaurantWithWomanAnswer] =
    useState<AfterRestaurantWithWomanChoices>(null as any); //odpověď na otázku co uděláš po restauraci s ženou
  const [
    inParkWithWomanFromRestaurantAnswer,
    setInParkWithWomanFromRestaurantAnswer,
  ] = useState<InParkWithWomanFromRestaurantChoices>(null as any); //odpověď na otázku co uděláš po restaur
  const [
    inCarWithWomanFromRestaurantAnswer,
    setInCarWithWomanFromRestaurantAnswer,
  ] = useState<InCarWithWomanFromRestaurantChoices>(null as any); //odpověď na otázku co uděláš po restaur
  const [womanBodyInFrontOfHouseResult, setWomanBodyInFrontOfHouseResult] =
    useState<WomanBodyInFrontOfHouseResult>(null as any); //odpověď na otázku co uděláš po restaur

  const [goingFromWorkWalkAnswer, setGoingFromWorkWalkAnswer] =
    useState<GoingFromWorkWalkChoices>(null as any);
  const [backHomeAgainAnswer, setBackHomeAgainAnswer] =
    useState<BackHomeAgainChoices>(null as any);
  const [lunchTimeAtHomeAnswer, setLunchTimeAtHomeAnswer] =
    useState<LunchTimeAtHomeChoices>(null as any);
  return (
    <>
      <div className="view">
        {openStartMenu && (
          <StartMenu
            setOpenIntro={setOpenIntro}
            setOpenStartMenu={setOpenStartMenu}
          />
        )}
        {openIntro && (
          <Intro
            setOpenIntro={setOpenIntro}
            setOpenBackToSleep={setOpenBackToSleep}
          />
        )}
        {openBackToSleep && (
          <BackToSleep
            setGetUpAnswer={setGetUpAnswer}
            setOpenBackToSleep={setOpenBackToSleep}
            setOpenWantToEatHome={setOpenWantToEatHome}
          />
        )}
        {/* Po odpovedi zda jde spat */}
        {openWantToEatHome && (
          <WantToEatHome
            setOpenWantToEatHome={setOpenWantToEatHome}
            getUpAnswer={getUpAnswer}
            setSomethingToEatHomeAnswer={setSomethingToEatHomeAnswer}
            setOpenTypeOfTransport={setOpenTypeOfTransport}
            setOpenInJob={setOpenInJob}
          />
        )}
        {openTypeOfTransport && (
          <TypeOfTransport
            setOpenTypeOfTransport={setOpenTypeOfTransport}
            getUpAnswer={getUpAnswer}
            somethingToEatHomeAnswer={somethingToEatHomeAnswer}
            setTransportAnswer={setTransportAnswer}
            setOpenTakeTheBus={setOpenTakeTheBus}
            setOpenInJob={setOpenInJob}
            setOpenGasStation={setOpenGasStation}
            setOpenBackHome={setOpenBackHome}
          />
        )}
        {/* možnosti pokračování po vybrání transportu */}
        {openTakeTheBus && (
          <TakeTheBus
            setOpenTakeTheBus={setOpenTakeTheBus}
            getUpAnswer={getUpAnswer}
            somethingToEatHomeAnswer={somethingToEatHomeAnswer}
            setLateOnBusAnswer={setLateOnBusAnswer}
            setTalkToWomanOnBusStopAnswer={setTalkToWomanOnBusStopAnswer}
            setOpenTalkToWomanOnBusStop={setOpenTalkToWomanOnBusStop}
            setOpenInJob={setOpenInJob}
            setOpenBackHome={setOpenBackHome}
            setOpenGoByWalk={setOpenGoByWalk}
          />
        )}
        {openTalkToWomanOnBusStop && (
          <TalkWithWomanOnBusStop
            setOpenTalkWithWomanOnBusStop={setOpenTalkToWomanOnBusStop}
            setTalkToWomanOnBusStopResult={setTalkToWomanOnBusStopResult}
            talkToWomanOnBusStopResult={talkToWomanOnBusStopResult}
            setOpenInJob={setOpenInJob}
          />
        )}
        {openGasStation && (
          <GasStation
            setOpenGasStation={setOpenGasStation}
            setGasStationAnswer={setGasStationAnswer}
            setOpenInJob={setOpenInJob}
            setOpenTalkWithWomanGasStation={setOpenTalkWithWomanGasStation}
          />
        )}
        {openTalkWithWomanGasStation && (
          <TalkWithWomanGasStation
            setOpenTalkWithWomanGasStation={setOpenTalkWithWomanGasStation}
            setTalkToWomanOnGasStationResult={setTalkToWomanOnGasStationResult}
            talkToWomanOnGasStationResult={talkToWomanOnGasStationResult}
            setOpenInJob={setOpenInJob}
          />
        )}
        {openBackHome && (
          <BackHome
            setOpenBackHome={setOpenBackHome}
            setStayHomeAnswer={setStayHomeAnswer}
            setOpenGoByWalk={setOpenGoByWalk}
            setOpenBackHomeStay={setOpenBackHomeStay}
          />
        )}
        {openGoByWalk && (
          <GoByWalk
            setOpenGoByWalk={setOpenGoByWalk}
            stayHomeAnswer={stayHomeAnswer}
            lateOnBusAnswer={lateOnBusAnswer}
            setTalkToWomanInFrontOfCafeAnswer={
              setTalkToWomanInFrontOfCafeAnswer
            }
            setOpenTalkToWomanInFrontOfCafe={setOpenTalkToWomanInFrontOfCafe}
            setTalkToWomanOnWayToWorkByWalkAnswer={
              setTalkToWomanOnWayToWorkByWalkAnswer
            }
            setOpenTalkToWomanOnWayToWorkByWalk={
              setOpenTalkToWomanOnWayToWorkByWalk
            }
            setOpenInJob={setOpenInJob}
            setOpenBackHomeAgain={setOpenBackHomeAgain}
          />
        )}
        {openTalkToWomanInFrontOfCafe && (
          <TalkToWomanInFrontOfCafe
            setTalkToWomanInFrontOfCafeResult={
              setTalkToWomanInFrontOfCafeResult
            }
            setOpenTalkToWomanInFrontOfCafe={setOpenTalkToWomanInFrontOfCafe}
            talkToWomanInFrontOfCafeResult={talkToWomanInFrontOfCafeResult}
            setOpenBackHomeAgain={setOpenBackHomeAgain}
            setOpenAfterCafeWithWoman={setOpenAfterCafeWithWoman}
          />
        )}
        {openTalkToWomanOnWayToWorkByWalk && (
          <TalkToWomanOnWayToWork
            setTalkToWomanOnWayToWorkByWalkResult={
              setTalkToWomanOnWayToWorkByWalkResult
            }
            talkToWomanOnWayToWorkByWalkResult={
              talkToWomanOnWayToWorkByWalkResult
            }
            setOpenTalkToWomanOnWayToWorkByWalk={
              setOpenTalkToWomanOnWayToWorkByWalk
            }
            setOpenInJob={setOpenInJob}
          />
        )}
        {openAfterCafeWithWoman && (
          <AfterCafeWithWoman
            setOpenAfterCafeWithWoman={setOpenAfterCafeWithWoman}
            setAfterCafeWithWomanAnswer={setAfterCafeWithWomanAnswer}
            setOpenBackHomeAgain={setOpenBackHomeAgain}
            setOpenKillWomanAfterCafe={setOpenKillWomanAfterCafe}
          />
        )}
        {openKillWomanAfterCafe && (
          <KillWomanAfterCafe
            setOpenKillWomanAfterCafe={setOpenKillWomanAfterCafe}
            setOpenBackHomeAgain={setOpenBackHomeAgain}
          />
        )}
        {openInJob && (
          <InJob
            talkToWomanOnBusStopResult={talkToWomanOnBusStopResult}
            talkToWomanOnGasStationResult={talkToWomanOnGasStationResult}
            talkToWomanOnWayToWorkByWalkResult={
              talkToWomanOnWayToWorkByWalkResult
            }
            setOpenInJob={setOpenInJob}
            setOpenGameOver={setOpenGameOver}
            getUpAnswer={getUpAnswer}
            lateOnBusAnswer={lateOnBusAnswer}
            transportAnswer={transportAnswer}
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
            setOpenGoingFromWorkWalk={setOpenGoingFromWorkWalk}
            setOpenInSupermarket={setOpenInSupermarket}
            setInJobAnswer={setInJobAnswer}
            setOpenWaitingForBusAfterJob={setOpenWaitingForBusAfterJob}
            setOpenGoToRestaurant={setOpenGoToRestaurant}
            setOpenBackHomeAgain={setOpenBackHomeAgain}
          />
        )}
        {openBackHomeStay && (
          <BackHomeStay
            stayHomeAnswer={stayHomeAnswer}
            setOpenBackHomeStay={setOpenBackHomeStay}
            setBackHomeStayAnswer={setBackHomeStayAnswer}
            setOpenGoToRestaurant={setOpenGoToRestaurant}
            setOpenLunchTimeAtHome={setOpenLunchTimeAtHome}
          />
        )}
        {openGoToRestaurant && (
          <GoToRestaurant
            setOpenGoToRestaurant={setOpenGoToRestaurant}
            setTalkToWomanInFrontOfRestaurantAnswer={
              setTalkToWomanInFrontOfRestaurantAnswer
            }
            setOpenBackFromRestaurant={setOpenBackFromRestaurant}
            setOpenTalkToWomanInFrontOfRestaurant={
              setOpenTalkToWomanInFrontOfRestaurant
            }
          />
        )}
        {openBackFromRestaurant && (
          <BackFromRestaurant
            setOpenBackFromRestaurant={setOpenBackFromRestaurant}
            setOpenHomeAtEvening={setOpenHomeAtEvening}
          />
        )}
        {openTalkToWomanInFrontOfRestaurant && (
          <TalkToWomanInFrontOfRestaurant
            setTalkToWomanInFrontOfRestaurantResult={
              setTalkToWomanInFrontOfRestaurantResult
            }
            talkToWomanInFrontOfRestaurantResult={
              talkToWomanInFrontOfRestaurantResult
            }
            setOpenTalkToWomanInFrontOfRestaurant={
              setOpenTalkToWomanInFrontOfRestaurant
            }
            setOpenBackFromRestaurant={setOpenBackFromRestaurant}
            setOpenAfterRestaurantWithWoman={setOpenAfterRestaurantWithWoman}
          />
        )}
        {openAfterRestaurantWithWoman && (
          <AfterRestaurantWithWoman
            setOpenAfterRestaurantWithWoman={setOpenAfterRestaurantWithWoman}
            setAfterRestaurantWithWomanAnswer={
              setAfterRestaurantWithWomanAnswer
            }
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            setOpenInCarWithWomanFromRestaurant={
              setOpenInCarWithWomanFromRestaurant
            }
            setOpenInParkWithWomanFromRestaurant={
              setOpenInParkWithWomanFromRestaurant
            }
            afterRestaurantWithWomanAnswer={afterRestaurantWithWomanAnswer}
          />
        )}
        {openInCarWithWomanFromRestaurant && (
          <InCarWithWomanFromRestaurant
            setOpenInCarWithWomanFromRestaurant={
              setOpenInCarWithWomanFromRestaurant
            }
            setInCarWithWomanFromRestaurantAnswer={
              setInCarWithWomanFromRestaurantAnswer
            }
            inCarWithWomanFromRestaurantAnswer={
              inCarWithWomanFromRestaurantAnswer
            }
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            setOpenWomanBodyInFrontOfHouse={setOpenWomanBodyInFrontOfHouse}
          />
        )}
        {openInParkWithWomanFromRestaurant && (
          <InParkWithWomanFromRestaurant
            setOpenInParkWithWomanFromRestaurant={
              setOpenInParkWithWomanFromRestaurant
            }
            setInParkWithWomanFromRestaurantAnswer={
              setInParkWithWomanFromRestaurantAnswer
            }
            inParkWithWomanFromRestaurantAnswer={
              inParkWithWomanFromRestaurantAnswer
            }
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            setOpenGameOver={setOpenGameOver}
          />
        )}
        {openWomanBodyInFrontOfHouse && (
          <WomanBodyInFrontOfHouse
            setOpenWomanBodyInFrontOfHouse={setOpenWomanBodyInFrontOfHouse}
            setWomanBodyInFrontOfHouseResult={setWomanBodyInFrontOfHouseResult}
            setOpenGameOver={setOpenGameOver}
            womanBodyInFrontOfHouseResult={womanBodyInFrontOfHouseResult}
            setOpenHomeAtEvening={setOpenHomeAtEvening}
          />
        )}

        {openGoingFromWorkWalk && (
          <GoingFromWorkWalk
            setOpenGoingFromWorkWalk={setOpenGoingFromWorkWalk}
            goingFromWorkWalkAnswer={goingFromWorkWalkAnswer}
            setGoingFromWorkWalkAnswer={setGoingFromWorkWalkAnswer}
            setOpenGameOver={setOpenGameOver}
            setOpenBackHomeAgain={setOpenBackHomeAgain}
          />
        )}
        {openBackHomeAgain && (
          <BackHomeAgain
            setOpenBackHomeAgain={setOpenBackHomeAgain}
            talkToWomanInFrontOfCafeResult={talkToWomanInFrontOfCafeResult}
            setOpenGameOver={setOpenGameOver}
            setBackHomeAgainAnswer={setBackHomeAgainAnswer}
            setOpenLunchTimeAtHome={setOpenLunchTimeAtHome}
            setOpenGoToRestaurant={setOpenGoToRestaurant}
          />
        )}
        {openLunchTimeAtHome && (
          <LunchTimeAtHome
            setOpenLunchTimeAtHome={setOpenLunchTimeAtHome}
            backHomeAgainAnswer={backHomeAgainAnswer}
            inJobAnswer={inJobAnswer}
            setLunchTimeAtHomeAnswer={setLunchTimeAtHomeAnswer}
            lunchTimeAtHomeAnswer={lunchTimeAtHomeAnswer}
            setOpenHomeAtEvening={setOpenHomeAtEvening}
          />
        )}

        {openHomeAtEvening && <HomeAtEvening />}
        {openInSupermarket && <InSupermarket />}
        {openWaitingForBusAfterJob && <WaitingForBusAfterJob />}
        {openGameOver && <GameOver />}
      </div>
    </>
  );
}

export default App;
