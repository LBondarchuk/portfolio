import Image from 'next/image';
import { motion } from 'framer-motion';

const MyStory = () => {
  return (
    <div className='flex flex-col gap-12 justify-center w-[100%]'>
      <Image
        src='/me.jpeg'
        alt=''
        width={112}
        height={112}
        className='w-28 h-28 rounded-full object-cover'
      />

      <h1 className='font-bold text-2xl'>MY STORY</h1>

      <p className='text-lg w-[100%]'>
        With over two years of experience as a frontend developer, I specialize in JavaScript,
        React, Redux, TypeScript, and Next.js. I excel in creating responsive, high-performance web
        applications and intuitive user interfaces. My focus is on delivering client-centric
        solutions by closely collaborating on software projects and ensuring seamless user
        experiences.I have a strong track record in integrating complex state management, real-time
        features with WebSockets, and building scalable applications using modern frameworks like
        Tailwind CSS and Chakra UI. I also have extensive experience with data visualizations using
        Recharts, handling large datasets and interactive components.Soft Skills: • Seamlessly adapt
        to team environments and foster collaboration. • Continuously transform challenges into
        opportunities for growth. • Structured approach to learning and mastering new technologies.
      </p>

      <span className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

      <div className='self-end'>
        <Image height={100} width={200} alt='signature' src={'/signatur.png'} />
      </div>

      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: '10px' }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width={50}
        height={50}
      >
        <path
          d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
          stroke='white'
          strokeWidth='1'
        ></path>
        <path d='M12 6V14' stroke='white' strokeWidth='1'></path>
        <path d='M15 11L12 14L9 11' stroke='white' strokeWidth='1'></path>
      </motion.svg>
    </div>
  );
};

export default MyStory;
