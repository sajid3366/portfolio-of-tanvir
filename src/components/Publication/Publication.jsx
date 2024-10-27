import React from 'react';
import image1 from '../../../public/image/research-1.webp'
import image2 from '../../../public/image/research-2.webp'

const Publication = () => {
    return (
        <div className=' w-[1100px] mx-auto px-10 mt-8 mb-12'>
            <h1 className='text-4xl font-semibold '>Publication</h1>
            <div className='flex  mt-8 mb-5 w-[1000px] '>
                <p className='text-lg'>I am deeply involved in cutting-edge research across artificial intelligence and machine learning, with a focus on practical applications of natural language processing and computer vision. Some of my notable research contributions include</p>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-14'>
                <div className="rounded-md bg-base-100">
                    <h1 className='text-2xl font-bold mb-5 p-3'>ConvNet9: A Cutting-Edge Customized Convolutional Neural Network Model to Identify Potato Leaf Disease with Web Application</h1>
                    <figure>
                        <img
                            src={image1}
                            alt="research-1" />
                    </figure>
                    <div className="p-3 ">
                        <h2 className="text-xl font-semibold mb-2">Author - Tanvir Shaikat</h2>
                        <h3 className='mb-2 text-lg font-medium'>Category - Submitted to Computers and Electronics in Agriculture</h3>
                        <p>Collaborated on designing a CNN-based model for agricultural diagnostics.</p>
                        <div className="card-actions mt-[44px] justify-end">
                            <p className="bg-primary text-white px-3 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center cursor-pointer hover:transition duration-700 hover:scale-105"><a href="" target="_blank" rel="noreferrer">Preview</a></p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-base-100">
                    <h1 className='text-2xl font-bold mb-[52px] p-3'>Brain Stroke Prediction Using Explainable Machine Learning and Time Series Feature Engineering</h1>
                    <figure>
                        <img
                            src={image2}
                            alt="research-2" />
                    </figure>
                    <div className="p-3 ">
                        <h2 className="text-xl font-semibold mb-2">Author - Tanvir Shaikat</h2>
                        <h3 className='mb-2 text-lg font-medium'>Category - Accepted for publication at IEEE’s 2nd International Conference on Information and Communication Technology</h3>
                        <p>Focused on explainable AI techniques to predict brain strokes using time series data.</p>
                        <div className="card-actions mt-5 justify-end">
                            <p className="bg-primary text-white px-3 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center cursor-pointer hover:transition duration-700 hover:scale-105"><a href="" target="_blank" rel="noreferrer"> Preview</a></p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-base-100">
                    <h1 className='text-2xl font-bold mb-5 p-3'>Early-Stage Diabetes Risk Prediction Utilizing Machine Learning with Explainable AI from Polynomial and Binning Feature Generation</h1>
                    <figure>
                        <img
                            src={image2}
                            alt="research-2" />
                    </figure>
                    <div className="p-3 ">
                        <h2 className="text-xl font-semibold mb-2">Author - Tanvir Shaikat</h2>
                        <h3 className='mb-2 text-lg font-medium'>Category - Accepted for publication at IEEE’s 2nd International Conference on Information and Communication Technology</h3>
                        <p>Applied innovative machine learning techniques for early-stage diabetes prediction.</p>
                        <div className="card-actions mt-[68px] justify-end">
                            <p className="bg-primary text-white px-3 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center cursor-pointer hover:transition duration-700 hover:scale-105"><a href="" target="_blank" rel="noreferrer"> Preview</a></p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-base-100">
                    <h1 className='text-2xl font-bold mb-5 p-3'>Bachelor’s Thesis: A Machine Learning and Explainable Artificial Intelligence-based AI Text Detection Technique from Optimal Features</h1>
                    <figure>
                        <img
                            src={image2}
                            alt="research-2" />
                    </figure>
                    <div className="p-3 ">
                        <h2 className="text-xl font-semibold mb-2">Author - Tanvir Shaikat</h2>
                        <h3 className='mb-2 text-lg font-medium'>Category - Accepted for publication at IEEE’s 2nd International Conference on Information and Communication Technology</h3>
                        <p>I explored the application of BERT embeddings and tokenizers for AI text detection. The thesis focused on feature optimization techniques and investigating the reasoning behind model decisions using Explainable AI (XAI).</p>
                        <div className="card-actions mt-5 justify-end">
                            <p className="bg-primary text-white px-3 py-1 text-lg font-semibold rounded-sm flex gap-2 items-center justify-center cursor-pointer hover:transition duration-700 hover:scale-105"><a href="" target="_blank" rel="noreferrer"> Preview</a></p>
                        </div>
                    </div>
                </div>
                
                
            </div>

        </div>
    );
};

export default Publication;