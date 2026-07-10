import api from "./axios"

//register
export const register = async (data) => {

    const response = await api.post(

        "/auth/register",

        data

    );

    return response.data;

};

//login
export const login = async (data) => {

    const response = await api.post(

        "/auth/login",

        data

    );

    return response.data;

};

//currentUser
export const getCurrentUser = async () => {

    const response = await api.get("/auth/me");

    return response.data;

};

//logout
export const logout = async () => {

    const response = await api.post(

        "/auth/logout"

    );

    return response.data;

};