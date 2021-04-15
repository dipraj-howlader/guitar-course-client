import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CourseOverview from '../CourseOverview/CourseOverview';
import HeaderMain from '../HeaderMain/HeaderMain';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <CourseOverview></CourseOverview>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;