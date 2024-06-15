import { FC } from "react";

interface IRadioButton {
  checked?: boolean;
}

export const RadioButton: FC<IRadioButton> = ({ checked }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50%"
      cy="50%"
      r="9.5"
      stroke={checked ? "#00BDD3" : "#D0CFCF"}
    />
    {checked && <circle cx="50%" cy="50%" r="5" fill="#00BDD3" />}
  </svg>
);
