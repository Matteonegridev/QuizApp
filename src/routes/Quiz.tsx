import { useEffect, useState } from "react";
import Header from "../components/Header";
import QuestionBox from "../components/Question-box";
import Question from "../utils/Questions";
import LoadingPage from "./Loading";
import { useNavigate } from "react-router-dom";
import { questions } from "../utils/Db";

type QuizProps = {
  score: number;
  step: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  query: number;
  setQuery: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

function Quiz({ score, setScore, query, setQuery, setStep }: QuizProps) {
  const [testDone, setTestDone] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const currentQuestion = questions[query];

  const handleAnswer = (answer: string) => {
    const correctAnswer = currentQuestion.answer;

    if (correctAnswer === answer) {
      setScore(score + 1);
    }

    if (query < questions.length - 1) {
      setQuery((prev) => prev + 1);
      setStep((prev) => prev + 1);
    }

    if (query === questions.length - 1) {
      setTestDone(true);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (testDone) {
      setTimeout(() => {
        navigate("/questions/result");
      }, 2000);
    }
  }, [testDone, navigate, setIsLoading, isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <QuestionBox step={query}>
            <div className="p-3 text-center sm:w-auto ">
              <h1 className="pb-6 dark:text-white font-headers font-medium text-2xl sm:text-xl sm:text-balance">
                {currentQuestion.question}
              </h1>
              {currentQuestion.options.map((option) => (
                <Question
                  onClick={() => {
                    handleAnswer(option);
                  }}
                  key={option}
                  text={option}
                />
              ))}
            </div>
          </QuestionBox>
        </>
      )}
    </>
  );
}

export default Quiz;
