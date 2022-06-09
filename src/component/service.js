import React from 'react';

const service = ({img, title}) => {
    return (
        
            <div class="card w-full md:max-w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt={title} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
               
            </div>
            </div>
     
    );
};

export default service;