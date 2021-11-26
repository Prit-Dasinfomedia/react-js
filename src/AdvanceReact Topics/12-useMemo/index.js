import React, { useCallback, useEffect, useMemo, useState } from "react";
import {useFetch} from '../9-custom-hooks/2-useFetch';
const url = "https://first-react-js-project.netlify.app";
const calculate = (data) => {
    return data.reduce(()=>{
        const price = item.fields.price;
        if(price = total)
        {
            total = price;
        }
        return total;
    },0)/100
}
const Index = () => {
    const { products } = useFetch(url);
    const [ count , setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart  ]);
    const mostexpense = useMemo(()=> calculate(products),[products,]);
    return (
        <>
            <h1>Count: {count}</h1>
            <button className="btn"
            onClick={()=> setCount(count +1)}>
                Click Me
            </button>
            <h1 style={{ marginTop: "3rem" }}>
                cart: {cart}
            </h1>
            <h1>Most expensive: ${mostexpense }</h1>
            <BigList products={products} addToCart={addToCart}/>
        </>
    ); 
};
const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
        console.log("BigList called");
    })
    return (
        <section className="products">
            {products.map((product)=>{
                return <SingleProduct
                key={product.id} {...product}
                addToCart={addToCart}>

                </SingleProduct>
            })}
        </section>
    );
}); 
const SingleProduct =({ fields , addToCart}) => {
    
    useEffect(() => {
        console.log("Single called");
    })
    let {name,price} = fields;
    price = price /100;
    const image = fields.image[0].url;

    return(
        <article className="product">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={addToCart}>Cart</button>
        </article>
    );
}

export default Index;