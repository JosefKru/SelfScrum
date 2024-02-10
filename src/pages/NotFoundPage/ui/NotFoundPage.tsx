import { classNames } from "shared/lib/classNames/classNames";
import style from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = ({className}: NotFoundPageProps) => {
  return (
    <div className={classNames(style.notFoundPage, {}, [className])}>
        Страница не найдена
    </div>
  );
};

export default NotFoundPage;