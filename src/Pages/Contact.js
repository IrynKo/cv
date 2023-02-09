import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Component/Footer';
import LinkFurther from '../Component/LinkFurther';


const initialState = {
    user_name: "",
    user_email: "",
    message: ""
  };

const Contact = () => {
    const [user, setUser] = useState({...initialState});
  const [text, setText] = useState('');
  const form = useRef(null);
  const handleChange = (e) => {
      const {name, value} = e.target
      setUser({
        ...user, [name]: value
    });
  }
  const formInfo=form.current?form.current:''
  const onHandleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_1c7af9g', 'template_kogeher', formInfo, 'wvIorJcpBSPzypUUp')
      .then(res=>{setText(res.text)}).catch(err=>{console.log(err)  
    })
    setUser({...initialState});
  }

 
    return (
        <>
        <div className='container contact'>
        <h2 className='page-title'>Contact.</h2>
        <p className='mb-6'>Get in touch via tel. <span className='contact-info__data'>+476765850387</span> or shoot an email direct on <span className='contact-info__data'>ikosynienko@gmail</span> </p>
        {text==='OK' && <p className="error">Your message is sent</p>}
        <form ref={form} onSubmit={onHandleSubmit}>
          <input  type='name' name="user_name"  onChange={handleChange} value={user.user_name} placeholder="Name"/>
          <input  type='email' name="user_email"  onChange={handleChange} value={user.user_email} placeholder="Email"/>
          <textarea className="form-email" name="message"  onChange={handleChange} value={user.message} placeholder="Messages"/>
          
          <button className="form-btn" type='submit'>Send a message</button>
      
        </form>
          <LinkFurther text="Go back home!" link=""/>
            <Footer/>
            </div>
        </>
        
    );
};

export default Contact;

