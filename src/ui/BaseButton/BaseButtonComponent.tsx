import classes from "../../styles/ui/base-button.module.scss";
import { FC } from "react";
import * as React from "react";

interface IBaseButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean | undefined;
}

export const BaseButton: FC<IBaseButton> = ({
  children,
  disabled,
  ...restProps
}) => {
  return (
    <button disabled={disabled} {...restProps} className={classes.baseButton}>
      {children}
    </button>
  );
};
