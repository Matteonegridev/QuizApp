import Header from "../components/Header";
import Button from "../utils/Button";
import QuestionBox from "../utils/Question-box";
import Question from "../utils/Questions";

const questions = [
  {
    id: 1,
    answer: "risposta2",
  },
  {
    id: 2,
    answer: "risposta2",
  },
  {
    id: 3,
    answer: "risposta2",
  },
  {
    id: 4,
    answer: "risposta2",
  },
];

function QuizTwo() {
  return (
    <>
      <Header />
      <QuestionBox step={2}>
        <div className="p-10 border border-black mt-5">
          {questions.map((query) => (
            <ul key={query.id}>
              <Question text={query.answer} />
            </ul>
          ))}
        </div>
      </QuestionBox>
      <Button currentStep={2} className="" text="Next" />
    </>
  );
}
export default QuizTwo;
