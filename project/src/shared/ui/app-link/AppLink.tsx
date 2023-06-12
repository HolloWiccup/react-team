import { classNames } from 'shared'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = {
  className?: string
  theme?: AppLinkTheme
} & LinkProps

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className = '', children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps} to={to}>
      {children}
    </Link>
  )
}
