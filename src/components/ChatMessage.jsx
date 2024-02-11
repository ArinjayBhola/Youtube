import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg p-2">
      <FontAwesomeIcon icon={faUser} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
