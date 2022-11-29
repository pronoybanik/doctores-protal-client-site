import React from 'react';
import img from '../../../assets/images/treatment.png'
import Buttons from '../../../component/Buttons/Buttons';

const DentalCard = () => {
    return (
        <div className='my-28'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className=" lg:max-w-sm rounded-lg shadow-2xl "  />
                    <div className='ml-6'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Buttons>Get Started</Buttons>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DentalCard;