import React from "react";
import menuCSS from'./../Menu/menu.module.css'

import category1 from './../../Images/category1.png'
import category2 from './../../Images/category2.png'
import category3 from './../../Images/category3.png'
import category4 from './../../Images/category4.png'


function Menu({id}){
    return(
        <section id={id}>
        <div className={`${menuCSS.menuwrapper}section`}>
            <div className="section-title">
                <h2>What Do You Like Today?</h2>
                <div>
                    <p>“Discover a taste of the city at its finest—central, stylish, and full of the delicious moments that make downtown dining unforgettable.</p>
                    <button><i className="fa-solid fa-arrow-right"></i>Shop Now</button>
                </div>
            </div>
            <div className={menuCSS.menuCards}>
                <div className={menuCSS.menuCard}>
                    <img src={category1} alt="" />
                    <div>
                        <h3>Starters</h3>
                        <p>Begin your culinary journey with our handcrafted starters</p>
                    </div>
                </div>
                <div className={menuCSS.menuCard}>
                    <img src={category2} alt="" />
                    <div>
                        <h3>Drinks</h3>
                        <p>Sip on something special with our wide range of beverages.</p>
                    </div>
                </div>
                <div className={menuCSS.menuCard}>
                    <img src={category3} alt="" />
                    <div>
                        <h3>Main Dishes</h3>
                        <p>Savor the soul of our kitchen with every bite of our delicious main courses.</p>
                    </div>
                </div>
                <div className={menuCSS.menuCard}>
                    <img src={category4} alt="" />
                    <div>
                        <h3>Desserts</h3>
                        <p>A little something sweet to make your day complete</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Menu