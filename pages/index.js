import Head from "next/head";
import Image from "next/image";
import { ChatIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>whatsApp-clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-primary'>
        <div className='flex flex-col items-center justify-center p-24 bg-secondary rounded-xl shadow-md'>
          <div className='relative h-24 w-24 mb-10'>
            <ChatIcon className='text-[#56483b]' />
          </div>
          <div className='login__text'>
            <h1 className='text-3xl font-bold text-[#56483b]'>
              Welcome to mimicucu chat
            </h1>
          </div>
          <button
            onClick={() => signIn()}
            className='mt-12 py-3 px-10 rounded-lg bg-[#a97a57] text-[#56483b] font-bold text-lg capitalize '
          >
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}
