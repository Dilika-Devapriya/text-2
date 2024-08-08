import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const [cname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    

    // EmailJS service details
    const serviceId = 'service_i4pclok';
    const templateId = 'template_q5znege';
    const publicKey = 'EHOLQr-tcFdAyw8AE';

    const templateParams = {
      from_name: cname,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setError('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setError('Failed to send email. Please try again later.');
      });
  };

  return (
    <section className='container py-16 bg-slate-200'>
      <div className='max-w-6xl mx-auto p-4 md:p-16 xl:p-20'>
        <div className='lg:w-2/3 space-y-5 text-center mx-auto'>
          <h1 className='text-gray-800 uppercase font-extrabold text-6xl'>
            Get in touch
          </h1>
          <div className='h-0.5 bg-red-600 w-14 mx-auto'></div>
          
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16'>
          <div>
            <address>
              <div className='mb-6'>
                <h2 className='text-base font-medium mb-2'>
                  Address:
                </h2>
                <p className='text-gray-400 text-sm font-medium leading-5'>
                  No 58 42nd Lane, Colombo 06, Sri Lanka
                </p>
              </div>
              <div className='mb-6'>
                <h2 className='text-base font-medium mb-2'>
                  Telephone number:
                </h2>
                <p className='text-gray-400 text-sm font-medium leading-5'>
                  (+94) 117 520 000
                </p>
              </div>
              <div className='mb-6'>
                <h2 className='text-base font-medium mb-2'>
                  Email:
                </h2>
                <p className='text-gray-400 text-sm font-medium leading-5'>
                  info@debugisp.net
                </p>
              </div>
            </address>
          </div>
          <div className='lg:col-span-2'>
            <form onSubmit={handleSubmit}>
              <div className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <label htmlFor="name" className='sr-only'>Name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer-focus:border-red-600 bg-inherit'
                    placeholder='Enter your name'
                    value={cname}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="email" className='sr-only'>Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer-focus:border-red-600 bg-inherit'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                  <label htmlFor="message" className='sr-only'>Message</label>
                  <textarea
                    name='message'
                    id='message'
                    className='px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer-focus:border-red-600 bg-inherit'
                    placeholder='Enter your message'
                    rows='3'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className='text-right'>
                  <button className='border-2 border-[#ff2525] text-[#ff2525] px-6 py-2 rounded-md hover:bg-[#ff2525] hover:text-white'>
                    Submit
                  </button>
                </div>
                {error && <p className='text-red-600'>{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
