import { type ButtonProps } from "./ButtonNext";
import { Link } from "react-router-dom";

function ButtonBack({ text, currentStep }: ButtonProps) {
  return (
    <>
      <Link
        className="dark:border-orangeAccent border-violet-600 border w-[10rem] py-2 text-xl rounded-md dark:text-white text-black font-black "
        to={`/questions/${currentStep > 0 ? currentStep - 1 : currentStep}`}
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonBack;
