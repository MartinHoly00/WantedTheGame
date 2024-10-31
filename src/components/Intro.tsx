import Typewriter from "typewriter-effect";

type IntroProps = {
  setOpenIntro: (openIntro: boolean) => void;
  setOpenBackToSleep: (openBackToSleep: boolean) => void;
};
//in this game you are a serial killer and you have to make choices that will affect the story
export const Intro = ({ setOpenIntro, setOpenBackToSleep }: IntroProps) => {
  return (
    <div className="inside">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("It is 1. of September, 1976, 6:00 AM")
            .start()
            .pauseFor(1000)
            .deleteAll()
            .typeString("You woke up in your bed")
            .start()
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
              setOpenIntro(false);
              setOpenBackToSleep(true);
            });
        }}
      />
    </div>
  );
};
/*     <span className="type-writer">
      <Typewriter
        key="no"
        onInit={(typewriter) => {
          typewriter.typeString("Odpovedel ne").start();
        }}
      />
    </span> */
