import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Comments = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-lg bg-gray-100 p-2 rounded-lg my-2">
      <FontAwesomeIcon
        icon={faUser}
        className="w-10 h-10"
      />
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

Comments.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comments;
