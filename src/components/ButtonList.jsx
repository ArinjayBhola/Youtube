import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Recently Uploaded",
    "Live",
    "Cricket",
    "Gaming",
    "News",
    "Cooking",
    "Valentine",
    "History",
    "Budget",
    "Comedy",
    "Stocks",
    "Gadgets",
    "Motivation",
    "General Knowledge",
    "New To You",
    "Watched",
  ];

  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      {list.map((item) => (
        <Button
          key={item}
          name={item}
        />
      ))}
    </div>
  );
};

export default ButtonList;
