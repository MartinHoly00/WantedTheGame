type ClockProps = {
  hour: string;
  minute: string;
};
export const Clock = ({ hour, minute }: ClockProps) => {
  return (
    <span style={{ position: "absolute", right: ".5rem", top: ".5rem" }}>
      {hour}:{minute}
    </span>
  );
};
