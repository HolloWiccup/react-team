import classes from "./Button.module.scss";
import {type ButtonHTMLAttributes} from "react";
import {classNames} from "../../helpers/classNames.tsx";


type ButtonProps = {
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonProps) => {
  const {className = '', children, ...otherProps} = props
  return (
    <button type='button' {...otherProps}
            className={classNames(classes.button, {}, [className])}>
      {children}
    </button>
  );
};

export default Button;