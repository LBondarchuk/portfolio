import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ResponsiveMenu = ({ links }) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className='md:hidden'>
      <button
        className='w-10 h-8 flex flex-col justify-between z-50 relative'
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          variants={topVariants}
          animate={open ? 'opened' : 'closed'}
          className='w-10 h-1 bg-black rounded origin-left'
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={open ? 'opened' : 'closed'}
          className='w-10 h-1 bg-black rounded'
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={open ? 'opened' : 'closed'}
          className='w-10 h-1 bg-black rounded origin-left'
        ></motion.div>
      </button>

      {open && (
        <motion.div
          variants={listVariants}
          initial='closed'
          animate='opened'
          className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'
        >
          {links.map((link) => (
            <motion.div variants={listItemVariants} className='' key={link.title}>
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
