import { classNames } from 'shared/lib'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
}

type ButtonProps = {
  className?: string
  theme?: ButtonTheme
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { className = '', theme = '', children, ...otherProps } = props
  return (
    <button
      type={'button'}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
