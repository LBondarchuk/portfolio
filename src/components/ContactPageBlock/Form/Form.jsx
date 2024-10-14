'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const form = useRef();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setEmailError('');
    setMessageError('');

    const email = form.current.user_email.value;
    const message = form.current.user_message.value;
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (message.trim() === '') {
      setMessageError('Message cannot be empty.');
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className='min-h-[600px] h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center  p-5 lg:p-24'
    >
      <span>Dear Leonid</span>
      <div className='flex flex-col gap-1'>
        <textarea
          rows={3}
          className='bg-white bg-opacity-50 rounded-xl border-b-2 border-b-black outline-none resize-none p-4'
          name='user_message'
        />
        {messageError && <span className='text-red-400  text-xs'>{messageError}</span>}
      </div>
      <span>My mail address is:</span>
      <div className='flex flex-col gap-1'>
        <input
          name='user_email'
          type='text'
          className='bg-white bg-opacity-50 p-4 rounded-xl h-[56px] border-b-2 border-b-black outline-none'
        />
        {emailError && <span className='text-red-400 text-xs'>{emailError}</span>}
      </div>
      <span>Regards</span>
      <div className='flex flex-col gap-2'>
        <button className='bg-purple-200 rounded font-semibold hover:bg-white hover:ring-2 transition-colors ring-purple-200 text-gray-600 p-4'>
          Send
        </button>
        {success && (
          <span className='text-green-600 font-semibold'>
            Your message has been sent successfully!
          </span>
        )}
        {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
      </div>
    </form>
  );
};

export default Form;
