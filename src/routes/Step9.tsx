import Header from "../components/Header";
import Button from "../utils/ButtonNext";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";

const questions = [
  {
    id: 4,
    question: "What is the capital of USA?",
    options: ["Paris", "Berlin", "London", "Washington"],
    answer: "Washington",
  },
];

type QuizNineProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuizNine({ score, setScore }: QuizNineProp) {
  const handleAnswer = (answer: string) => {
    if (answer === questions[0].answer) setScore(score + 1);
  };

  return (
    <>
      <Header />
      <QuestionBox step={9}>
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
      <Button currentStep={9} className="" text="Next" />
    </>
  );
}
export default QuizNine;
