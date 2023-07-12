import React from 'react';
import {BsFacebook} from "react-icons/bs";
import {BiLogoInstagram} from "react-icons/bi";
import {AiFillTwitterCircle} from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Riad Hossain</a>
            <ul className='permalinks'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer_socials">
                <a href="https://facebook.com">
                    <BsFacebook></BsFacebook>
                </a>
                <a href="https://instagram.com">
                    <BiLogoInstagram></BiLogoInstagram>
                </a>
                <a href="https://twiter.com">
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                </a>

            </div>
            <div className='footer_copyright'>
                <small>$copy:All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
