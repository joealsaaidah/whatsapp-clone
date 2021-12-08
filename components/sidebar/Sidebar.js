import { SearchIcon } from "@heroicons/react/solid";
import ChatItem from "./ChatItem";

const Sidebar = () => {
  return (
    <div className='flex flex-col  w-full h-[510px] '>
      <div className='flex flex-col p-7'>
        <h1 className='text-lg font-bold font-mono capitalize mb-6'>chat</h1>

        <div className='relative mt-1  rounded-md'>
          <div className='absolute inset-y-0  pl-3 flex items-center'>
            <SearchIcon className='h-5 w-5 text-gray-500' />
          </div>
          <input
            className='w-full pl-10 py-2 sm:text-sm bg-gray-200 focus:outline-none focus:bg-white border-transparent border focus:border-purple-400 rounded-md'
            type='text'
            placeholder='Search...'
          />
        </div>
      </div>

      <div className='divide-y divide-purple-300 flex items-center max-h-96 flex-col mt-5 px-3 overflow-y-scroll scrollbar-thumb-purple-900 scrollbar-thin'>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
};

export default Sidebar;
