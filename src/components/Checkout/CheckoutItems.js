import React from 'react';
import "./Checkout.css";
import element from 'react-dom'

function CheckoutItems(props){

    
    return(
        <div>
            <div style={{border: "1px solid", width: "95%", display: "flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src={props.definition.image} alt='krr'/>
                </div>
                <div style={{marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className='textgap'>{props.definition.name}</div>
                    <div style={{fontWeight: "bold"}} className='textgap'>{props.definition.price}</div>
                    <div className='textgap'>In stock</div>
                    {/* <button className="btn btn-danger" onClick={ ()=> {window.confirm("You want to delete");
                element.remove()}}>delete</button> */}
                </div>
            </div>
        </div>
    );
    //console.log( "not full" );
}

export default CheckoutItems;