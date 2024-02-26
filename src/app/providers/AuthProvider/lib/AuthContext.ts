import { createContext, useContext } from "react";
import { AuthContextProps } from "../ui/AuthProvider";

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const UserAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("UserAuth must be used within an AuthProvider");
    }
    return context;
  };

