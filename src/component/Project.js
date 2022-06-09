import React from 'react';

const Project = ({img, title, des,live,code,details, tech1, tech2, tech3,tech4}) => {
    return (
        <div className="card w-full md:max-w-96 bg-base-100 shadow-xl mb-10 relative">
            <div className='scroll-img'>
        <figure className='w-full h-[250px]' ><img src={img} alt={title} /></figure></div>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{des}</p>
            <div className="card-actions gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="badge badge-outline">{tech1}</div> 
                <div className="badge badge-outline">{tech2}</div>
                <div className="badge badge-outline">{tech3}</div>
                <div className="badge badge-outline">{tech4}</div>
            </div>
            <div className="card-actions grid grid-cols-2 lg:grid-cols-3">
            <a href={live} className="custome-btn">Live</a>
            <a href={code} className="custome-btn">Code</a>
            <a href={details} className="custome-btn">Details</a>
            </div>
        </div>
        </div>
    );
};

export default Project;