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
  GoHomeAfterWorkCarCarCrashChoices,
  GoHomeAfterWorkingCarAproachGirlChoices,
  GoHomeAfterWorkingCarChoices,
  GoHomeByWalkAfterWorkChoices,
  GoingFromWorkWalkChoices,
  GoToSupermarketAfterWorkChoices,
  InCarWithWomanFromRestaurantChoices,
  InJobChoices,
  InParkWithWomanFromRestaurantChoices,
  InSupermarketChoices,
  KillWomanInCarAfterJobChoices,
  KillWomanInParkAfterJobChoices,
  KillWomanOnWayHomeByWalkAfterWorkChoices,
  LateOnBusChoices,
  LunchTimeAtHomeChoices,
  MeetWomanInForestChoices,
  OnBusStopHomeAfterWorkChoices,
  OnWayHomeByWalkAfterWorkChoices,
  SomethingToEatHomeChoices,
  StayHomeChoices,
  TalkToWomanInFrontOfCafeChoices,
  TalkToWomanInFrontOfCafeResult,
  TalkToWomanInFrontOfRestaurantChoices,
  TalkToWomanInFrontOfRestaurantResult,
  TalkToWomanInFrontOfSupermarketResult,
  TalkToWomanOnBusStopAfterWorkResult,
  TalkToWomanOnBusStopChoices,
  TalkToWomanOnBusStopResult,
  TalkToWomanOnWayHomeByWalkAfterWorkResult,
  TalkToWomanOnWayToWorkByWalkChoices,
  TalkToWomanOnWayToWorkByWalkResult,
  TalkToWomanSupermarketAfterWorkResult,
  TalkWithWomanGasStationResult,
  TransportChoices,
  WaitingForBusAfterJobChoices,
  WalksWomanHomeAfterJobChoices,
  WithWomanInCarAfterSupermarketChoices,
  WithWomanInParkAfterSupermarketChoices,
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
import { TalkToWomanInFrontOfSupermarket } from "./components/TalkToWomanInFrontOfSupermarket";
import { WithWomanInCarAfterSupermarket } from "./components/WithWomanInCarAfterSupermarket";
import { WithWomanInParkAfterSupermarket } from "./components/WithWomanInParkAfterSupermarket";
import { BackHomeAfterWork } from "./components/BackHomeAfterWork";
import { GoHomeAfterWorkingCar } from "./components/GoHomeAfterWorkingCar";
import { GoHomeAfterWorkingCarAproachGirl } from "./components/GoHomeAfterWorkingCarAproachGirl";
import { GoHomeAfterWorkCarCarCrash } from "./components/GoHomeAfterWorkCarCarCrash";
import { MeetWomanInForest } from "./components/MeetWomanInForest";
import { GoToSupermarketAfterWork } from "./components/GoToSupermarketAfterWork";
import { GoHomeByWalkAfterWork } from "./components/GoHomeByWalkAfterWork";
import { OnBusStopHomeAfterWork } from "./components/OnBusStopHomeAfterWork";
import { TalkToWomanOnBusStopAfterWork } from "./components/TalkToWomanOnBusStopAfterWork";
import { WalksWomanHomeAfterJob } from "./components/WalksWomanHomeAfterJob";
import { OnWayHomeByWalkAfterWork } from "./components/OnWayHomeByWalkAfterWork";
import { TalkToWomanOnWayHomeByWalkAfterWork } from "./components/TalkToWomanOnWayHomeByWalkAfterWork";
import { KillWomanOnWayHomeByWalkAfterWork } from "./components/KillWomanOnWayHomeByWalkAfterWork";
import { TalkToWomanSupermarketAfterWork } from "./components/TalkToWomanSupermarketAfterWork";
import { KillWomanInParkAfterJob } from "./components/KillWomanInParkAfterJob";
import { KillWomanInCarAfterJob } from "./components/KillWomanInCarAfterJob";

