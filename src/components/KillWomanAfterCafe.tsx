import Typewriter from "typewriter-effect";

type KillWomanAfterCafeProps = {
  setOpenKillWomanAfterCafe: (openKillWomanAfterCafe: boolean) => void;
  setOpenBackHomeAgain: (openBackHomeAgain: boolean) => void;
};

export const KillWomanAfterCafe = ({
  setOpenKillWomanAfterCafe,
  setOpenBackHomeAgain,
}: KillWomanAfterCafeProps) => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "You decided to kill Elise. You took a knife out of your pocket and stabbed her."
            )
            .start()
            .pauseFor(1000)
            .deleteAll()
            .typeString("She's dead, you cover your tracks and go back home.")
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setOpenKillWomanAfterCafe(false);
              setOpenBackHomeAgain(true);
            });
        }}
      />
    </>
  );
};
