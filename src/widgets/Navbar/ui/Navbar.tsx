import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { AppLink } from "shared/ui";

interface NavbarProps {
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppLink to="/about">About Page</AppLink>
      <AppLink to="/">Main Page</AppLink>
      <AppLink to="/">Main Page</AppLink>
      <AppLink to="/">Main Page</AppLink>
    </div>
  );
};

export default Navbar;
