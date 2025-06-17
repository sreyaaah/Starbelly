import React, { useRef } from "react";
import navcss from './../Nav/Nav.module.css';
import logo from './../../Images/logo.png';

function Nav() {
    const menu = useRef();

    const showMenu = () => {
        menu.current.classList.toggle(navcss.showMenu);
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            menu.current.classList.remove(navcss.showMenu);
        }
    };

    return (
        <div className={navcss.navContainer}>
            <div className={navcss.nav}>
                <div className={navcss.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <ul ref={menu} className={navcss.navLinks}>
                    <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li><a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Menu</a></li>
                    <li><a href="#dishes" onClick={(e) => scrollToSection(e, 'dishes')}>Popular Dishes</a></li>
                    <li><a href="#team" onClick={(e) => scrollToSection(e, 'team')}>Team</a></li>
                </ul>
                <div className={navcss.navIcons}>
                    <i className="ri-shopping-bag-line"></i>
                    <i className="ri-menu-line" id={navcss.bars} onClick={showMenu}></i>
                </div>
            </div>
        </div>
    );
}

export default Nav;