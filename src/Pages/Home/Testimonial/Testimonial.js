import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Reviews from '../Reviews/Reviews';

const Testimonial = () => {

    const dataList = [
        {
            id: 1,
            name: 'Winson Herry',
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location: 'California'

        },
        {
            id: 2,
            name: 'Winson Herry',
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location: 'California'

        },
        {
            id: 3,
            name: 'Winson Herry',
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location: 'California'

        }
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-primary'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <img className='w-16 lg:w-32' src={quote} alt="" />
            </div>

            <div className='grid mt-10 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    dataList.map(data => <Reviews
                        key={data.id}
                        data={data}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;