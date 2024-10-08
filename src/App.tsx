import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import MainPage from "./components/Main-page.tsx";
import QuizOne from "./routes/Step1";
import QuizTwo from "./routes/Step2.tsx";
import QuizThree from "./routes/Step3.tsx";
import QuizFour from "./routes/Step4.tsx";
import QuizFive from "./routes/Step5.tsx";
import QuizSix from "./routes/Step6.tsx";
import QuizSeven from "./routes/Step7.tsx";
import QuizEight from "./routes/Step8.tsx";
import QuizNine from "./routes/Step9.tsx";
import ErrorPage from "./routes/Error-page.tsx";
import ScorePage from "./routes/Step10.tsx";

function App() {
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/questions/1"
          element={<QuizOne score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/2"
          element={<QuizTwo score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/3"
          element={<QuizThree score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/4"
          element={<QuizFour score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/5"
          element={<QuizFive score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/6"
          element={<QuizSix score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/7"
          element={<QuizSeven score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/8"
          element={<QuizEight score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/9"
          element={<QuizNine score={score} setScore={setScore} />}
        />
        <Route
          path="/questions/10"
          element={<ScorePage score={score} setScore={setScore} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
