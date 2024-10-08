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
            ? "text-xl font-paragr rounded-md transition-all 250ms ease-in hover:bg-orange-300 px-8 py-2 bg-orangeAccent font-semibold text-black dark:text-white"
            : "dark:border-orangeAccent border-violet-600 border w-[10rem] py-2 text-xl rounded-md dark:text-white text-black font-black "
        } `}
        to={`/questions/${currentStep < 10 ? currentStep + 1 : currentStep} `}
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonNext;
