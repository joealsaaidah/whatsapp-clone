import Room from "../components/chat-room/Room";
import Sidebar from "../components/sidebar/Sidebar";

const chat = () => {
  return (
    <div className='grid grid-cols-3'>
      {/* left */}
      <Sidebar />
      {/* right */}
      <Room />
    </div>
  );
};

export default chat;
