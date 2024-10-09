import { useState } from "react";
import Header from "../components/Header";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";
import ButtonNext from "../utils/ButtonNext";
import ButtonBack from "../utils/ButtonBack";

const questions = [
  {
    id: 2,
    question:
      "Quale dei seguenti è un principio chiave dell'economia circolare?",
    options: [
      "Progettare per eliminare i rifiuti e l'inquinamento",
      "Aumentare il consumo di combustibili fossili",
      "Promuovere prodotti usa e getta",
      "Incoraggiare l'obsolescenza programmata",
    ],
    answer: "Progettare per eliminare i rifiuti e l'inquinamento",
  },
];

type QuizTwoProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizTwo({ score, setScore }: QuizTwoProp) {
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
      <QuestionBox step={2}>
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
            <ButtonNext currentStep={2} text="Next" />
            <ButtonBack currentStep={2} text="Back" />
          </div>
        </div>
      </QuestionBox>
    </>
  );
}

export default QuizTwo;
