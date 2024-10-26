import React from 'react';
import image from '../../../public/image/research_image_1.png'
import { BsLightningFill } from "react-icons/bs";




const Ido = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-5xl font-bold text-center mb-16'>What I Do?</h1>
            <div className='flex justify-center gap-x-16'>
                <img className='w-[500px] h-[500px]' src={image} alt="" />
                <div className=''>
                    <h2 className='text-5xl'>Research & Publication</h2>
                    <div className='mt-8'>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <BsLightningFill className='mt-2' /><p className='text-xl'>Artificial Intelligence</p>
                        </div>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <BsLightningFill className='mt-2' /><p className='text-xl'>Machine Learning</p>
                        </div>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <BsLightningFill className='mt-2' /><p className='text-xl'>Natural Language Processing (NLP)</p>
                        </div>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <BsLightningFill className='mt-2' /><p className='text-xl'>Large Language Model</p>
                        </div>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <BsLightningFill className='mt-2' /><p className='text-xl'>Generative AI</p>
                        </div>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <BsLightningFill className='mt-2' /><p className='text-xl'>Computer Vision (disigne ba | bar maira dio)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ido;