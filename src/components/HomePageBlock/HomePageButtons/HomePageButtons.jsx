import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePageButtons = () => {
  return (
    <div className='w-full flex gap-4 pb-10'>
      <Link href={'/portfolio'}>
        <button className=' p-4 rounded-lg ring-1 ring-white bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 hover:ring-1 active:bg-gray-300 active:text-black'>
          View My Work
        </button>
      </Link>
      <Link href={'/contact'}>
        <motion.button className='p-4 rounded-lg ring-1 ring-black bg-white text-black hover:bg-black hover:text-white hover:ring-white transition-colors duration-300 active:bg-gray-700 active:text-white'>
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
};

export default HomePageButtons;
