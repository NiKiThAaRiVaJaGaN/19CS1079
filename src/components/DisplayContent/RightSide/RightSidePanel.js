import React, { useEffect, useState } from 'react'; 
import Product from './Product';
import "./RightSidePanel.css";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Router, Switch, Route, Link} from "react-router-dom";

function RightSidePanel(props){
    const[listOfProduct,setListOfProducts]=useState([]);

    useEffect(()=>{
        let list=[
            {id: 1, name:"Victoria's Secret-scandalous", rating:"34,567", price:"2980/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/vicsec9_5ly3-p3xaz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421491653'},
            {id: 2, name:"Chanel-COCO", rating:"44,573", price:"3480/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/chanel2_HxXwdAypW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421466723'},
            {id: 3, name:"Versace-Eau fraiche", rating:"30,568", price:"4230/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/versace6_DyTBbsT4d.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421487297'},
            {id: 4, name:"Louis Vuitton-California Dream", rating:"35,567", price:"2870/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/lv3_UmrvWlGPww.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421478992'},
            {id: 5, name:"Gucci-Guilty Absolute", rating:"34,567", price:"2980/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/gucci8_7I1I7tFmv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421477174'},
            {id: 6, name:"Dior-Addict", rating:"64,067", price:"5480/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/dior10_LStt-xgY9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421470088'},
            {id: 7, name:"Prada-Candy", rating:"54,537", price:"4670/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/prada1_GeIM9Lymg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421481639'},
            {id: 8, name:"Dior-Sauvage", rating:"34,565", price:"4980/-", image:'https://ik.imagekit.io/thescentsation56/perfume_images/dior5_FGh_RBUoXW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421471607'}
        ]

        setListOfProducts(list);
    }, []);


    return(
        <div className='RightSize__main'>
            {/*<Product name="Victoria's Secret-scandalous" rating="34,567" price="2980/-" image='https://ik.imagekit.io/thescentsation56/perfume_images/vicsec9_5ly3-p3xaz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654421491653'/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>*/}

        {
            listOfProduct.map( (item)=>{

                return (<><Link to={"/order/" +item.id}>
                    <Product definition={item}/>
                </Link>
                </>);
})
        }
        </div>
    );
}

export default RightSidePanel;