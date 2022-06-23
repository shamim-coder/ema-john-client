import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const getData = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post("http://localhost:8888/login", { email });
                const accessToken = data?.token;
                localStorage.setItem("access-token", accessToken);
                setToken(accessToken);
            }
        };
        getData();
    }, [user]);

    return { token, setToken };
};
export default useToken;
