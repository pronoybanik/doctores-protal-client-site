import React from 'react';
import img1 from '../../assets/images/fluoride.png'
import img2 from '../../assets/images/cavity.png'
import img3 from '../../assets/images/whitening.png'
import { list } from 'postcss';
import Service from '../Service/Service';

const Services = () => {

    const lists = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: img1,
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: img2,
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: img3,
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },

    ]
    return (
        <div>

            <div className='my-20 text-center'>
                <h4 className='text-xl font-semibold  mb-2 text-primary'>OUR SERVICES</h4>
                <p className='text-4xl uppercase font-semibold'>Service We Provide</p>
            </div>

            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    lists.map(list => <Service
                        key={list.id}
                        data={list}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;