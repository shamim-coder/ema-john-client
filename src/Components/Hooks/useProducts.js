import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const url = `https://ema-john-api.herokuapp.com/products`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoader(false);
            });
    }, []);
    return { products, setProducts, loader };
};

export default useProducts;
