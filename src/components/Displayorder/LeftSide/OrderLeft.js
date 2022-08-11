import React from 'react';
import "./OrderLeft.css";

function OrderLeft(props)
{
    return (
        <div className='LeftSize__main'>
        <div className='LeftSide__header'>
           BRANDS
        </div>
        <div className='LeftSide__brandname'>
           <label className='brandname'>
              <input type="checkbox" value="Luxury scents" />Luxury scents
           </label>
           <label className='brandname'>
              <input type="checkbox" value="Chanel" />Chanel
           </label>
           <label className='brandname'>
           <input type="checkbox" value="Dior" /> Dior
           </label>
           <label className='brandname'>
              <input type="checkbox" value="Gucci" />Gucci
           </label>
           <label className='brandname'>
              <input type="checkbox" value="Louis Vuitton" />Louis Vuitton
           </label>
           <label className='brandname'>
              <input type="checkbox" value="Prada" />Prada
           </label>
           <label className='brandname'>
              <input type="checkbox" value="Versace" />Versace
           </label>
           <label className='brandname'>
              <input type="checkbox" value="Victoria's Secret" />Victoria's Secret
           </label>
        </div>
     </div> 
    );
}

export default OrderLeft;