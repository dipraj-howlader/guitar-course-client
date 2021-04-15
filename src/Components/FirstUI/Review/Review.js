import React from 'react';
import ExplainReviews from '../ExplainReviews/ExplainReviews';
import './Review.css';

const reviewFakeData = [
    {
        name: 'Johhy Deb',
        companyName : 'XYZ company'
    },
    {
        name: 'Johhy Deb',
        companyName : 'XYZ company'
    },
    {
        name: 'Johhy Deb',
        companyName : 'XYZ company'
    },
    {
        name: 'Johhy Deb',
        companyName : 'XYZ company'
    },
    {
        name: 'Johhy Deb',
        companyName : 'XYZ company'
    },
    {
        name: 'Johhy Deb',
        companyName : 'XYZ company'
    }
]
const Review = () => {
    return (
        <div className="backgroundClr color review-container">
            <h1>Reviews</h1>
            <div className="scroll">
            {
                reviewFakeData.map(review => <ExplainReviews review={review}></ExplainReviews>)
            }
            </div>
        </div>
    );
};

export default Review;