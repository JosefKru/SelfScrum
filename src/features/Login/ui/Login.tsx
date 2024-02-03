import { classNames } from "shared/lib/classNames/classNames";
import style from "./Login.module.scss";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Button from "shared/ui/Button/Button";

interface LoginProps {
  className?: string;
}

const Login = ({ className }: LoginProps) => {

  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider)
  };
  return (
    <div className={classNames(style.login, {}, [className])}>
      <Button onClick={handleGoogle}>Login</Button>
    </div>
  );
};

export default Login;
