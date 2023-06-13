import React from "react";

interface AuthContextInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

export default AuthContext;
