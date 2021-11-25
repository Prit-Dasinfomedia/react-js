import React, { useEffect, useState } from "react";
import { data } from "../../data";
const url = "https://first-react-js-project.netlify.app/";

const CustomHooks = () => {
    const [loading , setLoading] = useState(true);
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
    return (
        <>
            <div>
                <h2>
                    { loading ? 'loading...' : 'data' }
                </h2>
            </div>
        </>
    );

};
export default CustomHooks;