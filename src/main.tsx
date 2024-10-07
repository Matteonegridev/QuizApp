import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/Main-page.tsx";
import QuizOne from "./routes/Step1";
import QuizTwo from "./routes/Step2.tsx";
import QuizThree from "./routes/Step3.tsx";
import QuizFour from "./routes/Step4.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/questions/1",
    element: <QuizOne />,
  },
  {
    path: "/questions/2",
    element: <QuizTwo />,
  },

  {
    path: "/questions/3",
    element: <QuizThree />,
  },
  {
    path: "/questions/4",
    element: <QuizFour />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
