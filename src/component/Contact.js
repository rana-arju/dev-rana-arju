import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio_rana_arju', 'template_we34ezl', form.current, 'NVoyRWy1HhJ-3DfFm')
      .then((result) => {
          if (result) {
              toast.success('Message Send Successful!')
          }
      }, (error) => {
          toast.error(error.text);
      });
      e.target.reset();
  };
    return (
        <div>
            <div className="hero min-h-screen w-10/12 mx-auto">
            <div className="hero-content flex-col md:flex-row">
            <div className="text-center lg:text-left w-full md:w-1/2">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl ">
                <form ref={form} onSubmit={sendEmail}>
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Name" name='name' className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Enter Email" name='email' className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 textarea-[var(--orange)]" placeholder="Type Message..." name='msg' required></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button className="custome-btn" type='submit'>Send Message</button>
                    
                    </div>
                    
                </div>
                </form>
                
                </div>
                <div className="blur" style={{ background: "var(--purple)", top: "1rem", left: "8rem" }}>
                    </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default Contact;