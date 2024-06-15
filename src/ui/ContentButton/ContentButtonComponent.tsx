import classes from "./content-button.module.scss";
import { FC } from "react";
import * as React from "react";

interface IContentButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean | undefined;
}

export const ContentButton: FC<IContentButton> = ({
  children,
  ...restProps
}) => {
  return (
    <button {...restProps} className={classes.contentButton}>
      {children}
    </button>
  );
};
