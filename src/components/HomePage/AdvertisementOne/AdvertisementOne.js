import React from 'react';
import "./AdvertisementOne.css";

function AdvertisementOne(props){
    return(
        <div className='AdvertisementOne__main'>
            <div className='AdvertisementOne__header'>
                Upto 30% off | Clearance Sale
            </div>
            <div className='AdvertisementOne__body'>
                <img src="https://ik.imagekit.io/thescentsation56/perfume_images/main3_gzAteIIuy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654444112511" alt='blah' width='300px'/>
            </div>
            <div className='AdvertisementOne__footer'>
                See more
            </div>
        </div>
    );
}

export default AdvertisementOne;