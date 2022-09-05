const Note = ({ subject, body }) => {
  return (
    <div className="shadow-lg bg-gray-300 w-80 h-auto rounded-lg p-3 hover:translate-y-5 cursor-pointer hover:shadow-green-500">
      <h2 className="text-black font-bold text-xl">{subject}</h2>
      <p className="text-gray-900 font-medium text-lg">{body}</p>
    </div>
  );
};

export default Note;
