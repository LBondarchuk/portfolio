'use client';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from '../NavBar/NavBar';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathName}
        className='w-screen h-screen bg-gradient-to-r from-[#304352] to-[#d7d2cc]'
      >
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className='fixed capitalize m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl lg:text-8xl cursor-default z-50 w-fit h-it'
          initial={{ opacity: 1, top: 300 }}
          animate={{ opacity: 0, z: -1, display: 'none' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        <div className='h-24'>
          <NavBar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
