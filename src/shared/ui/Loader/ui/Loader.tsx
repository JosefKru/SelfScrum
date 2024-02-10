import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
  className?: string
}

const Loader = ({className}: LoaderProps) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        {[...Array(4)].map((_, i) => (
          <div key={i} />
        ))}
    </div>
  );
};

export default Loader;