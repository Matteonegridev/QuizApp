import Header from "../components/Header";
import Button from "../utils/Button";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Rome"],
    answer: "Paris",
  },
];

type QuizOneProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizOne({ score, setScore }: QuizOneProp) {
  const handleAnswer = (answer: string) => {
    if (answer === questions[0].answer) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <>
      <Header />
      <QuestionBox step={1}>
        <div className="p-3  text-center w-3/5">
          {questions.map((query) => (
            <div key={query.id}>
              <h1 className="pb-6 dark:text-white font-headers font-semibold text-3xl ">
                {query?.question} {score}
              </h1>
              {query?.options?.map((option) => (
                <Question
                  onClick={() => handleAnswer(option)}
                  key={option}
                  text={option}
                />
              ))}
            </div>
          ))}
        </div>
      </QuestionBox>
      <Button currentStep={1} className="" text="Next" />
    </>
  );
}
export default QuizOne;
