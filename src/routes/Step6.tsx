import { useState } from "react";
import Header from "../components/Header";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";
import ButtonNext from "../utils/ButtonNext";
import ButtonBack from "../utils/ButtonBack";

const questions = [
  {
    id: 6,
    question: "Quale dei seguenti è un esempio di economia circolare?",
    options: [
      "Riparare e riutilizzare i prodotti",
      "Gettare i prodotti dopo un solo utilizzo",
      "Produrre nuovi beni da materie prime vergini",
      "Aumentare la produzione di rifiuti",
    ],
    answer: "Riparare e riutilizzare i prodotti",
  },
];

type QuizSixProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizSix({ score, setScore }: QuizSixProp) {
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
      <QuestionBox step={6}>
        <div className="p-3 text-center sm:w-auto">
          {questions.map((query) => (
            <div key={query.id}>
              <h1 className="pb-6 dark:text-white font-headers  font-medium text-2xl sm:text-xl sm:text-balance ">
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
            <ButtonNext currentStep={6} text="Next" />
            <ButtonBack currentStep={6} text="Back" />
          </div>
        </div>
      </QuestionBox>
    </>
  );
}

export default QuizSix;
