import React from 'react';

const Project = ({img, title, des,live,code,details, tech1, tech2, tech3,tech4}) => {
    return (
        <div class="card w-full md:max-w-96 bg-base-100 shadow-xl">
        <figure ><img src={img} alt={title} className='w-full h-auto'/></figure>
        <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <p>{des}</p>
            <div class="card-actions gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="badge badge-outline">{tech1}</div> 
                <div class="badge badge-outline">{tech2}</div>
                <div class="badge badge-outline">{tech3}</div>
                <div class="badge badge-outline">{tech4}</div>
            </div>
            <div class="card-actions grid grid-cols-2 lg:grid-cols-3">
            <a href={live} class="custome-btn">Live</a>
            <a href={code} class="custome-btn">Code</a>
            <a href={details} class="custome-btn">Details</a>
            </div>
        </div>
        </div>
    );
};

export default Project;