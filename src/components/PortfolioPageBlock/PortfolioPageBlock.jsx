'use client';
import { useScroll, useTransform } from 'framer-motion';
import Progects from './Progects/Progects';
import { useEffect, useRef } from 'react';

import BottomBlock from './BottomBlock/BottomBlock';
import PageContainer from '../PageContainer/PageContainer';
const PortfolioPageBlock = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 5;
    }
  }, []);
  return (
    <PageContainer>
      <div className='h-[600vh] relative' ref={ref}>
        <div
          style={{ textShadow: '-1px 4px 6px rgba(255, 255, 255, 1)' }}
          className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'
        >
          My Works
        </div>
        <Progects x={x} />
      </div>
      <BottomBlock />
    </PageContainer>
  );
};

export default PortfolioPageBlock;
