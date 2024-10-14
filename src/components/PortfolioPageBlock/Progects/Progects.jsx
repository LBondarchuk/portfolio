'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { items } from './data';
const Progects = ({ x }) => {
  return (
    <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
      <motion.div style={{ x }} className='flex'>
        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
        {items.map((item) => (
          <div
            className={`h-screen w-screen  flex items-center justify-center bg-gradient-to-r ${item.color}`}
            key={item.id}
          >
            <div className='flex flex-col gap-8 text-white'>
              <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
                {item.title}
              </h1>
              <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-[20px] overflow-hidden'>
                <video
                  playbackRate
                  src={item.video}
                  className='object-cover w-full h-full'
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
              <div className='flex gap-10 items-center transition-opacity'>
                {item.link && (
                  <Link href={item.link} className='flex justify-end ' target='_blanck'>
                    <button className='hover:bg-purple-50 p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>
                      See Demo
                    </button>
                  </Link>
                )}

                <Link href={item.codeLink} className='flex justify-end' target='_blanck'>
                  <button className='hover:bg-purple-50 p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>
                    See Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Progects;
