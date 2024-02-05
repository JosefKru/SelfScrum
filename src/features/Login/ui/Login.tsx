import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Login.module.scss";
import GoogleButton from "react-google-button";
import { UserAuth } from "app/providers/AuthProvider";
import Button from "shared/ui/Button/Button";

interface LoginProps {
  className?: string;
}

const Login = ({ className }: LoginProps) => {
  const { googleSignIn, logOut, currentUser } = UserAuth();
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error during Google sign-out:", error);
      setError("Failed to sign out with Google. Please try again.");
    }
  };

  const renderAuthButton = (): React.ReactNode => {
    if (currentUser?.displayName) {
      return <Button onClick={handleSignOut}>LOGOUT</Button>;
    } else {
      return <GoogleButton onClick={handleGoogleSignIn} />;
    }
  };

  return (
    <div className={classNames(style.login, {}, [className])}>
      {renderAuthButton()}
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default Login;
