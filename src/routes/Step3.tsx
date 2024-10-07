import Header from "../components/Header";
import Button from "../utils/Button";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";

const questions = [
  {
    id: 3,
    question: "What is the capital of Portugal?",
    options: ["Paris", "Lisbona", "London", "Rome"],
    answer: "Lisbona",
  },
];

type QuizThreeProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizThree({ score, setScore }: QuizThreeProp) {
  const handleAnswer = (answer: string) => {
    if (answer === questions[0].answer) setScore(score + 1);
  };

  return (
    <>
      <Header />
      <QuestionBox step={3}>
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
      <Button currentStep={3} className="" text="Next" />
    </>
  );
}
export default QuizThree;
