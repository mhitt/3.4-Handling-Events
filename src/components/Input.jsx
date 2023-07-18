import React from 'react'

function Input({ value, onChange}) {

    const handlerChange = (event) => {
        console.log(event);
      onChange(event.target.value);
    };

    return (
        <>
        <form >
            <label htmlFor="priceInput">Price Input&nbsp;</label>
            <input type="number" id="priceInput" name="priceInput" value={value} onChange={handlerChange} required/>
        </form>
        </>
    );
  }
  export default Input;