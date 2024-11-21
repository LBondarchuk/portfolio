'use client';
import HomePageButtons from '../HomePageButtons/HomePageButtons';
import { motion } from 'framer-motion';

const HomePageTextContent = () => {
  const text = 'Crafting Digital Experiences, Building the Future of the Web.';
  return (
    <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
      <h1 className='  gap-8 text-4xl md:text-6xl font-bold text-white'>
        {' '}
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ left: 1000, opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 190 }}
        className='md:text-xl relative'
      >
        Welcome to my portfolio, where design meets functionality. As a front-end developer
        specializing in React, I bring concepts to life with clean, efficient code and a focus on
        delivering seamless user experiences. Explore my work to see how I turn ideas into
        interactive digital solutions.
      </motion.p>

      <HomePageButtons />
    </div>
  );
};

export default HomePageTextContent;
