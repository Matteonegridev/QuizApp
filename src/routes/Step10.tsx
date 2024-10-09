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
      <section className="grid place-content-center min-h-screen -mt-14 [&>*]:dark:text-white ">
        <div className=" text-center">
          <h1 className="text-8xl font-headers font-extrabold leading-[7rem]">
            Congratulazioni! 🎉🎉{" "}
            <p className="font-medium">Hai terminato il Quiz!</p>
          </h1>
          <div className="p-5 mb-4">
            <p className="font-paragr text-violet-600 dark:text-orangeAccent text-2xl">
              Quante ne avrai indovinate?
            </p>
            <p className="text-2xl font-paragr">
              Clicca{" "}
              <a
                className="text-violet-600 dark:text-orangeAccent"
                onClick={() => setIsShow(!isShow)}
                href="#"
              >
                qui
              </a>{" "}
              per vedere il tuo risultato!
            </p>
          </div>
          {isShow &&
            (score <= 3 ? (
              <div className="mb-5">
                <p>Waglio magnt u cazz: {score}</p>
              </div>
            ) : score >= 4 && score <= 7 ? (
              <div className="mb-5">
                <p>{score} bravoooo </p>
              </div>
            ) : (
              <div className="mb-5">
                <p>{score} mostrooo </p>
              </div>
            ))}

          <div>
            <h1 className="text-4xl font-paragr">Vuoi ricominciare il Quiz?</h1>
            <Link
              className="font-paragr text-violet-600 text-2xl font-bold dark:text-orangeAccent"
              to={"/"}
              onClick={onRestart}
            >
              Ricomincia!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default ScorePage;
