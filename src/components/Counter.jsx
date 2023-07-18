import React from 'react';
import { useState } from 'react';
import Input from './Input';
import '../CSS/Counter.css';


const initialValues = {
    name: "Fruits",
    count: 0,
    price: 2.99,
    discount: 0,
    message:""
  };
  
  function Discount() {
    const [product, setProduct] = useState(initialValues);
  
    const handlerPlus = () => {
      setProduct((prevState) => {
        const newCount = prevState.count + 1;
        const discount = newCount >= 5 ? 20 : 0;
        return {
          ...prevState,
          count: newCount,
          discount: discount,
        };
      });
    };
  
    const handlerMinus = () => {
        setProduct((prevState) => {
        if(prevState.count > 0){
              const newCount = prevState.count - 1;
              return {
                ...prevState,
                count: newCount,
                message:""
              };
            } else {
                return {...prevState}
            }
        });
    };

    const handlerChange = (value) => {
        setProduct((prevState) => {
            if(prevState.price > 0 || prevState.price === ""){
                return {
                ...prevState,
                price: value,
                };
            }
            else if(prevState.price.substring() === "-"){
                return {
                    ...prevState,
                    message: "You must enter a positive number."
                };
            }
            else {
                return {
                    ...prevState
                }
            }
        });
    }
    const handlerReset = () => setProduct(initialValues);

  
    return (
      <>
        <h2>{product.name}</h2>
        <Input value={product.price} label="Price Input" onChange={handlerChange}/> <br/>
        <span className="errorMessage">{product.message}</span><br/>
        <button onClick={handlerMinus}>-</button>
        <span>{product.count}</span>
        <button onClick={handlerPlus}>+</button>
        <h2>${product.price}</h2>
        <h3>Discount: {product.discount}%</h3>
        <button onClick={handlerReset} className="resetBtn">Reset</button>
      </>
    );
  }
  export default Discount;