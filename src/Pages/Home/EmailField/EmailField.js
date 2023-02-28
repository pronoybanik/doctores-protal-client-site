import React from 'react';
import img from '../../../assets/images/appointment.png'
import Buttons from '../../../component/Buttons/Buttons';

const EmailField = () => {
    return (
        <section data-aos="zoom-in-down" className='mt-20 py-12'
            style={{
                background: `url(${img})`
            }}
        >
            <div className='text-center mb-10'>
                <h2 className='text-primary font-bold'>Contact Us</h2>
                <h2 className='text-2xl text-white  '>Stay connected with us</h2>
            </div>
            <div >
                <div className=' flex  items-center justify-center mb-2'>

                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  " />
                </div>
                <div className='flex  items-center justify-center mb-2'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex  items-center justify-center'>
                    <textarea className="textarea textarea-bordered w-80 " placeholder="Bio"></textarea>
                </div>
                <div  className='flex  items-center justify-center mt-4'>
                    <Buttons>Submit</Buttons>
                </div>
            </div>


        </section>
    );
};

export default EmailField;