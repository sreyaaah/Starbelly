import React from "react";
import aboutCSS from  './../About/About.module.css'
import aboutImg from './../../Images/aboutImg.jpg'

function About(){
    return(
        <div className={`${aboutCSS.aboutwrapper} section`} id="about">
            <div className={aboutCSS.img}>
                <img src={aboutImg} alt="" />
                <div className={aboutCSS.experiCard}>
                    <h2>17</h2>
                    <p>Experience</p>
                </div>
            </div>
            <div className={aboutCSS.content}>
                <h2>We Are Doing More Than You Expect</h2>
                <div className={aboutCSS.aboutCard}>
                    <h5>01</h5>
                    <div>
                        <h3>We are located the city center</h3>
                        <p>In the heart of the bustling city, where cultures converge and stories unfold, our restaurant offers a sanctuary of flavor, warmth, and unforgettable dining experiences.</p>
                    </div>
                </div>
                <div className={aboutCSS.aboutCard}>
                    <h5>02</h5>
                    <div>
                        <h3>Fresh , Organic Ingredients</h3>
                        <p>At the heart of every dish we serve lies a commitment to using only the freshest, organically grown ingredients, handpicked from trusted local farms to ensure that every bite not only delights your taste buds but also nourishes your body and respects the earth.</p>
                    </div>
                </div>
                <div className={aboutCSS.aboutCard}>
                    <h5>03</h5>
                    <div>
                        <h3>Own Fast Delivery</h3>
                       <p>From kitchen to curb, our dedicated delivery team ensures that your food arrives with the same attention to detail and hospitality you'd expect if you were dining in, because we believe fast shouldn’t mean compromising quality</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
