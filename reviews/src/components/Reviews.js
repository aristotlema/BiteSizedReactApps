import React from 'react';

const Reviews = ({ reviews }) => {
    const reviewList = reviews.map(({reviwerName, jobTitle, picture, reviewText}) => {
        return(
            <div>
                {reviwerName} - {jobTitle} - {picture} {reviewText}
            </div>
        );
    });
    return(
        <>
            <h1>Our Reviews</h1>
            <div className="review-card">
                {reviewList}
            </div>
        </>
    );
};

export default Reviews;