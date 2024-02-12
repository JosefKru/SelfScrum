import { classNames } from "shared/lib/classNames/classNames";
import style from "./PageError.module.scss";
import Button from "shared/ui/Button/Button";

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(style.pageError, {}, [className])}>
      <h1>Произошла непредвиденная ошибка</h1>
      <Button className={style.reloadButton} onClick={reloadPage}>
        Обновить страницу
      </Button>
    </div>
  );
};

export default PageError;
