import { type ButtonProps } from "./ButtonNext";
import { Link } from "react-router-dom";

function ButtonBack({ text, currentStep }: ButtonProps) {
  return (
    <>
      <Link
        className="bg-red-500 w-[6rem] py-1 text-xl"
        to={`/questions/${currentStep > 0 ? currentStep - 1 : currentStep}`}
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonBack;
