import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Link to="/about">About Page</Link>
      <Link to="/">Main Page</Link>
      <Link to="/">Main Page</Link>
      <Link to="/">Main Page</Link>
    </div>
  );
};

export default Navbar;
