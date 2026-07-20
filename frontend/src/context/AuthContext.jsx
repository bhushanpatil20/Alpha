import { createContext, useContext, useEffect, useState} from "react";
import { login as loginAPI, register as registerAPI, logout as logoutAPI, googleLogin as googleLoginAPI, githubLogin as githubLoginAPI, getCurrentUser} from "../api/auth.api";

const AuthContext = createContext();

//Auth provider
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

//restore user
useEffect(() => {

    const initializeAuth = async () => {

     const token = localStorage.getItem("token");

if (!token) {

    setLoading(false);

    return;

}

        try {

            const response = await getCurrentUser();

            setUser(response.data);

            setIsAuthenticated(true);

        }

      catch (error) {

    console.log(error.response);

    console.log("Removing token");

    localStorage.removeItem("token");
}

        finally {

            setLoading(false);

        }

    };

    initializeAuth();

}, []);

//login function
const login = async (credentials) => {
    const response = await loginAPI(credentials);
    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
    setIsAuthenticated(true);
    return response;
};

//register function
const register = async (data) => {
    const response = await registerAPI(data);
    localStorage.setItem("token", response.data);
    setUser(response.data.user);
    setIsAuthenticated(true);
};

//logout function
const logout = async () => {
    await logoutAPI();
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
};

//Google Login
const googleLogin = async (code) => {

    const response = await googleLoginAPI(code);

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    setUser(user);

    setIsAuthenticated(true);

    return response;

};

//Github Login
const githubLogin = async (code) => {

    const response = await githubLoginAPI(code);

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    setUser(user);

    setIsAuthenticated(true);

    return response;
};

//context provider
return (

    <AuthContext.Provider

        value={{ user, loading, isAuthenticated, login, register, logout, googleLogin, githubLogin }}

    >

        {children}

    </AuthContext.Provider>

);

}

export const useAuth = () => {

    return useContext(AuthContext);

};

export default AuthContext;