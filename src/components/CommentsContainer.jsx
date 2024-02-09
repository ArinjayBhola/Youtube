import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "ABCDE",
      text: "Lorem ipsum dolor sit amet.",
      replies: [
        {
          name: "ABCDEF",
          text: "Lorem ipsum dolor sit amet.",
          replies: [
            {
              name: "ABCDEFG",
              text: "Lorem ipsum dolor sit amet.",
              replies: [
                {
                  name: "ABCDEFGH",
                  text: "Lorem ipsum dolor sit amet.",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ABCDEFGHI",
      text: "Lorem ipsum dolor sit amet.",
      replies: [
        {
          name: "ABCDE",
          text: "Lorem ipsum dolor sit amet.",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
