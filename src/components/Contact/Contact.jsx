import React, {useRef} from 'react';
import {MdEmail} from "react-icons/md";
import {BsMessenger, BsWhatsapp} from "react-icons/bs";
import './Contact.css'
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const notify = () => toast("Email Send Success");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8m3ebiw', 'template_didr7qa', form.current, 'mDa4-TBMrl8bwz3Tc').then((result) => {
            if (result) {
                e.target.reset()
                notify()
            }

        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdEmail className='contact_option-icon'></MdEmail>
                        <h4>Email</h4>
                        <h5>riyadhossain5111@gmail.com</h5>
                        <a href="mailto:riyadhossain5111@gmail.com">Set a Message</a>
                    </article>
                    <article className='contact_option'>
                        <BsMessenger className='contact_option-icon'></BsMessenger>
                        <h4>Messenger</h4>
                        <h5>riyadhossain410</h5>
                        <a href="https://m.me/riyadhossain410">Send a Message</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon'></BsWhatsapp>
                        <h4>Whatsapp</h4>
                        <h5>88+01968986756</h5>
                        <a href="https://api.whatsapp.com/send?phone=+01968986756">Send a Message</a>
                    </article>
                </div>
                <form ref={form}
                    onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='name' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>send Message</button>
                    <ToastContainer/>
                </form>
            </div>
        </section>
    );
};

export default Contact;
