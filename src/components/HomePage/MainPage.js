import React, { Component } from "react";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import "./MainPage.css";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={ }
        console.log(21);
    }
    render() {
        return ( 
            <div className="mainpage">
                <div style={{paddingTop: "40px", "display": "flex", flexWrap: "wrap"}}>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                </div>
            </div>
            
        );
    }
}

export default MainPage;