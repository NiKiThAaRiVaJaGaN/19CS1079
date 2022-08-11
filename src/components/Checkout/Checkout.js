//import React from 'react';
import "./Checkout.css";
import Grid from '@mui/material/Grid';
import CheckoutItems from './CheckoutItems';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from "../CartContext";
import { Router, Switch, Route, Link, useParams } from 'react-router-dom';

const orderPlaced = function(){
    // increment(productDetails);
    alert("Order placed Successfully!");
    }

function Checkout(props){
    const{item,size,increment} = useContext(CartContext);

    let price=0;
    const cartValue = function(){
        for(let i=0;i<item.length;i++)
        {
            price+=parseInt(item[i].price);
        }
        return price;
    }
    return(
        <div className='checkout__body'>
            <Grid container>
                <Grid item={false}>
                    <div className='checkout__container'>
                        <div style={{fontSize: "24px", fontWeight: "bold", padding:"20px 0px 0px 20px"}}>Shopping Cart</div>
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
                <Grid item={2}>
                    <div style={{width:"330px", height: "200px", padding: "20px", marginTop: "25px", backgroundColor: "white"}}>
                        <div style={{fontSize: "26px"}}>Subtotal({size} items): <strong>{cartValue()}/-</strong></div>
                        <div style={{paddingTop: "25px"}}>
                        <Link to={"/displayorder"}>
                            <button className='placeorder__button' style={{marginLeft: "40px"}} onClick = {orderPlaced} >Proceed to Buy</button>
                        </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Checkout;