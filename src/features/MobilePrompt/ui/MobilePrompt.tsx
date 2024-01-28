import { classNames } from "shared/lib/classNames/classNames";
import style from "./MobilePrompt.module.scss";

const MobilePrompt = () => {
  return <div className={classNames(style.mobilePrompt)}>Иди в мобилку</div>;
};

export default MobilePrompt;
