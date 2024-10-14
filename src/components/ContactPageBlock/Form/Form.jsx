'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

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
      className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
    >
      <span>Dear Leonid</span>
      <textarea
        rows={6}
        className='bg-white bg-opacity-50 rounded-xl border-b-2 border-b-black outline-none resize-none'
        name='user_message'
      />
      <span>My mail address is:</span>
      <input
        name='user_email'
        type='text'
        className='bg-white bg-opacity-50 rounded-xl h-[56px] border-b-2 border-b-black outline-none'
      />
      <span>Regards</span>
      <button className='bg-purple-200 rounded font-semibold hover:bg-white hover:ring-2 transition-colors ring-purple-200 text-gray-600 p-4'>
        Send
      </button>
      {success && (
        <span className='text-green-600 font-semibold'>
          Your message has been sent successfully!
        </span>
      )}
      {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
    </form>
  );
};

export default Form;
