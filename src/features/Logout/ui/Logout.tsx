import { classNames } from "shared/lib/classNames/classNames";
import style from "./Logout.module.scss";
import { UserAuth } from "app/providers/AuthProvider";
import Button from "shared/ui/Button/Button";

interface LogoutProps {
  className?: string;
}

const Logout = ({ className }: LogoutProps) => {
  const { logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error during Google sign-out:", error);
    }
  };

  return (
    <div className={classNames(style.logout, {}, [className])}>
      <Button onClick={handleSignOut}>LOGOUT</Button>
    </div>
  );
};

export default Logout;
