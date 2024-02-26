import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About
      </AppLink>
      <AppLink to="/">Backlog</AppLink>
      <AppLink to="/auth">SignIn</AppLink> {/*to-do: надо переделать на /auth */}
      <AppLink to="/">Backlog</AppLink>
    </div>
  );
};

export default Navbar;
