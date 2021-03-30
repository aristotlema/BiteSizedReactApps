import React, { useState } from 'react';

const Reviews = ({ reviews }) => {
    const [selectedReview, setSelectedReview] = useState(0);
    // const reviewList = reviews.map(({reviwerName, jobTitle, picture, reviewText}) => {
    //     return(
    //         <div>
    //             {reviwerName} - {jobTitle} - {picture} {reviewText}
    //         </div>
    //     );
    // });
    
    const previousReview = () => {
        if(selectedReview <= 0) {
            setSelectedReview(reviews.length - 1);
        } else if (selectedReview >= 0){
            setSelectedReview(selectedReview - 1);
        }
    };
    const nextReview = () => {
        console.log(reviews.length);
        
        if(selectedReview  >= reviews.length - 1) {
            setSelectedReview(0);
        } else if (selectedReview < reviews.length) { 
            setSelectedReview(selectedReview + 1);
        } else {
            console.log("something went wrong somewhere");
        }
        console.log(selectedReview);
    };

    return(
        <>
            <h1>Our Reviews</h1>
            <div className="review-card">
                {reviews[selectedReview].reviewerName}
                <div>
                    <button onClick={() => previousReview()}>Back</button>
                    <button onClick={() => nextReview()}>Next</button>
                </div>
            </div>
        </>
    );
};

export default Reviews;