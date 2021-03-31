import React, { useState } from 'react';
import './Reviews.css'

const Reviews = ({ reviews }) => {
    const [selectedReview, setSelectedReview] = useState(0);
    
    const previousReview = () => {
        if(selectedReview <= 0) {
            setSelectedReview(reviews.length - 1);
        } else if (selectedReview >= 0){
            setSelectedReview(selectedReview - 1);
        }
    };
    const nextReview = () => {
        if(selectedReview  >= reviews.length - 1) {
            setSelectedReview(0);
        } else if (selectedReview < reviews.length) { 
            setSelectedReview(selectedReview + 1);
        } else {
            console.log("something went wrong somewhere");
        }
    };

    return(
        <>
            <h1 className="reviews-title">Our Reviews</h1>
            <div className="review-card">
                <div className="review-card-picture">
                    <img src={reviews[selectedReview].picture} alt="reviewer" />
                </div>
                <div>
                    <h4 className="review-card-reviewer-name">
                        {reviews[selectedReview].reviewerName}
                    </h4>
                    <p className="review-card-job-title">
                        {reviews[selectedReview].jobTitle}
                    </p>
                </div>
                <div className="review-card-review-text">
                    {reviews[selectedReview].reviewText}
                </div>
                <div className="review-card-buttons">
                    <div className="arrow left" onClick={() => previousReview()}></div>
                    <div className="arrow right" onClick={() => nextReview()}></div>
                </div>
            </div>
        </>
    );
};

export default Reviews;