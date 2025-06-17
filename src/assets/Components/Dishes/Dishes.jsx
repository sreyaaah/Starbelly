import React from "react";
import dishesCSS from './../Dishes/Dishes.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from './../../Images/menu-1.png' 
import img2 from './../../Images/menu-2.jpg' 
import img3 from './../../Images/menu-3.jpg' 
import img4 from './../../Images/menu-4.png' 
import img5 from './../../Images/menu-5.jpg' 
import img6 from './../../Images/menu-6.jpg' 

function Dishes({id}){
    return(
        <section id={id} >
        <div className={`${dishesCSS.dishWrapper} section`}>
            <div className={dishesCSS.sectionTitle}>
                <h2>Most Popular Dishes</h2>
                <div>
                    <p>Taste the dishes everyone keeps coming back for.</p>
                    <button><i className="fas fa-mug-hot"></i>Get Menu</button>
                </div>
            </div>
            <div className={dishesCSS.cardsWrapper}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                spaceBetween={40}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }}
                className={dishesCSS.swiperContainer}
            >
                <SwiperSlide className={dishesCSS.swiperSlide}>
                    <div className={dishesCSS.card}>
                        <img src={img1} alt="Fish Curry" />
                        <div className={dishesCSS.content}>
                            <div className={dishesCSS.primDetail}>
                                <h3>Fish Curry</h3>
                                <h5>$4.25</h5>
                            </div>
                            <p>A flavorful fish curry simmered in spiced coconut gravy, served hot and hearty</p>
                            <div className={dishesCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={dishesCSS.swiperSlide}>
                    <div className={dishesCSS.card}>
                        <img src={img2} alt="Shrimp & Veggie Noodles" />
                        <div className={dishesCSS.content}>
                            <div className={dishesCSS.primDetail}>
                                <h3>Shrimp & Veggie Noodles</h3>
                                <h5>$4.75</h5>
                            </div>
                            <p>A delicious mix of noodles, shrimp, mushrooms, and crisp veggies tossed in a light savory sauce.</p>
                            <div className={dishesCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={dishesCSS.swiperSlide}>
                    <div className={dishesCSS.card}>
                        <img src={img3} alt="Chicken Biryani" />
                        <div className={dishesCSS.content}>
                            <div className={dishesCSS.primDetail}>
                                <h3>Chicken Biryani</h3>
                                <h5>$5.00</h5>
                            </div>
                            <p>Fragrant basmati rice cooked with tender spiced chicken, herbs, and whole spices for a rich and hearty meal.</p>
                            <div className={dishesCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={dishesCSS.swiperSlide}>
                    <div className={dishesCSS.card}>
                        <img src={img4} alt="Palak Paneer" />
                        <div className={dishesCSS.content}>
                            <div className={dishesCSS.primDetail}>
                                <h3>Palak Paneer</h3>
                                <h5>$3.75</h5>
                            </div>
                            <p>Creamy spinach curry cooked with mild spices and topped with soft cubes of paneer.</p>
                            <div className={dishesCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={dishesCSS.swiperSlide}>
                    <div className={dishesCSS.card}>
                        <img src={img6} alt="Garlic Butter Shrimp Bowl" />
                        <div className={dishesCSS.content}>
                            <div className={dishesCSS.primDetail}>
                                <h3>Garlic Butter Shrimp Bowl</h3>
                                <h5>$5.25</h5>
                            </div>
                            <p>Juicy shrimp sautéed in garlic butter, served over steamed rice with peas, herbs, and lemon wedges.</p>
                            <div className={dishesCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={dishesCSS.swiperSlide}>
                    <div className={dishesCSS.card}>
                        <img src={img5} alt="Salmon Rice Bowl" />
                        <div className={dishesCSS.content}>
                            <div className={dishesCSS.primDetail}>
                                <h3>Salmon Rice Bowl</h3>
                                <h5>$5.50</h5>
                            </div>
                            <p>Fresh salmon served over steamed rice with leafy greens and a sprinkle of sesame seeds for a nutritious meal.</p>
                            <div className={dishesCSS.ratings}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </section>
    )
}

export default Dishes