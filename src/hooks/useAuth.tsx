import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
    const navigate = useNavigate()
    const token = localStorage.getItem('TOKEN')
    useEffect(() => {
        if(!token) {
            navigate("/auth")
        }
    }, [navigate, token])
}