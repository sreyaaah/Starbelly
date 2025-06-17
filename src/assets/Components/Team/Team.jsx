import React from "react";
import teamCSS from './../Team/Team.module.css';

import TeamCardImg1 from './../../Images/chef1.png'
import TeamCardImg2 from './../../Images/chef2.png'
import TeamCardImg3 from './../../Images/chef3.png'
import TeamCardImg4 from './../../Images/chef4.png'

function Team({id}){
    return(
        <section id={id}>
        <div className={`section ${teamCSS.TeamWrapper}`}>
            <div className="section-title">
                <h2>They Will Cook For You</h2>
                <div>
                    <p>In our kitchen, cooking is an art — and our chefs are artists who transform simple ingredients into unforgettable culinary experiences.</p>
                    <button><i className="fas fa-mug-hot"></i>More About</button>
                </div>
            </div>
            <div className={teamCSS.TeamCards}>
                <div className={teamCSS.TeamCard}>
                    <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg1} alt="" />
                    </div>
                    <h3>James Walker</h3>
                    <p>chef</p>
                    <div className={teamCSS.Social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-fill"></i>
                    </div>
                </div>
                <div className={teamCSS.TeamCard}>
                    <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg2} alt="" />
                    </div>
                    <h3>Ethan Brooks</h3>
                    <p>chef</p>
                    <div className={teamCSS.Social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-fill"></i>
                    </div>
                </div>
                <div className={teamCSS.TeamCard}>
                    <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg3} alt="" />
                    </div>
                    <h3>Ryan Carter</h3>
                    <p>chef</p>
                    <div className={teamCSS.Social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-fill"></i>
                    </div>
                </div>
                <div className={teamCSS.TeamCard}>
                    <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg4} alt="" />
                    </div>
                    <h3>Mason Reed</h3>
                    <p>chef</p>
                    <div className={teamCSS.Social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Team