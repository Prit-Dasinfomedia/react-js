import React, { useEffect, useState } from "react";
import  Product from "./Product";
import {Fetch} from "./Fetch";
import image from "../../assets/1.jpeg";
const url = "https://first-react-js-project.netlify.app/";

const Index = () => {
    const { products} = Fetch(url);
    return (
        <>
            <div>
                <img src={image} />
                <h2> Products</h2>
                <section className="products">
                    {products.map((product) => {
                        return<Product key={product.id} {...product} />;
                    })}
                </section>
            </div>
        </>
    );
    
};
export default Index;