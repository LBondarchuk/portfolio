const ProgressItem = () => {
  return (
    <div className='w-1/6 flex justify-center'>
      <div className='w-1 h-full bg-gray-600 rounded relative'>
        <div
          style={{ boxShadow: '0px 0px 8px 8px rgba(255,255,255,0.75)', border: '4px solid black' }}
          className='absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2'
        ></div>
      </div>
    </div>
  );
};

export default ProgressItem;
