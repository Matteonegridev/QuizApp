import { useEffect, useState } from "react";
import Header from "../components/Header";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";
import ButtonBack from "../utils/ButtonBack";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./Loading";
// import LoadingPage from "./Loading";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Rome"],
    answer: "Paris",
  },
];

type QuizNineProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizNine({ score, setScore }: QuizNineProp) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [testDone, setTestDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const correctAnswer = questions[0].answer;

    if (selectedAnswer === correctAnswer && answer !== correctAnswer) {
      setScore(score - 1);
    }

    if (selectedAnswer !== correctAnswer && answer === correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(answer);
  };

  useEffect(() => {
    if (testDone) {
      setTimeout(() => {
        navigate("/questions/10");
      }, 2000);
    }
  }, [testDone, navigate, setIsLoading, isLoading]);

  return (
    <>
      {!isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <QuestionBox step={9}>
            <div className="p-3  text-center w-3/5">
              {questions.map((query) => (
                <div key={query.id}>
                  <h1 className="pb-6 dark:text-white font-headers font-medium text-3xl ">
                    {query?.question}
                  </h1>
                  {query?.options?.map((option) => (
                    <Question
                      onClick={() => {
                        handleAnswer(option);
                        setTestDone(true);
                        setIsLoading(false);
                      }}
                      key={option}
                      text={option}
                    />
                  ))}
                </div>
              ))}
              <div className="mt-4 flex gap-10 justify-center items-center">
                <ButtonBack currentStep={9} text="Back" />
              </div>
            </div>
          </QuestionBox>
        </>
      )}
    </>
  );
}

export default QuizNine;
