import { classNames } from "shared";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui";
import { ThemeSwitcher } from "widgets/theme-switcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={classNames(cls.mainLink)}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
