import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import MainPage from "./components/Main-page.tsx";
import ErrorPage from "./routes/Error-page.tsx";
import ScorePage from "./routes/Results.tsx";
import Quiz from "./routes/Quiz.tsx";

function App() {
  const [score, setScore] = useState<number>(0);
  const [query, setQuery] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage step={step} setStep={setStep} />} />
        <Route
          path="/questions"
          element={
            <Quiz
              step={step}
              setStep={setStep}
              score={score}
              setScore={setScore}
              query={query}
              setQuery={setQuery}
            />
          }
        />
        <Route
          path="/questions/result"
          element={
            <ScorePage
              setStep={setStep}
              setQuery={setQuery}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
