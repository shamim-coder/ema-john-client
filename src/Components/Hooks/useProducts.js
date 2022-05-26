import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch("Data/products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoader(false);
            });
    }, []);
    return [products, setProducts, loader];
};

export default useProducts;
