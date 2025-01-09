import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUnauth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("TOKEN");
        if (token) {
            navigate("/", { replace: true });
        }
    }, [navigate]);
};

export default useUnauth;
