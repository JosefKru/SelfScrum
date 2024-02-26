import { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Login.module.scss";
import GoogleButton from "react-google-button";
import { UserAuth } from "app/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  className?: string;
}

const Login = ({ className }: LoginProps) => {
  const { googleSignIn, currentUser } = UserAuth();
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate()

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error("Error during Google sign-in:", err);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  useEffect(() => {
    if(currentUser != null) {
      navigate('/auth')
    }
  }, [currentUser])

  return (
    <div className={classNames(style.login, {}, [className])}>
      <GoogleButton onClick={handleGoogleSignIn} />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default Login;
