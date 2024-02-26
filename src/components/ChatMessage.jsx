import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg p-2">
      <FontAwesomeIcon icon={faUser} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

ChatMessage.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatMessage;
