import PropTypes from "prop-types";

const Button = ({ name }) => {
  return (
    <div className="flex-shrink-0">
      <button className="h-10 w-auto px-2 sm:px-3 md:px-4 py-2 m-1 sm:m-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
