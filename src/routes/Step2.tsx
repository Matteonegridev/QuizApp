import Header from "../components/Header";
import Button from "../utils/Button";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";

const questions = [
  {
    id: 2,
    question: "What is the capital of Italy?",
    options: ["Paris", "Berlin", "London", "Rome"],
    answer: "Rome",
  },
];

type QuizTwoProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizTwo({ score, setScore }: QuizTwoProp) {
  const handleAnswer = (answer: string) => {
    if (answer === questions[0].answer) setScore(score + 1);
  };

  return (
    <>
      <Header />
      <QuestionBox step={2}>
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
      <Button currentStep={2} className="" text="Next" />
    </>
  );
}
export default QuizTwo;
