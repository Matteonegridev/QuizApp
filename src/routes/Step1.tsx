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
        <div className="p-10 border border-black mt-5">
          {questions.map((query) => (
            <ul key={query.id}>
              <h1>
                {query?.question} {score}
              </h1>
              {query?.options?.map((option) => (
                <Question
                  onClick={() => handleAnswer(option)}
                  key={option}
                  text={option}
                />
              ))}
            </ul>
          ))}
        </div>
      </QuestionBox>
      <Button currentStep={1} className="" text="Next" />
    </>
  );
}
export default QuizOne;
