import { useState } from "react";
import Header from "../components/Header";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";
import ButtonNext from "../utils/ButtonNext";

const questions = [
  {
    id: 1,
    question: "Qual è l'obiettivo principale dell'economia circolare?",
    options: [
      "Ridurre i rifiuti e massimizzare l'uso delle risorse",
      "Aumentare la produzione di nuovi beni",
      "Promuovere prodotti monouso",
      "Massimizzare l'uso delle discariche",
    ],
    answer: "Ridurre i rifiuti e massimizzare l'uso delle risorse",
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
        <div className="p-3 text-center sm:w-auto ">
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
            <ButtonNext currentStep={1} text="Next" />
          </div>
        </div>
      </QuestionBox>
    </>
  );
}

export default QuizOne;
