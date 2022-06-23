import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const useOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const email = user?.email;
            try {
                const { data } = await axios.get(`http://localhost:8888/orders?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    },
                });
                setOrders(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        getData();
    }, [user]);
    return { orders, setOrders };
};

export default useOrders;
