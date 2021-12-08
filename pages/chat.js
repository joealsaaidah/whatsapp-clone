import ChatRoom from "../components/chat-room/ChatRoom";
import Sidebar from "../components/sidebar/Sidebar";
import Profile from "../components/profile/Profile";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

const chat = () => {
  return (
    <main className='flex items-center justify-center h-screen w-screen p-20 bg-gradient-to-r from-purple-200 to-pink-200'>
      <div className='grid grid-cols-4 h-full w-full bg-gray-50 rounded-3xl '>
        {/* left */}
        <Sidebar />
        {/* middle */}
        <ChatRoom />
        {/* right */}
        <Profile />
      </div>
    </main>
  );
};

export default chat;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
