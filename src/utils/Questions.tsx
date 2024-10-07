type QuestionProp = {
  text: string;
  onClick: () => void;
};

function Question({ text, onClick }: QuestionProp) {
  return (
    <div className="border border-black w-1/4 flex gap-5 p-3 items-baseline [&>*]:text-xl">
      <li
        onClick={onClick}
        className="cursor-pointer w-full p-1 border border-black"
      >
        {text}
      </li>
    </div>
  );
}

export default Question;
