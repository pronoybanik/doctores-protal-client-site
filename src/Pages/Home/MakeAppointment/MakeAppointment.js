import React from 'react';
import img from '../../../assets/images/doctor.png';
import img1 from '../../../assets/images/appointment.png';
import Buttons from '../../../component/Buttons/Buttons';

const MakeAppointment = () => {
    return (
        <section data-aos="zoom-in-down" className='mt-64'
          style={{ 
            background: `url(${img1})`
        }}
        >

            <div className="hero" >
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="-mt-32 hidden md:block   max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-4 text-white'>
                        <h1 className='text-primary font-bold mb-2'>Appointment</h1>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                       <Buttons>Get Started</Buttons>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;