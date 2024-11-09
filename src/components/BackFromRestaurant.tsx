import Typewriter from "typewriter-effect";

type BackFromRestaurantProps = {
  setOpenBackFromRestaurant: (openBackFromRestaurant: boolean) => void;
  setOpenHomeAtEvening: (openHomeAtEvening: boolean) => void;
};

export const BackFromRestaurant = ({
  setOpenBackFromRestaurant,
  setOpenHomeAtEvening,
}: BackFromRestaurantProps) => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("You are going home from restaurant")
            .start()
            .pauseFor(1000)
            .callFunction(() => {
              setOpenBackFromRestaurant(false);
              setOpenHomeAtEvening(true);
            });
        }}
      />
    </>
  );
};
