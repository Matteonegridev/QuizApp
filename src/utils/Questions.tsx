type QuestionProp = {
  text: string;
};

function Question({ text }: QuestionProp) {
  return (
    <div className="border border-black w-1/4 flex gap-5 p-3 items-baseline [&>*]:text-xl">
      <input type="checkbox" id="query" className="" />
      <label htmlFor="query">{text}</label>
    </div>
  );
}

export default Question;
