import Image from "next/image";

const ChatItem = () => {
  return (
    <div className='flex justify-between mb-1 p-4  max-h-32 w-full'>
      <div className='flex'>
        <div className='relative h-10 w-10 rounded-full'>
          <Image
            src='/images/1.jpg'
            layout='fill'
            objectFit='contain'
            className='rounded-full cursor-pointer hover:opacity-80'
          />
        </div>
        <div className=' px-2 '>
          <h2 className='text-sm font-bold text-gray-600'>Username</h2>
          <h3 className='text-sm font-normal text-gray-400 max-w-[180px] truncate'>
            hi there! it is me what's up asdadsa adaskshd ajhsgdkjhagd
            asudhguaygd asdguaygdasdas asd asdqwq wedasd wqeqwd qwedasd
          </h3>
        </div>
      </div>

      <div className='flex items-center '>
        <p className='text-xs font-semibold text-gray-400'>1 min</p>
        {/* <p >2</p> */}
      </div>
    </div>
  );
};

export default ChatItem;
