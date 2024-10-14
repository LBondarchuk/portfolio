import Image from 'next/image';
import HomePageTextContent from './HomePageTextContent/HomePageTextContent';
import PageContainer from '../PageContainer/PageContainer';

const HomePageBlock = () => {
  return (
    <PageContainer>
      <div className=' h-full gap-20 overflow-scroll lg:gap-0  md:h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-480'>
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src='/hero.png' alt='' fill className='object-contain lg:object-cover' />
        </div>
        <HomePageTextContent />
      </div>
    </PageContainer>
  );
};

export default HomePageBlock;
