import React from 'react';
import AboutMe from "../../assets/me-about.jpg";
import {LuAward} from "react-icons/lu";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import './About.css'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="aboutMe_image">
                        <img src={AboutMe}
                            alt="About_Image"/>
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <LuAward className='about_icon'></LuAward>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'></FiUsers>
                            <h5>Experience</h5>
                            <small>200+ worldwide</small>
                        </article>


                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                            <h5>Experience</h5>
                            <small>80+ completed</small>
                        </article>

                    </div>

                    <p>I am web desinger . I have been working as a web designer for three years . As a web designer I have experience working with Fiverr and Upwork . I also have experience working with local clients . Feel free to message me if you need any design .
                    </p>
                    <a className='btn btn-primary text-light' href="#contact">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
