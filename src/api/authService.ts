import { api } from "."
import { LoginReq } from "../types/requests/loginReq"

type AuthRes = {
    data: {
        token: string
    }
}

export const authService = {
    login: async (credentials: LoginReq) => {
        try {
            const response = await api.post<AuthRes>("/login", credentials);
            const token = response.data.data.token
            return {token}
            // return response.data; // Ensure proper return
        } catch (error) {
            console.error("Error in login:", error);
            throw error; // Ensure the error is rethrown
        }
    },
};
