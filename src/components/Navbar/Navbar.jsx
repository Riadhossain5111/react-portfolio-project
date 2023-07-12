import React, {useState} from "react";
import {AiFillHome, AiOutlineBook, AiOutlineUser, AiOutlineUserAdd} from "react-icons/ai";
import {RiServiceFill} from "react-icons/ri";
import {BiMessageDetail} from "react-icons/bi";
import './Navbar.css'


const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#"
                onClick={
                    () => setActiveNav('#')
                }
                className={
                    activeNav === '#' ? 'active' : ''
            }>
                <AiFillHome></AiFillHome>
            </a>
            <a href="#about"
                onClick={
                    () => setActiveNav('#about')
                }
                className={
                    activeNav === '#about' ? 'active' : ''
            }>
                <AiOutlineUserAdd></AiOutlineUserAdd>
            </a>
            <a href="#experience"
                onClick={
                    () => setActiveNav('#experience')
                }
                className={
                    activeNav === '#experience' ? 'active' : ''
            }>
                <AiOutlineBook></AiOutlineBook>
            </a>
            <a href="#services"
                onClick={
                    () => setActiveNav('#services')
                }
                className={
                    activeNav === '#services' ? 'active' : ''
            }>
                <RiServiceFill></RiServiceFill>
            </a>
            <a href="#contact"
                onClick={
                    () => setActiveNav('#contact')
                }
                className={
                    activeNav === '#contact' ? 'active' : ''
            }>
                <BiMessageDetail></BiMessageDetail>
            </a>
        </nav>
    );
};

export default Navbar;