function App() {
  //variables for the game flow
  const [openStartMenu, setOpenStartMenu] = useState(true); //true
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
    useState(false); //false
  const [
    openTalkToWomanInFrontOfSupermarket,
    setOpenTalkToWomanInFrontOfSupermarket,
  ] = useState(false);
  const [
    openWithWomanInCarAfterSupermarket,
    setOpenWithWomanInCarAfterSupermarket,
  ] = useState(false);
  const [
    openWithWomanInParkAfterSupermarket,
    setOpenWithWomanInParkAfterSupermarket,
  ] = useState(false);
  const [openGoHomeAfterWorkingCar, setOpenGoHomeAfterWorkingCar] =
    useState(false);
  const [
    openGoHomeAfterWorkingCarAproachGirl,
    setOpenGoHomeAfterWorkingCarAproachGirl,
  ] = useState(false);
  const [openGoHomeAfterWorkCarCarCrash, setOpenGoHomeAfterWorkCarCarCrash] =
    useState(false);
  const [openMeetWomanInForest, setOpenMeetWomanInForest] = useState(false);
  const [openGoToSupermarketAfterWork, setOpenGoToSupermarketAfterWork] =
    useState(false);
  const [openGoHomeByWalkAfterWork, setOpenGoHomeByWalkAfterWork] =
    useState(false);
  const [openOnBusStopHomeAfterWork, setOpenOnBusStopHomeAfterWork] =
    useState(false);
  const [
    openTalkToWomanOnBusStopAfterWork,
    setOpenTalkToWomanOnBusStopAfterWork,
  ] = useState(false);
  const [openWalksWomanHomeAfterJob, setOpenWalksWomanHomeAfterJob] =
    useState(false);
  const [openOnWayHomeByWalkAfterWork, setOpenOnWayHomeByWalkAfterWork] =
    useState(false);
  const [
    openTalkToWomanOnWayHomeByWalkAfterWork,
    setOpenTalkToWomanOnWayHomeByWalkAfterWork,
  ] = useState(false);
  const [
    openKillWomanOnWayHomeByWalkAfterWork,
    setOpenKillWomanOnWayHomeByWalkAfterWork,
  ] = useState(false);
  const [
    openTalkToWomanSupermarketAfterWork,
    setOpenTalkToWomanSupermarketAfterWork,
  ] = useState(false);
  const [openKillWomanInParkAfterJob, setOpenKillWomanInParkAfterJob] =
    useState(false);
  const [openKillWomanInCarAfterJob, setOpenKillWomanInCarAfterJob] =
    useState(false);

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
  const [InSupermarketAnswer, setInSupermarketAnswer] =
    useState<InSupermarketChoices>(null as any);
  const [
    talkToWomanInFrontOfSupermarketResult,
    setTalkToWomanInFrontOfSupermarketResult,
  ] = useState<TalkToWomanInFrontOfSupermarketResult>(null as any);
  const [
    withWomanInCarAfterSupermarketAnswer,
    setWithWomanInCarAfterSupermarketAnswer,
  ] = useState<WithWomanInCarAfterSupermarketChoices>(null as any);
  const [
    withWomanInParkAfterSupermarketAnswer,
    setWithWomanInParkAfterSupermarketAnswer,
  ] = useState<WithWomanInParkAfterSupermarketChoices>(null as any);
  const [GoHomeAfterWorkingCarAnswer, setGoHomeAfterWorkingCarAnswer] =
    useState<GoHomeAfterWorkingCarChoices>(null as any);
  const [
    goHomeAfterWorkingCarAproachGirlAnswer,
    setGoHomeAfterWorkingCarAproachGirlAnswer,
  ] = useState<GoHomeAfterWorkingCarAproachGirlChoices>(null as any);
  const [
    goHomeAfterWorkCarCarCrashAnswer,
    setGoHomeAfterWorkCarCarCrashAnswer,
  ] = useState<GoHomeAfterWorkCarCarCrashChoices>(null as any);
  const [meetWomanInForestAnswer, setMeetWomanInForestAnswer] =
    useState<MeetWomanInForestChoices>(null as any);
  const [waitingForBusAfterJobAnswer, setWaitingForBusAfterJobAnswer] =
    useState<WaitingForBusAfterJobChoices>(null as any);
  const [onBusStopHomeAfterWorkAnswer, setOnBusStopHomeAfterWorkAnswer] =
    useState<OnBusStopHomeAfterWorkChoices>(null as any);
  const [
    talkToWomanOnBusStopAfterWorkResult,
    setTalkToWomanOnBusStopAfterWorkResult,
  ] = useState<TalkToWomanOnBusStopAfterWorkResult>(null as any);
  const [walksWomanHomeAfterJobAnswer, setWalksWomanHomeAfterJobAnswer] =
    useState<WalksWomanHomeAfterJobChoices>(null as any);
  const [goHomeByWalkAfterWorkAnswer, setGoHomeByWalkAfterWorkAnswer] =
    useState<GoHomeByWalkAfterWorkChoices>(null as any);
  const [onWayHomeByWalkAfterWorkAnswer, setOnWayHomeByWalkAfterWorkAnswer] =
    useState<OnWayHomeByWalkAfterWorkChoices>(null as any);
  const [
    talkToWomanOnWayHomeByWalkAfterWorkResult,
    setTalkToWomanOnWayHomeByWalkAfterWorkResult,
  ] = useState<TalkToWomanOnWayHomeByWalkAfterWorkResult>(null as any);
  const [
    killWomanOnWayHomeByWalkAfterWorkAnswer,
    setKillWomanOnWayHomeByWalkAfterWorkAnswer,
  ] = useState<KillWomanOnWayHomeByWalkAfterWorkChoices>(null as any);
  const [goToSupermarketAfterWorkAnswer, setGoToSupermarketAfterWorkAnswer] =
    useState<GoToSupermarketAfterWorkChoices>(null as any);
  const [
    talkToWomanSupermarketAfterWorkResult,
    setTalkToWomanSupermarketAfterWorkResult,
  ] = useState<TalkToWomanSupermarketAfterWorkResult>(null as any);
  const [killWomanInCarAfterJobAnswer, setKillWomanInCarAfterJobAnswer] =
    useState<KillWomanInCarAfterJobChoices>(null as any);
  const [killWomanInParkAfterJobAnswer, setKillWomanInParkAfterJobAnswer] =
    useState<KillWomanInParkAfterJobChoices>(null as any);

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
            setTransportAnswer={setTransportAnswer}
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
            setOpenGoHomeAfterWorkingCar={setOpenGoHomeAfterWorkingCar}
            setOpenGoToSupermarketAfterWork={setOpenGoToSupermarketAfterWork}
            setOpenGoHomeByWalkAfterWork={setOpenGoHomeByWalkAfterWork}
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

        {openInSupermarket && (
          <InSupermarket
            setOpenInSupermarket={setOpenInSupermarket}
            setInSupermarketAnswer={setInSupermarketAnswer}
            transportAnswer={transportAnswer}
            lateOnBusAnswer={lateOnBusAnswer}
            setOpenLunchTimeAtHome={setOpenLunchTimeAtHome}
            setOpenTalkToWomanInFrontOfSupermarket={
              setOpenTalkToWomanInFrontOfSupermarket
            }
          />
        )}
        {openTalkToWomanInFrontOfSupermarket && (
          <TalkToWomanInFrontOfSupermarket
            setOpenTalkToWomanInFrontOfSupermarket={
              setOpenTalkToWomanInFrontOfSupermarket
            }
            setTalkToWomanInFrontOfSupermarketResult={
              setTalkToWomanInFrontOfSupermarketResult
            }
            talkToWomanInFrontOfSupermarketResult={
              talkToWomanInFrontOfSupermarketResult
            }
            setOpenLunchAtHome={setOpenLunchTimeAtHome}
            transportAnswer={transportAnswer}
            lateOnBusAnswer={lateOnBusAnswer}
            setOpenWithWomanInCarAfterSupermarket={
              setOpenWithWomanInCarAfterSupermarket
            }
            setOpenWithWomanInParkAfterSupermarket={
              setOpenWithWomanInParkAfterSupermarket
            }
          />
        )}
        {openWithWomanInCarAfterSupermarket && (
          <WithWomanInCarAfterSupermarket
            setOpenWithWomanInCarAfterSupermarket={
              setOpenWithWomanInCarAfterSupermarket
            }
            setWithWomanInCarAfterSupermarketAnswer={
              setWithWomanInCarAfterSupermarketAnswer
            }
            setOpenInCarWithWomanFromRestaurant={
              setOpenInCarWithWomanFromRestaurant
            }
            setOpenHomeAtEvening={setOpenHomeAtEvening}
          />
        )}
        {openWithWomanInParkAfterSupermarket && (
          <WithWomanInParkAfterSupermarket
            setWithWomanInParkAfterSupermarketAnswer={
              setWithWomanInParkAfterSupermarketAnswer
            }
            setOpenWithWomanInParkAfterSupermarket={
              setOpenWithWomanInParkAfterSupermarket
            }
            setOpenInParkWithWomanFromRestaurant={
              setOpenInParkWithWomanFromRestaurant
            }
            setOpenLunchTimeAtHome={setOpenLunchTimeAtHome}
          />
        )}
        {openGoHomeAfterWorkingCar && (
          <GoHomeAfterWorkingCar
            setOpenGoHomeAfterWorkingCar={setOpenGoHomeAfterWorkingCar}
            setGoHomeAfterWorkingCarAnswer={setGoHomeAfterWorkingCarAnswer}
            setOpenGoHomeAfterWorkingCarAproachGirl={
              setOpenGoHomeAfterWorkingCarAproachGirl
            }
            setOpenGoHomeAfterWorkCarCarCrash={
              setOpenGoHomeAfterWorkCarCarCrash
            }
          />
        )}
        {openGoHomeAfterWorkingCarAproachGirl && (
          <GoHomeAfterWorkingCarAproachGirl
            setOpenGoHomeAfterWorkingCarAproachGirl={
              setOpenGoHomeAfterWorkingCarAproachGirl
            }
            setGoHomeAfterWorkingCarAproachGirlAnswer={
              setGoHomeAfterWorkingCarAproachGirlAnswer
            }
            goHomeAfterWorkingCarAproachGirlAnswer={
              goHomeAfterWorkingCarAproachGirlAnswer
            }
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
            setOpenGameOver={setOpenGameOver}
          />
        )}
        {openGoHomeAfterWorkCarCarCrash && (
          <GoHomeAfterWorkCarCarCrash
            setOpenGoHomeAfterWorkCarCarCrash={
              setOpenGoHomeAfterWorkCarCarCrash
            }
            setGoHomeAfterWorkCarCarCrashAnswer={
              setGoHomeAfterWorkCarCarCrashAnswer
            }
            goHomeAfterWorkCarCarCrashAnswer={goHomeAfterWorkCarCarCrashAnswer}
            setOpenGameOver={setOpenGameOver}
            setOpenMeetWomanInForest={setOpenMeetWomanInForest}
          />
        )}
        {openMeetWomanInForest && (
          <MeetWomanInForest
            setOpenMeetWomanInForest={setOpenMeetWomanInForest}
            setMeetWomanInForestAnswer={setMeetWomanInForestAnswer}
            meetWomanInForestAnswer={meetWomanInForestAnswer}
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
          />
        )}
        {openWaitingForBusAfterJob && (
          <WaitingForBusAfterJob
            setOpenWaitingForBusAfterJob={setOpenWaitingForBusAfterJob}
            setWaitingForBusAfterJobAnswer={setWaitingForBusAfterJobAnswer}
            waitingForBusAfterJobAnswer={waitingForBusAfterJobAnswer}
            setOpenGameOver={setOpenGameOver}
            setOpenOnBusStopHomeAfterWork={setOpenOnBusStopHomeAfterWork}
          />
        )}
        {openOnBusStopHomeAfterWork && (
          <OnBusStopHomeAfterWork
            setOpenOnBusStopHomeAfterWork={setOpenOnBusStopHomeAfterWork}
            setOnBusStopHomeAfterWorkAnswer={setOnBusStopHomeAfterWorkAnswer}
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            setOpenTalkToWomanOnBusStopAfterWork={
              setOpenTalkToWomanOnBusStopAfterWork
            }
          />
        )}
        {openTalkToWomanOnBusStopAfterWork && (
          <TalkToWomanOnBusStopAfterWork
            setOpenTalkToWomanOnBusStopAfterWork={
              setOpenTalkToWomanOnBusStopAfterWork
            }
            setTalkToWomanOnBusStopAfterWorkResult={
              setTalkToWomanOnBusStopAfterWorkResult
            }
            talkToWomanOnBusStopAfterWorkResult={
              talkToWomanOnBusStopAfterWorkResult
            }
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            setOpenWalksWomanHomeAfterJob={setOpenWalksWomanHomeAfterJob}
          />
        )}
        {openWalksWomanHomeAfterJob && (
          <WalksWomanHomeAfterJob
            setOpenGameOver={setOpenGameOver}
            setOpenWalksWomanHomeAfterJob={setOpenWalksWomanHomeAfterJob}
            setWalksWomanHomeAfterJobAnswer={setWalksWomanHomeAfterJobAnswer}
            walksWomanHomeAfterJobAnswer={walksWomanHomeAfterJobAnswer}
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
          />
        )}
        {openGoHomeByWalkAfterWork && (
          <GoHomeByWalkAfterWork
            setOpenGoHomeByWalkAfterWork={setOpenGoHomeByWalkAfterWork}
            setGoHomeByWalkAfterWorkAnswer={setGoHomeByWalkAfterWorkAnswer}
            goHomeByWalkAfterWorkAnswer={goHomeByWalkAfterWorkAnswer}
            setOpenGameOver={setOpenGameOver}
            setOpenOnWayHomeByWalkAfterWork={setOpenOnWayHomeByWalkAfterWork}
          />
        )}
        {openOnWayHomeByWalkAfterWork && (
          <OnWayHomeByWalkAfterWork
            setOpenOnWayHomeByWalkAfterWork={setOpenOnWayHomeByWalkAfterWork}
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            setOnWayHomeByWalkAfterWorkAnswer={
              setOnWayHomeByWalkAfterWorkAnswer
            }
            setOpenTalkToWomanOnWayHomeByWalkAfterWork={
              setOpenTalkToWomanOnWayHomeByWalkAfterWork
            }
          />
        )}
        {openTalkToWomanOnWayHomeByWalkAfterWork && (
          <TalkToWomanOnWayHomeByWalkAfterWork
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            setOpenTalkToWomanOnWayHomeByWalkAfterWork={
              setOpenTalkToWomanOnWayHomeByWalkAfterWork
            }
            setTalkToWomanOnWayHomeByWalkAfterWorkResult={
              setTalkToWomanOnWayHomeByWalkAfterWorkResult
            }
            talkToWomanOnWayHomeByWalkAfterWorkResult={
              talkToWomanOnWayHomeByWalkAfterWorkResult
            }
            setOpenKillWomanOnWayHomeByWalkAfterWork={
              setOpenKillWomanOnWayHomeByWalkAfterWork
            }
          />
        )}
        {openKillWomanOnWayHomeByWalkAfterWork && (
          <KillWomanOnWayHomeByWalkAfterWork
            setKillWomanOnWayHomeByWalkAfterWorkAnswer={
              setKillWomanOnWayHomeByWalkAfterWorkAnswer
            }
            setOpenKillWomanOnWayHomeByWalkAfterWork={
              setOpenKillWomanOnWayHomeByWalkAfterWork
            }
            setOpenGameOver={setOpenGameOver}
            setOpenHomeAtEvening={setOpenHomeAtEvening}
            killWomanOnWayHomeByWalkAfterWorkAnswer={
              killWomanOnWayHomeByWalkAfterWorkAnswer
            }
          />
        )}
        {openGoToSupermarketAfterWork && (
          <GoToSupermarketAfterWork
            setOpenGoToSupermarketAfterWork={setOpenGoToSupermarketAfterWork}
            transportAnswer={transportAnswer}
            setGoToSupermarketAfterWorkAnswer={
              setGoToSupermarketAfterWorkAnswer
            }
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
            setOpenTalkToWomanSupermarketAfterWork={
              setOpenTalkToWomanSupermarketAfterWork
            }
          />
        )}
        {openTalkToWomanSupermarketAfterWork && (
          <TalkToWomanSupermarketAfterWork
            setOpenTalkToWomanSupermarketAfterWork={
              setOpenTalkToWomanSupermarketAfterWork
            }
            setTalkToWomanSupermarketAfterWorkResult={
              setTalkToWomanSupermarketAfterWorkResult
            }
            transportAnswer={transportAnswer}
            talkToWomanSupermarketAfterWorkResult={
              talkToWomanSupermarketAfterWorkResult
            }
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
            setOpenKillWomanInParkAfterJob={setOpenKillWomanInParkAfterJob}
            setOpenKillWomanInCarAfterJob={setOpenKillWomanInCarAfterJob}
          />
        )}
        {openKillWomanInParkAfterJob && (
          <KillWomanInParkAfterJob
            setKillWomanInParkAfterJobAnswer={setKillWomanInParkAfterJobAnswer}
            setOpenKillWomanInParkAfterJob={setOpenKillWomanInParkAfterJob}
            killWomanInParkAfterJobAnswer={killWomanInParkAfterJobAnswer}
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
          />
        )}
        {openKillWomanInCarAfterJob && (
          <KillWomanInCarAfterJob
            setKillWomanInCarAfterJobAnswer={setKillWomanInCarAfterJobAnswer}
            setOpenKillWomanInCarAfterJob={setOpenKillWomanInCarAfterJob}
            killWomanInCarAfterJobAnswer={killWomanInCarAfterJobAnswer}
            setOpenBackHomeAfterWork={setOpenBackHomeAfterWork}
          />
        )}

        {openHomeAtEvening && <HomeAtEvening />}
        {openBackHomeAfterWork && <BackHomeAfterWork />}
        {openGameOver && <GameOver />}
      </div>
    </>
  );
}

export default App;
