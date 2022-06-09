import React from 'react';
import '../App.css';
const FloatingDiv = ({img, text1, text2}) => {
    return (
         // darkMode
    <div className="floatingDiv flex bg-white justify-around items-center">
      <img src={img} alt="" />
      <span className='text-lg font-bold'>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
    );
};

export default FloatingDiv;