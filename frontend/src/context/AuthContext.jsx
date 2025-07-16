import { createContext, use } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:3000/auth/checkAuth", { withCredentials: true });
                if (response.status === 200) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        checkAuth();
    })
    const login = async ({ email, password }) => {
        try {
            const response = await axios.post("http://localhost:3000/auth/login", { email, password }, { withCredentials: true });
            if (response.status === 200) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        try {
            const response = await axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true });
            console.log(response);
            if (response.status === 200) {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}