import React from 'react';
import img from '../../../assets/images/bg.png';
import img1 from '../../../assets/images/chair.png'
import Buttons from '../../../component/Buttons/Buttons';
// import './Banner.css'

const Banner = () => {


    // https://doctors-protal-c7857.web.app/appointment
    // pronoy82@gmail.com
    // aA1@34 


    return (
        <div  className='edit w-full h-1/4'
        style={{ 
            
            background: `url(${img})`
            
        }}
        >
            <div className="hero "  >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="  lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <Buttons>Get Started</Buttons>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;