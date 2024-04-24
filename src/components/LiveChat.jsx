import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/hepler"; // Corrected typo "hepler" to "helper"

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating real-time messages using setInterval
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-96 lg:h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage
            name={c.name}
            message={c.message}
            key={index}
          />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.trim()) {
            dispatch(addMessage({ name: "Arinjay", message: liveMessage }));
            setLiveMessage("");
          }
        }}>
        <input
          type="text"
          className="w-full lg:w-3/4 p-2"
          placeholder="Type your message here..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="w-24 lg:w-32 p-2 bg-green-100 hover:bg-green-200 transition duration-200 ease-in-out">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
