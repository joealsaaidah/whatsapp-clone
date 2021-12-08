import { getProviders, signIn } from "next-auth/react";
import { ChatIcon } from "@heroicons/react/solid";
const signin = ({ providers }) => {
  return (
    <main className='flex flex-col min-h-screen py-2 items-center justify-center w-full flex-1 px-20 text-center bg-primary'>
      <div className='flex flex-col items-center justify-center p-24 bg-secondary rounded-xl shadow-md'>
        <div className='relative h-24 w-24 mb-10'>
          <ChatIcon className='text-[#56483b]' />
        </div>
        <div className='login__text'>
          <h1 className='text-3xl font-bold text-[#56483b]'>
            Welcome to mimicucu chat
          </h1>
        </div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/chat" })}
              className='mt-12 py-3 px-10 rounded-lg bg-[#a97a57] text-[#56483b] font-bold text-lg uppercase '
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
