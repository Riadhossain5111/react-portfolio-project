import React from 'react';
import './Portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio5.png";
import IMG5 from "../../assets/portfolio6.jpg";
import IMG6 from "../../assets/portfolio4.jpg";

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>My Recent Work</h2>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG1}
                            alt=""/>

                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/Riadhossain5111" className='btn' target='_blank'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

                    </div>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG2}
                            alt=""/>

                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/Riadhossain5111" className='btn' target='_blank'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

                    </div>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG3}
                            alt=""/>

                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/Riadhossain5111" className='btn' target='_blank'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

                    </div>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG4}
                            alt=""/>

                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/Riadhossain5111" className='btn' target='_blank'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

                    </div>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG5}
                            alt=""/>

                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/Riadhossain5111" className='btn' target='_blank'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

                    </div>

                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG6}
                            alt=""/>

                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/Riadhossain5111" className='btn' target='_blank'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

                    </div>

                </article>
            </div>
        </section>
    );
};

export default Portfolio;
