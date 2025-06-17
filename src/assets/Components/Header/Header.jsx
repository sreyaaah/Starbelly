import React from "react";
import headerCSS from './../Header/Header.module.css'

import heroImg from './../../Images/girl.png'
import shape1 from './../../Images/shape1.png'
import shape2 from './../../Images/shape2.png'
import shape3 from './../../Images/shape3.png'

import { MouseParallax } from 'react-just-parallax'


function Header({id}){
    return(
        <section id={id} className="header-section">
       <div className={`${headerCSS.headerwrapper} section`} id="home">
            <div className={headerCSS.content}>
                <h4>Hi, Friends</h4>
                <h1>We Do Not Cook,We Create <span>Your Emotions</span></h1>
                <p>Welcome to a place where every dish is a celebration, every ingredient is handpicked, and every bite tells a story crafted by passion, tradition, and creativity</p>
                <div className={headerCSS.buttons}>
                    <button>
                        <i className="fas fa-mug-hot"></i>
                        Our Menu
                    </button>
                    <button>
                        <i className="fa-regular fa-circle-user"></i>
                        About Us
                    </button>
                </div>
            </div>
            <div className={headerCSS.image}>
                <img src={heroImg} alt="" id={headerCSS.heroImg} />
            
                    <img src={shape1} alt="" className={`${headerCSS.shape} ${ headerCSS.shape1}`} />
                    <img src={shape2} alt="" className={`${headerCSS.shape} ${ headerCSS.shape2}`} />
                    <img src={shape3} alt="" className={`${headerCSS.shape} ${ headerCSS.shape3}`} />

                    <span className={headerCSS.span1}></span>
                    <span className={headerCSS.span2}></span>
            </div>
        </div>
         </section>
    )
}
export default Header