import React, { useEffect, useState } from 'react';
import ExplainReviews from '../ExplainReviews/ExplainReviews';
import './Review.css';

// const reviewFakeData = [
//     {
//         name: 'Johhy Deb',
//         companyName : 'XYZ company'
//     },
//     {
//         name: 'Johhy Deb',
//         companyName : 'XYZ company'
//     },
//     {
//         name: 'Johhy Deb',
//         companyName : 'XYZ company'
//     },
//     {
//         name: 'Johhy Deb',
//         companyName : 'XYZ company'
//     },
//     {
//         name: 'Johhy Deb',
//         companyName : 'XYZ company'
//     },
//     {
//         name: 'Johhy Deb',
//         companyName : 'XYZ company'
//     }
// ]

const Review = () => {
    const [yourReview, setYourReview] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setYourReview(data))
    },[])

    return (
        <div className="backgroundClr color review-container">
            <h1>Reviews</h1>
            <div className="scroll">
            {
                yourReview?.map(review => <ExplainReviews review={review}></ExplainReviews>)
            }
            </div>
        </div>
    );
};

export default Review;