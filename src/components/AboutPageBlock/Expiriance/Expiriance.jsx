import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import JobItem from './JobItem/JobItem';
import ProgressItem from './ProgressItem/ProgressItem';

const Expiriance = () => {
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px', once: true });
  return (
    <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
      <motion.h1
        initial={{ x: '-300px' }}
        animate={isExperienceRefInView ? { x: '0' } : {}}
        transition={{ delay: 0.2 }}
        className='font-bold text-2xl'
      >
        EXPERIENCE
      </motion.h1>

      <motion.div
        initial={{ x: '-300px' }}
        animate={isExperienceRefInView ? { x: '0' } : {}}
        className=''
      >
        <div className='flex justify-between h-48'>
          <JobItem
            time={'2022 - Present '}
            title={'Front End Developer'}
            place={'Freelance'}
            description={'I develop complex applications using React and Next.js.'}
          />
          <ProgressItem />
          <div className='w-1/3 '></div>
        </div>

        <div className='flex justify-between h-48'>
          <div className='w-1/3 '></div>
          <ProgressItem />
          <JobItem
            time={'2020 - 2022'}
            title={'Operations manager'}
            place={'Freelance'}
            description={'Engaged in analytics of various aspects of business'}
          />
        </div>

        <div className='flex justify-between h-48'>
          <JobItem
            time={'2018-2020'}
            title={'Restaurant manager'}
            place={'Amazing Place'}
            description={'Solved difficult problems.'}
          />
          <ProgressItem />
          <div className='w-1/3 '></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Expiriance;
