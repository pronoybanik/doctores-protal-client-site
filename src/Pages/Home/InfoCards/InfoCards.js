import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';



const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass:'bg-primary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass:'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass:'bg-primary'
        },
    ]

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
            cardData.map(card=><InfoCard
            key={card.id}
            card={card}
            ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;






// const InfoCards = () => {

//     const cardData = [
//         {
//             id: 1,
//             name: 'opening Hours',
//             description: 'Open 9.00 am to 5.00pm everyday',
//             icon: clock,
//             bgClass: 'bg-primary'

//         },
//         {
//             id: 2,
//             name: 'Visit our location',
//             description: 'Brooklyn, NY 10036, United States',
//             icon: marker,
//             bgClass: 'bg-accent'

//         },
//         {
//             id: 3,
//             name: 'Contact us now',
//             description: '01958604911',
//             icon: phone,
//             bgClass: 'bg-primary'

//         },
//     ]
    
//     return (
//         <div>
//             {
//                 cardData.map(data => <InfoCard
//                     key={data.id}
//                     // data={data}
//                      {...data}
//                 ></InfoCard>)
//             }
            
//         </div>
//     );
// };

// export default InfoCards;