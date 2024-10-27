import React, { useRef } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import image from "../../../public/image/tanvir-13.png"
import linkedin from "../../../public/image/linkedin-logo.png"
import twitter from "../../../public/image/logo-X.jpg"
import fb from "../../../public/image/logo-fb.png"
import github from "../../../public/image/logo-github.png"
import mail from "../../../public/image/logo-mail.png"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: '1GJ85pYmkF0ONokKR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='w-[1100px] mx-auto px-10 mt-8 mb-20'>
            <h1 className='text-4xl font-semibold mb-5'>Reach Me Anytime</h1>
            <div className='flex gap-x-8'>
                <div className='w-1/2'>
                    <p className='my-2'>I am easily accessible across various social media platforms. Feel free to drop me a message, and you can expect a prompt response within a few hours. I'm here to assist you with research, guiding, utilizing tools & software in biological science research, programming in biology, as well as video editing and graphic design.</p>
                    <p className="font-semibold mt-8 flex gap-x-2 items-center "><FaPhoneAlt className="text-black"></FaPhoneAlt>+880 1925769550</p>

                    <ul className='flex items-center gap-x-3 mt-2'>
                        <li className='w-10 h-10 '>
                            <a href="https://github.com/tanvirshaikatx" target='_blank'>

                                <img src={github} alt="github" />
                            </a>
                        </li>
                        <li className='w-11 h-11'>
                            <a href="https://www.linkedin.com/in/tanvir-shaikat" target='_blank'>

                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </li>
                        <li className='w-9 h-10 '>
                            <a href="">

                                <img className='rounded-md' src={twitter} alt="twitter" />
                            </a>
                        </li>
                        <li className='w-9 h-10 '>
                            <a href="">
                                <img className='rounded-md' src={fb} alt="facebook" />

                            </a>
                        </li>
                        <li className='w-14 h-10 mb-5'>
                            <a href="mailto:tanvirshaikat40@gmail.com" >

                                <img src={mail} alt="" />
                            </a>
                        </li>
                    </ul>

                </div>


                <div className='w-1/2'>
                    <form className="max-w-4xl mx-auto text-center">
                        <input type="text" name="name" className=" block  py-2 px-3 border-[1px] border-gray-400 rounded-sm w-full mb-2" placeholder="Enter Your Name" id="" />
                        <input type="email" name="name" className="block py-2 px-3 border-[1px] border-gray-400 rounded-sm w-full mb-2" placeholder="Enter Your Email" id="" />
                        <textarea name="message" className="border-[1px] border-gray-400 w-full  rounded-sm px-3 py-2" placeholder="Message" id="" rows="10"></textarea>
                        <p className="bg-primary text-white px-3 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center cursor-pointer">Send Message</p>
                    </form>

                    {/* <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}

                </div>

            </div>
        </div>
    );
};

export default Contact;