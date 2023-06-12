import { classNames } from 'shared'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui'

type NavbarProps = {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={classNames(cls.links)}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(cls.mainLink)}>
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
        About
      </AppLink>
    </div>
  </div>
)
