import React from 'react';
import Reviews from './Reviews';
import './reset.css';

const reviews = [
    {
        reviewerName: 'Susan Smith',
        jobTitle: 'Web Developer',
        picture: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        reviewText: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
    },
    {
        reviewerName: 'Anna Johnson',
        jobTitle: 'Web Designer',
        picture: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        reviewText: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
    },
    {
        reviewerName: 'Peter Jones',
        jobTitle: 'Intern',
        picture: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        reviewText: 'riracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },
    {
        reviewerName: 'Bill Anderson',
        jobTitle: 'The Boss',
        picture: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        reviewText: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
    }
];

const App = () => {
    return (
        <div>
            <Reviews reviews={reviews}/>
        </div>
    );
};

export default App;