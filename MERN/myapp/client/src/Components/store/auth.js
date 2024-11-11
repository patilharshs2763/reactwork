// Importing createContext and useContext from React
import { createContext, useContext, useState } from "react";

// Creating AuthContext
export const AuthContext = createContext();

// Creating AuthProvider
export const AuthProvider = ({ children }) => {

    //deleting token for log out mech 
    const [token, setToken] = useState(localStorage.getItem("token"));

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;
    console.log("Is logged in?:", isLoggedIn);

    //tackeling the log out fun
    const LogoutUser = () => {
        setToken(null);
        return localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, LogoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Creating useAuth
export const useAuth = () => { // Fixed arrow function syntax here



    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider!");
    }
    return authContextValue;
};
