const ProgressItem = () => {
  return (
    <div className='w-1/6 flex justify-center'>
      <div className='w-1 h-full bg-gray-600 rounded relative'>
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
      </div>
    </div>
  );
};

export default ProgressItem;
