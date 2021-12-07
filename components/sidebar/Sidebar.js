import Image from "next/image";
import { DotsVerticalIcon, AnnotationIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import * as EmailValidator from "email-validator";

const Sidebar = () => {
  const createChat = () => {
    const input = prompt(
      "please enter an email address for the user you wish to chat with"
    );
  };
  if (!input) return;
  if (EmailValidator.validate(input)) {
    //push to database
  }

  return (
    <div>
      <div className='flex sticky top-0 justify-between items-center h-20 p-5 shadow-sm'>
        {/* header */}
        <div className='relative h-14 w-14 rounded-full'>
          <Image
            src='/images/1.jpg'
            layout='fill'
            objectFit='contain'
            className='rounded-full cursor-pointer hover:opacity-80'
          />
        </div>
        <div className='flex space-x-2 '>
          <AnnotationIcon className='icons ' />
          <DotsVerticalIcon className='icons ' />
        </div>
      </div>
      {/* search */}
      <div className='flex items-center p-5 rounded-md'>
        <SearchIcon className='icons' />
        <input
          type='text'
          placeholder='Search in chats...'
          className='flex-1 outline-none'
        />
      </div>

      <div>
        <button
          onClick={createChat}
          className='w-full py-2 cursor-pointer uppercase hover:bg-gray-100 border-t-[1px] border-b-[1px] transition-all duration-150 ease-out '
        >
          Start a new chat
        </button>
      </div>
      {/* rooms */}
    </div>
  );
};

export default Sidebar;
