"use client";

import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter;

  return (
    <AuthContext.Provider value={{ cart, addItemToCart, deleteItemFromCart }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;