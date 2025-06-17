import React from "react";
import adCSS from './../Ad/Ad.module.css'

import adPhoto from './../../Images/ad.png'
import playStore from './../../Images/store.png'
import shape1 from './../../Images/shape1.png'
import shape2 from './../../Images/shape2.png'
import shape3 from './../../Images/shape3.png'

function Ad(){
    return(
        <div className={`section ${adCSS.adWrapper}`}>
            <div className={adCSS.content}>
                <h1>Dowload Our Mobile App</h1>
                <p>Download our restaurant app for exclusive deals and easy ordering!</p>
                <div className={adCSS.store}>
                    <img src={playStore} alt="" />
                </div>
            </div>
            <div className={adCSS.adImg}>
                <img src={adPhoto} alt="" />
            </div>
        </div>
    )
}

export default Ad