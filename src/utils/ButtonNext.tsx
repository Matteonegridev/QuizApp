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
            ? "text-xl font-paragr rounded-md transition-all 250ms ease-in hover:bg-orange-300 py-3 flex justify-center items-center w-[20rem] bg-orangeAccent font-semibold text-black dark:text-white sm:w-[20rem] sm:text-lg"
            : "dark:border-orangeAccent border-violet-600 border w-[8rem] py-2 text-xl rounded-md dark:text-white text-black font-black "
        } `}
        to={`/questions/${currentStep < 10 ? currentStep + 1 : currentStep} `}
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonNext;
