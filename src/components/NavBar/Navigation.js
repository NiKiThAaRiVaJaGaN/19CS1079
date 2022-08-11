import React, { Component } from "react";
import { Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { CartContext } from "../CartContext";
import "./NavBar.css";

class NavBar extends Component{
    static contextType = CartContext;
    constructor(props){
        super(props);
        this.state={ }
    }
    render() {
        let {item, size, increment} = this.context;
        return ( 
            <div>
               <div className="navbar__component">
                <div className="navbar__logo"></div>
                <div className="navbar__locator">
                    <div className="navbar__locatorImage"></div>
                    <div className="navbar__location">Pondicherry</div>
                </div>

                <div className="navbar__searchComponents">
                    <div >
                        <select className="navbar__dropdown"> 
                           <option value="All">All</option>
                           <option value="Chanel">Chanel</option>
                           <option value="Dior">Dior</option>
                           <option value="Gucci">Gucci</option>
                           <option value="LouisVuitton">Louis Vuitton</option>
                           <option value="Prada">Prada</option>
                           <option value="Versace">Versace</option>
                           <option value="VictoriasSecret">Victoria's Secret</option>
                        </select>
                    </div>
                    <div> 
                        <input type = "text" className="navbar__searchbox"/>
                    </div>
                    <div className="navbar__searchboxdiv">
                        <div className="navbar__searchIcon"></div>
                    </div>

                    <div className="navbar__text navbar__signin">
                        <div>
                            Hello, Sign in!
                        </div>
                        <div>
                            Accounts & Lists
                        </div>
                    </div>
                    <Link to={"/displayorder"}> 
                    <div className="navbar__text navbar__orders">
                        <div>
                            Returns 
                        </div>
                        <div>
                            & Orders 
                        </div>
                    </div>
                    </Link>
                    <div className="navbar__text navbar__cart">
                    <Link to={"/checkout"}>
                        <div className="navbar__cartImage"></div>
                    </Link>
                        <div className="navbar__cartItem">{ size }</div>
                        <div className="navbar__cartText">
                            Cart
                        </div>
                    </div>
                </div>
               </div> 
               <div className="navbar__footer">
                <Link to={"/display"}> 
                   <div className="navbar__footerText">Best Sellers</div>
                </Link> 
                {/* <Link to={"/display"}>  */}
                   <div className="navbar__footerText">Summer</div>
                {/* </Link>  */}
                {/* <Link to={"/display"}>  */}
                   <div className="navbar__footerText">Winter</div>
                {/* </Link>  */}
                {/* <Link to={"/display"}>  */}
                   <div className="navbar__footerText">Fall</div>
                {/* </Link>  */}
                {/* <Link to={"/display"}>  */}
                   <div className="navbar__footerText">Spring</div>
                {/* </Link>  */}
                {/* <Link to={"/display"}>  */}
                   <div className="navbar__footerText">New Fragrances</div>
                {/* </Link>  */}
                {/* <Link to={"/display"}>  */}
                   <div className="navbar__footerText">For Men</div>
                {/* </Link>  */}
                {/* <Link to={"/display"}> */}
                   <div className="navbar__footerText">For Women</div>
                {/* </Link>  */}
                {/* <Link to={"/display"}>  */}
                   <div className="navbar__footerText">Brands</div>
                {/* </Link>   */}
               </div>
            </div> 
        );
    }
}

export default NavBar;

