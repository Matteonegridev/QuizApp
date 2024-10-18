import { Link } from "react-router-dom";

export type ButtonProps = {
  text: string;

  onClick: () => void;
};

function ButtonNext({ text, onClick }: ButtonProps) {
  return (
    <>
      <Link
        className="text-xl font-paragr rounded-md transition-all 250ms ease-in hover:bg-orange-300 py-3 flex justify-center items-center w-[20rem] bg-orangeAccent font-semibold text-black dark:text-white sm:w-[20rem] sm:text-lg"
        to={`/questions`}
        onClick={onClick}
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonNext;
