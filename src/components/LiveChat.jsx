import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/hepler";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    //API Polling
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        }),
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage
              name={c.name}
              message={c.message}
              key={index}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Arinjay", message: liveMessage }));
          setLiveMessage("");
        }}>
        <input
          type="text"
          className="w-56 p-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
