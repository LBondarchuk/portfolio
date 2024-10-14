import HomePageButtons from '../HomePageButtons/HomePageButtons';

const HomePageTextContent = () => {
  return (
    <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
      <h1 className='text-4xl md:text-6xl font-bold'>
        Crafting Digital Experiences, Building the Future of the Web.
      </h1>

      <p className='md:text-xl'>
        Welcome to my portfolio, where design meets functionality. As a front-end developer
        specializing in React, I bring concepts to life with clean, efficient code and a focus on
        delivering seamless user experiences. Explore my work to see how I turn ideas into
        interactive digital solutions.
      </p>

      <HomePageButtons />
    </div>
  );
};

export default HomePageTextContent;
