//import React from 'react';
import "./PlaceOrder.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Router, Switch, Route, Link, useParams } from 'react-router-dom';
//import { fontWeight } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from "../../CartContext";
//import { List } from "@mui/material";

function PlaceOrder(props)
{
    const{item,size,increment} = useContext(CartContext);
    const[productDetails,setProductDetails]=useState([]);

    let {id} = useParams();
    const addToCart = function(){
        increment(productDetails);
        }

    useEffect(()=>{
        let list=[
            {
                "id": 1, 
                "name":"Victoria's Secret-Scandalous", 
                "rating":"34,567", 
                "review": "1000", 
                "delivery": "Wednesday, June 15", 
                "price": "2980/-", 
                "image": "https://ik.imagekit.io/thescentsation56/perfume_images/vicsec9_5ly3-p3xaz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421491653", 
                "about": ["Victoria's Secret scandalous fragrance mist 8.4oz","Brand: Victoria's Secret", "Quantity: 248.4 milliliters", "Package contents: 1 scandalous fragrance mist"]
            },
            {
                "id": 2, 
                "name":"Chanel-COCO", 
                "rating":"44,563", 
                "review": "990", 
                "delivery": "Thursday, June 16", 
                "price": "3480/-", 
                "image": "https://ik.imagekit.io/thescentsation56/perfume_images/chanel2_HxXwdAypW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421466723", 
                "about": ["Chanel-COCO-Paris 8.4oz", "Brand: Chanel", "Quantity: 248.4 milliliters", "Package contents: 1 COCO fragrance"]
            },
            {
                "id": 3, 
                "name":"Versace-Eau fraiche", 
                "rating":"30,568", 
                "review": "999", 
                "delivery": "Tuesday, June 14", 
                "price": "4230/-", 
                "image": "https://ik.imagekit.io/thescentsation56/perfume_images/versace6_DyTBbsT4d.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421487297", 
                "about": ["Versace-Eau fraiche 8.4oz", "Brand: Versace", "Quantity: 248.4 milliliters", "Package contents: 1 Eau fraiche fragrance"]
            },
            {
            "id": 4, 
            "name":"Louis Vuitton-California Dream", 
            "rating":"38,590", 
            "review": "999", 
            "delivery": "Thursday, June 16", 
            "price": "3760/-", 
            "image": "https://ik.imagekit.io/thescentsation56/perfume_images/lv3_UmrvWlGPww.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421478992", 
            "about": ["Louis Vuiiton-California Dream 8.4oz", "Brand: Louis Vuitton", "Quantity: 248.4 milliliters", "Package contents: 1 California Dream fragrance"]
            },
            {
                "id": 5, 
                "name":"Gucci-Guilty Absolute", 
                "rating":"21,590", 
                "review": "988", 
                "delivery": "Monday, June 20", 
                "price": "3460/-", 
                "image": "https://ik.imagekit.io/thescentsation56/perfume_images/gucci8_7I1I7tFmv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421477174", 
                "about": ["Gucci-Guilty Absolute 8.4oz", "Brand: Gucci", "Quantity: 248.4 milliliters", "Package contents: 1 Guilty Absolute fragrance"]
            },
            {
                "id": 6, 
                "name":"Dior-Addict", 
                "rating":"64,067", 
                "review": "548", 
                "delivery": "Tuesday, June 20", 
                "price": "3460/-", 
                "image": "https://ik.imagekit.io/thescentsation56/perfume_images/dior10_LStt-xgY9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421470088", 
                "about": ["Dior-Addict 8.4oz", "Brand: Dior", "Quantity: 248.4 milliliters", "Package contents: 1 Dior Addict fragrance"]
            },
            {id: 7, name:"Prada-Candy", rating:"54,537", price:"4670/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/prada1_GeIM9Lymg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421481639'},
            {id: 8, name:"Dior-Sauvage", rating:"34,565", price:"4980/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/dior5_FGh_RBUoXW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421471607'}
        ]
        let item = list.filter( item => {
            if(item.id == id)
               return item;
        })

        console.log(item);
        setProductDetails(item[0]);
    }, []);

    return(
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <img className='placeorder__image' src={productDetails.image} alt='meh'/>
                </Grid>
                <Grid item xs={3}>
                    <div className='placeorder__description'>
                    <div style={{fontSize: "24px", lineHeight:"32px", fontWeight: 500}}>
                        {productDetails.name}
                    </div>
                    <div>
                        Rating: {productDetails.rating}  |  
                        {productDetails.review}+ answered questions
                        <Rating name="read-only" value={4} readOnly />
                    </div>
                    <hr></hr>
                    <div>
                        <div className='textgap'>
                            Price: <span className='pricetag'>{productDetails.price}</span>
                        </div>
                        <div className='textgap'>
                            FREE delivery: <strong>{productDetails.delivery}</strong>
                        </div>
                        <div className='textgap'>
                            Perfume can play an important role in our wardrobe. Whether you prefer to apply your signature scent for a date night or for a work day in the office, fragrances help give us a certain aura and presence. Part of what creates this presence for each person is the use of fragrance notes. 
                        </div>
                    </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className='placeorder__order'>
                        <div style={{fontSize: "24px", margin: "10px"}}>
                            About this perfume:
                        </div>
                        <div style={{marginLeft: "20px"}}>
                        {
                            productDetails.about!=undefined?
                            productDetails.about.map((item) => (
                               <li>{item}</li>        
                            )) : <span></span>
                        }
                        </div>
                        <div>
                            <button className='placeorder__button addtocart' onClick={addToCart} >Add to Cart</button>
                            <Link to={"/checkout"}>
                                 <button className='placeorder__button buynow'>Buy now</button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceOrder;