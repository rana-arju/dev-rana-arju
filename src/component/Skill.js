import React from 'react';

const Skill = () => {
    return (
        <div className='my-10' id="skill">
             <div>
                <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-center'>my <span className='cl-title'>Skills</span></h2>
            </div>
            <div class="hero h-full">
           
            <div class="hero-content flex-col lg:flex-row ">
                <div className='w-full md:w-1/2'>
                    <img src="https://i.ibb.co/tYkT5XB/skill.gif" alt=".." />
                </div>
                
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full md:w-1/2'>
              <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/5jM2pnf/nodejs.gif" alt="nodejs" class="rounded-full" />
                </figure>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/xXQNjjx/mongodb.gif" alt="mongodb" class="rounded-full" />
                </figure>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/M2sbmgq/react.gif" alt="react js" class="rounded-full" />
                </figure>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/DbFFDT6/javascript.gif" alt="javascript" class="rounded-full" />
                </figure>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/CVYMLrq/pythone.gif" alt="python" class="rounded-full" />
                </figure>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/znymz1L/css.gif" alt="css" class="rounded-full" />
                </figure>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/mqjjrmB/html.gif" alt="html" class="rounded-full" />
                </figure>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                <figure class="p-5">
                    <img src="https://i.ibb.co/mqTnS7d/github.gif" alt="github" class="rounded-full" />
                </figure>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Skill;