import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const url = `https://ema-john-api.herokuapp.com/products`;
        const getData = async () => {
            try {
                const { data } = await axios.get(url);
                setProducts(data);
                setLoader(false);
            } catch (err) {
                console.log(err.message);
            }
        };
        getData();
    }, []);
    return { products, setProducts, loader };
};

export default useProducts;
