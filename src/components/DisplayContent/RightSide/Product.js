import React from 'react';
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map';
import "./RightSidePanel.css";

function Product({definition}){
    console.log(definition)
    return(
        <div className='Product'>
            <div>
               <div className='Product__image'>
                   <img src={ definition.image} alt='' height="350px" width="300px"/>
               </div>
            </div> 
            <div className='Product__name'>
                { definition.name}
            </div>
            <div className='Product__rating'>
                Rating: { definition.rating}
                <Rating name="read-only" value={4.5} readOnly />
            </div>
            <div className='Product__price'>
                {getSymbolFromCurrency('INR')} { definition.price}
            </div>
       </div>
    );
}

export default Product;