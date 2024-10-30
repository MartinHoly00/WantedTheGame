type StartMenuProps = {
  setOpenStartMenu: (openStartMenu: boolean) => void;
  setOpenIntro: (openIntro: boolean) => void;
};
export const StartMenu = ({
  setOpenStartMenu,
  setOpenIntro,
}: StartMenuProps) => {
  return (
    <>
      <h1>Wanted</h1>
      <button
        onClick={() => {
          setOpenIntro(true);
          setOpenStartMenu(false);
        }}
      >
        Start Game
      </button>
    </>
  );
};
