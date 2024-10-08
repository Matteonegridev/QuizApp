import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

type ScorePageProp = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function ScorePage({ score, setScore }: ScorePageProp) {
  const [isShow, setIsShow] = useState(false);

  const onRestart = () => setScore(0);

  return (
    <>
      <Header />
      <div>
        <h1>Congratulazioni! 🎉🎉 Hai terminato il Quiz!</h1>
        <p>Quante ne avrai indovinate?</p>
        <p>Clicca qui per vedere il tuo risultato!</p>
        <span>
          <a onClick={() => setIsShow(!isShow)} href="#">
            Mostra risultato
          </a>
        </span>
        {isShow &&
          (score <= 3 ? (
            <p>Waglio magnt u cazz: {score}</p>
          ) : score >= 4 && score <= 7 ? (
            <p>{score} bravoooo </p>
          ) : (
            "mostrooo"
          ))}
      </div>
      <div>
        <h1>Vuoi ricominciare il Quiz?</h1>
        <Link to={"/"} onClick={onRestart}>
          Ricomincia!
        </Link>
      </div>
    </>
  );
}
export default ScorePage;
