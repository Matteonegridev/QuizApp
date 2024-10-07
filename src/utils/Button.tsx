import { Link } from "react-router-dom";

type ButtonProps = {
  className: string;
  text: string;
  currentStep: number;
};

function Button({ className, text, currentStep }: ButtonProps) {
  return (
    <>
      <Link
        className={className}
        to={`/questions/${currentStep <= 10 ? currentStep + 1 : currentStep}`}
      >
        {text}
      </Link>
    </>
  );
}

export default Button;
