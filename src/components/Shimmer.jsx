const Shimmer = () => {
  let shimmerElements = [];

  for (let i = 0; i < 55; i++) {
    shimmerElements.push(
      <div
        key={i}
        className=" m-3 h-60 w-72 bg-gray-200 rounded-lg"></div>,
    );
  }

  return <div className="flex flex-wrap justify-center">{shimmerElements}</div>;
};

export default Shimmer;
