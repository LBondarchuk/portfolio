const JobItem = ({ title, description, time, place }) => {
  return (
    <div className='w-1/3 '>
      <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>{title}</div>

      <div className='p-3 text-sm italic'>{description} </div>

      <div className='p-3 text-white text-sm font-semibold'>{time}</div>

      <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>{place}</div>
    </div>
  );
};

export default JobItem;
