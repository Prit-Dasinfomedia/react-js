import React, { useCallback, useEffect, useState } from "react";


const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const getProducts = useCallback( async () => {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
        setLoading(false);
    }, [url]);
    useEffect(() => {
        getProducts();
    }, [url , getProducts]);
    return {loading, products};
};

export default useFetch;