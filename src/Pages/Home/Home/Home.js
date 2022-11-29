import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import DentalCard from '../DentalCard/DentalCard';
import EmailField from '../EmailField/EmailField';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCard></DentalCard>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <EmailField></EmailField>
        </div>
    );
};

export default Home;