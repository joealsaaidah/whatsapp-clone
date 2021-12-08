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

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gradient-to-r from-purple-200 to-pink-200'>
        <div className='flex flex-col items-center justify-center p-16  rounded-xl shadow-lg bg-gradient-to-r from-purple-300 to-pink-300'>
          <ChatIcon className='h-16 w-16 mb-10 text-purple-500' />
          <div className='login__text'>
            <h1 className='text-xl font-thin text-purple-500 font-mono capitalize'>
              Welcome to mimicucu chat
            </h1>
          </div>
          <button
            onClick={() => signIn("google", { callbackUrl: "/chat" })}
            className='mt-12 py-3 px-10 rounded-lg text-white font-thin font-mono text-md capitalize bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-600 hover:to-purple-600'
          >
            sign in with google
          </button>
        </div>
      </main>
    </div>
  );
}
