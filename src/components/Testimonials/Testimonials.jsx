import React from "react";

import AVTAR1 from "../../assets/avatar1.jpg";
import AVTAR2 from "../../assets/avatar2.jpg";
import AVTAR3 from "../../assets/avatar3.jpg";
import AVTAR4 from "../../assets/avatar4.jpg";
import './Testimonials.css'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper";


const data = [
    {
        avatar: AVTAR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ex enim deleniti, eum reprehenderit aperiam et ducimus excepturi possimus quas quae ipsa quisquam, in quidem molestiae quasi vero quo? Distinctio.'
    }, {
        avatar: AVTAR2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ex enim deleniti, eum reprehenderit aperiam et ducimus excepturi possimus quas quae ipsa quisquam, in quidem molestiae quasi vero quo? Distinctio.'
    }, {
        avatar: AVTAR3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ex enim deleniti, eum reprehenderit aperiam et ducimus excepturi possimus quas quae ipsa quisquam, in quidem molestiae quasi vero quo? Distinctio.'
    }, {
        avatar: AVTAR4,
        name: 'Nana Ama McBrown',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ex enim deleniti, eum reprehenderit aperiam et ducimus excepturi possimus quas quae ipsa quisquam, in quidem molestiae quasi vero quo? Distinctio.'
    },
]


const Testimonials = () => {

    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <>
                <Swiper className="mySwiper container testimonials_container"
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={
                        {clickable: true}
                    }
                    modules={
                        [Pagination]
                }>
                    {
                    data.map(({
                        avatar,
                        name,
                        review
                    }, index) => {
                        return <SwiperSlide key={index}
                            className="testimonial">
                            <div className="client-avater">
                                <img src={avatar}
                                    alt="Avatar one"/>
                            </div>
                            <h5 className="client_name">
                                {name}</h5>
                            <small className="client_review">
                                {review} </small>
                        </SwiperSlide>
                })
                } </Swiper>
            </>
        </section>
    );
};

export default Testimonials;
