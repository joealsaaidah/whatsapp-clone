import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>whatsApp-clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-[#f8f8f8]'>
        <div className='flex flex-col items-center justify-center p-24 bg-white rounded-xl shadow-md'>
          <div className='relative h-24 w-24 mb-10'>
            <Image
              src='/images/whsapplogin.png'
              alt='whatsapp image'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='login__text'>
            <h1 className='text-3xl font-bold'>Sign in to WhatsApp</h1>
          </div>
          <button className='mt-12 p-3 rounded-lg bg-[#0a8d48] text-white capitalize '>
            Sign In With Google
          </button>
        </div>
      </main>
    </div>
  );
}
