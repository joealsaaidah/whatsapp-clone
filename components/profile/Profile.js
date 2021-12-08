import Image from "next/image";
import { DotsVerticalIcon, AnnotationIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import * as EmailValidator from "email-validator";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createChat = () => {
    const input = prompt(
      "please enter an email address for the user you wish to chat with"
    );
    if (!input) return;
    if (EmailValidator.validate(input)) {
      // push to db
    }
  };

  const signout = async ({ image }) => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.replace(data.url);
  };

  return (
    <div className=''>
      <div className='flex sticky top-0 justify-between items-center h-20 p-5 shadow-sm'>
        {/* header */}
        {session && (
          <div className='relative h-14 w-14 rounded-full'>
            <a href='#' title='sign out'>
              <Image
                src={session.user.image}
                layout='fill'
                objectFit='contain'
                onClick={signout}
                //onClick={() => signOut({ callbackUrl: "/" })}
                className='rounded-full cursor-pointer hover:opacity-80'
              />
            </a>
          </div>
        )}

        <div className='flex space-x-2 '>
          <AnnotationIcon className='icons ' />
          <DotsVerticalIcon className='icons ' />
        </div>
      </div>
      {/* search */}

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

export default Profile;
