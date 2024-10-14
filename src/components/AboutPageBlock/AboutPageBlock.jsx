'use client';
import Brain from '@/components/Brain/Brain';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import MyStory from './MyStory/MyStory';
import Skils from './Skils/Skils';
import Expiriance from './Expiriance/Expiriance';
import PageContainer from '../PageContainer/PageContainer';

const AboutPageBlock = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <PageContainer>
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/1'>
          <MyStory />
          <Skils />
          <Expiriance />
        </div>
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPageBlock;
