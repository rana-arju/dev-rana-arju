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
            <div className="hero min-h-screen w-full md:w-10/12 mx-auto">
            <div className="hero-content flex-col md:flex-row gap-10">
            <div className="text-center md:text-left w-80 md:min-w-1/2">
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold capitalize">get in touch</h3>
                <p className="py-2 cl-title text-lg md:text-xl">Contact Me</p>
               
                <div class="card w-full md:max-w-96  text-primary-content py-10" style={{background: "var(--gray)"}}>
                    <div class="card-body text-left">
                        <div>
                            <h2 class="card-title">Address:</h2>
                            <p>Cox's Bazar, Bangladesh</p>
                        </div>
                        <div>
                            <h2 class="card-title">Phone:</h2>
                            <a href="tel:+8801881220413">01881220413</a>
                        </div> 
                        <div>
                            <h2 class="card-title">Email:</h2>
                            <a href="mailto:arjurana20@gmail.com">arjurana20@gmail.com</a>
                        </div>
                      
                    </div>
                    </div>
                
            </div>
            <div className="card flex-shrink-0 w-full md:min-w-1/2 shadow-2xl ">
                <form ref={form} onSubmit={sendEmail} >
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