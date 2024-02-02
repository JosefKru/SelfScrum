import { classNames } from "shared/lib/classNames/classNames";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const { theme, className, children, ...otherProps } = props;
  return (
    <button
      className={classNames(style.btn, {}, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
