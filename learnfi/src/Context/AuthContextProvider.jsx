import React, { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {

    const [IsAuth,setIsAuth] = useState(null)
    
    const Login = (user) => {
        setIsAuth(user)
        // setToken(token)
    }
    const Logout = () => {
        setIsAuth(false)
        // setToken('')
    }
  
  return(<AuthContext.Provider value={{IsAuth, Login, Logout}}>
    {children}
    </AuthContext.Provider>
  )
}
