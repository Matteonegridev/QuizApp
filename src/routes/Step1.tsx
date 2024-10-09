import { useState } from "react";
import Header from "../components/Header";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";
import ButtonNext from "../utils/ButtonNext";

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
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

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

  return (
    <>
      <Header />
      <QuestionBox step={1}>
        <div className="p-3 text-center w-3/5 sm:w-[65ch]">
          {questions.map((query) => (
            <div key={query.id}>
              <h1 className="pb-6 dark:text-white font-headers font-medium text-3xl sm:text-xl sm:text-balance ">
                {query?.question}
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
          <div className="mt-4 flex gap-10 justify-center items-center">
            <ButtonNext currentStep={1} text="Next" />
          </div>
        </div>
      </QuestionBox>
    </>
  );
}

export default QuizOne;
