import { Link } from "react-router-dom";

export type ButtonProps = {
  text: string;
  currentStep: number;
};

function ButtonNext({ text, currentStep }: ButtonProps) {
  return (
    <>
      <Link
        className={`${
          text === "Start!"
            ? "text-xl font-paragr rounded-md transition-all 250ms ease-in hover:bg-orange-300 px-8 py-2 bg-orange-400 font-semibold text-black dark:text-white"
            : "bg-green-500 w-[6rem] py-1 text-xl"
        } `}
        to={`/questions/${currentStep <= 10 ? currentStep + 1 : currentStep} `}
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonNext;
