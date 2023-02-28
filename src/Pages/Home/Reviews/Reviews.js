import React from 'react';

const Reviews = ({ data }) => {
    const { name, img, details, location } = data;
    return (
        <div data-aos="zoom-in-down" >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{details}</p>
                    <div className='flex items-center mt-6' >
                        <div className="avatar ">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div className='ml-2'>
                            <h2>{name}</h2>
                            <h2>{location}</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;