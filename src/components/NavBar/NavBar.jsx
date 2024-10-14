'use client';

import Image from 'next/image';
import NavLink from './NavLink/NavLink';
import Link from 'next/link';
import ResponsiveMenu from './ResponsiveMenu/ResponsiveMenu';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-1'>Leonid</span>
          <span className='w-18 h-8 rounded bg-white text-black flex items-center justify-center'>
            .Bondarchuk
          </span>
        </Link>
      </div>

      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        <Link
          href='tel:+380689262855'
          target='_blank'
          className='hover:scale-105 hover:opacity-90 transition-opacity'
        >
          <Image src='/telephone.png' alt='' width={24} height={24} />
        </Link>
        <Link
          href='https://github.com/LBondarchuk'
          target='_blank'
          className='hover:scale-105 hover:opacity-90 transition-opacity'
        >
          <Image src='/github.png' alt='' width={24} height={24} />
        </Link>

        <Link
          href='https://www.linkedin.com/in/leonid-bondarchuk-571519284/'
          target='_blank'
          className='hover:scale-105 hover:opacity-90 transition-opacity'
        >
          <Image src='/linkedin.png' alt='' width={24} height={24} />
        </Link>

        <Link
          href='https://t.me/Leonid_Bondarchuk'
          target='_blank'
          className='hover:scale-105 hover:opacity-90 transition-opacity'
        >
          <Image src='/telegram.png' alt='' width={24} height={24} />
        </Link>
      </div>

      <ResponsiveMenu links={links} />
    </div>
  );
};

export default Navbar;
