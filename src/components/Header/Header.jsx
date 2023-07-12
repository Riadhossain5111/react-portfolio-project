import React from 'react';
import Biodata from './Biodata';
import myImage from "../../assets/myImage.png"
import HeaderSocial from './HeaderSocial';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className="container header_container ">
                <h5>Hello I'm</h5>
                <h1>Riad Hossain</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <Biodata></Biodata>
                <HeaderSocial></HeaderSocial>
            </div>
            <div className="header_img">
                <img src={myImage}
                    alt=""/>
            </div>
            <a className='scroll_down ' href="#contact">Scroll Down</a>
        </div>
    );
};

export default Header;
