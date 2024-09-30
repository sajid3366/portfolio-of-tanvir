import React from 'react';
import image from "../../../public/image/tanvir-13.png"
import linkedin from "../../../public/image/linkedin-logo.png"
import twitter from "../../../public/image/logo-X.jpg"
import fb from "../../../public/image/logo-fb.png"
import github from "../../../public/image/logo-github.png"
import mail from "../../../public/image/logo-mail.png"



import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Banner = () => {
    return (

        <div className="hero mt-10">
            <div className="hero-content flex gap-x-[60px]">
                <div className='lg:w-3/5'>
                    <h1 className="text-7xl font-bold">Tanvir Shaikat</h1>
                    <h2 className='text-2xl pt-3 pl-3 font-semibold'>Mechine Learning Engineer | Data Analyst | Reseacher</h2>
                    <p className="py-6 text-lg text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum perferendis itaque cupiditate ab odio! Doloribus, impedit ipsum obcaecati nesciunt inventore nemo hic voluptatem ratione fugiat iure, facilis tempora cupiditate quas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quae aperiam repellendus saepe molestias consequatur eveniet aliquam suscipit nobis quaerat doloribus alias molestiae minima, corporis voluptate odio incidunt culpa delectus.
                    </p>
                    <ul className='flex items-center gap-x-3 my-5'>
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
                    <p className="bg-primary text-white w-[250px] px-2 py-2 text-lg font-semibold rounded-md flex gap-2 items-center justify-center cursor-pointer hover:bg-transparent hover:text-black hover:border-primary hover:border-[1px]"><a href="https://www.linkedin.com/in/tanvir-shaikat" target="_blank" rel="noreferrer"> Follow Me On LinkedIn</a></p>
                </div>
                <div className='lg:w-2/5'>
                    <img src={image} className="w-[500px]" />
                </div>

            </div>
        </div>

    );
};

export default Banner;