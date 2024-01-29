import { classNames } from "shared/lib/classNames/classNames";
import style from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

interface AppLinkProps extends LinkProps {
  className?: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to, children, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(style.applink, {}, [className])}
      {...otherProps}
    >
      {className}
    </Link>
  );
};

export default AppLink;
