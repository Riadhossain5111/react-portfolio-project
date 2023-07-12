import React from 'react';

import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="https://www.linkedin.com/in/riyad-hossain-5bb21921a/" target='_blank'>
                <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://github.com/Riadhossain5111" target='_blank'>
                <FaGithub></FaGithub>
            </a>
            <a href="https://www.facebook.com/riyadhossain410/" target='_blank'>
                <FaFacebook></FaFacebook>
            </a>
        </div>
    );
};

export default HeaderSocial;
