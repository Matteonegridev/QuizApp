type QuestionProp = {
  text: string;
  onClick: () => void;
};

function Question({ text, onClick }: QuestionProp) {
  return (
    <div className=" items-center justify-center flex w-full gap-5 p-3  ">
      <button
        onClick={onClick}
        className="cursor-pointer font-paragr w-2/3 py-2 rounded-sm text-2xl
        text-white bg-violet-600 hover:bg-violet-500 focus:shadow-custom-light  
        dark:bg-orange-400 dark:hover:bg-orange-300 dark:focus:shadow-custom-dark"
      >
        {text}
      </button>
    </div>
  );
}

export default Question;
