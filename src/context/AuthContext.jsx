import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.user) {
      setUser(storedUser.user);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://warehouse.al-mosa.com/api/login",
        {
          email,
          password,
        }
      );
      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData.user);
      return userData;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
