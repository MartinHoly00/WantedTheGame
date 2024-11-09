import React from "react";
import "./Clock.css";

type ClockProps = {
  hour: string;
  minute: string;
};

export const Clock = ({ hour, minute }: ClockProps) => {
  return (
    <span className="digital-clock">
      {hour}:{minute}
    </span>
  );
};
