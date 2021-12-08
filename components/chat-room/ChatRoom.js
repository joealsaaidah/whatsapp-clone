import { PaperAirplaneIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Room = () => {
  return (
    <div className='flex flex-col justify-between bg-purple-200 col-span-2 '>
      <div className='mb-20 h-[460px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-600'>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex gap-5 m-6'>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='w-max max-w-[400px] p-3 h-15 rounded-xl bg-white'>
            hi, how r u, long time no see, how is your family, how is everything{" "}
          </div>
        </div>
        <div className='flex justify-end gap-5 m-6'>
          <p className='w-max max-w-[400px] p-3 h-15 rounded-xl text-white bg-purple-500'>
            hi, how r u
          </p>
          <div className='relative h-10 w-10 self-end'>
            <Image
              src='/images/1.jpg'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
        </div>
      </div>

      <div className='relative mt-3  rounded-md z-10'>
        <input
          className='w-full pl-10 py-2 text-md bg-transparent focus:text-purple-500 focus:outline-none focus:bg-white border-transparent border focus:border-purple-400 rounded-md'
          type='text'
          placeholder='write your message'
        />
        <div className='absolute right-0 top-0 bottom-0 pr-3 flex items-center'>
          <PaperAirplaneIcon className='h-7 w-7 text-gray-500 cursor-pointer hover:text-purple-500 hover:animate-bounce transform duration-150 ease-out' />
        </div>
      </div>
    </div>
  );
};

export default Room;
