//import React from 'react';
import "./OrderRight.css";
import CheckoutItems from '../../Checkout/CheckoutItems';
import { CartContext } from "../../CartContext";
import Grid from '@mui/material/Grid';
import React, { useContext, useEffect, useState } from 'react';

function OrderRight(props)
{
    const{item,size,increment} = useContext(CartContext);
    return (
        <div className='OrderRight__main'>
            <div className='checkout__body'>
            <Grid container>
                <Grid item={false}>
                    <div className='checkout__container'>
                        <div style={{fontSize: "24px", fontWeight: "bold", padding:"20px 0px 0px 20px"}}>Previous Orders</div>
                        <div>
                            {
                                item.map((value)=>{
                                   return( <CheckoutItems definition={value} />
                                   )
                                    // console.log( "not full" );
                                })
                            }
                            {/* <CheckoutItems/>
                            <CheckoutItems/>
                            <CheckoutItems/> */}
                        </div>
                    </div>
                </Grid>
                </Grid>
        </div>
        </div>
    );
}

export default OrderRight;