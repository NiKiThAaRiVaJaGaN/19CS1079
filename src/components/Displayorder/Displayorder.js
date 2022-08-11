import React from 'react';
import OrderLeft from './LeftSide/OrderLeft';
import OrderRight from './RightSide/OrderRight';

function Displayorders(props)
{
    return (
        <div style={{display: 'flex'}}>
            <div>
                <OrderLeft/>
            </div>
            <div>
                <OrderRight/>
            </div>
        </div>
    );
}

export default Displayorders;