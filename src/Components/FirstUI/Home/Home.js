import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CourseOverview from '../CourseOverview/CourseOverview';
import HeaderMain from '../HeaderMain/HeaderMain';
import Review from '../Review/Review';
import Services from '../Services/Services';
import StayConnected from '../StayConnected/StayConnected';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <CourseOverview></CourseOverview>
            <Review></Review>
            <Teachers></Teachers>
            <StayConnected></StayConnected>
            <Footer></Footer>
        </div>
    );
};

export default Home;