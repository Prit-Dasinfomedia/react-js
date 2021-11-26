import React, { useEffect, useState } from "react";


const Fetch = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
        setLoading(false);
    };
    useEffect(() => {
        getProducts();
    }, []);
    console.log(products);

};

export default Fetch;